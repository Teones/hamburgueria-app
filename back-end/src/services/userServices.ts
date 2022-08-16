import {Users} from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import * as repositories from "../repositories/userRepository.js"

export type CreatedUsersData = Omit <Users, "id">;

export async function signUp(user: CreatedUsersData) {
    const findByEmail = await repositories.findByEmail(user.email)
    if(findByEmail) { 
        throw { type: "conflict", message: "registered email already exists" }; 
    };

    const passwordEncrypt = bcrypt.hashSync(user.password, Number(process.env.SALT));

    const createuser = await repositories.insert(user, passwordEncrypt);
    return {... createuser}
};

export async function signIn (user: CreatedUsersData) {
    const findByEmail = await repositories.findByEmail(user.email);
    if(!findByEmail) { 
        throw { type: "unauthorized", message: "incorrect email" }; 
    };

    const authorization = bcrypt.compareSync(user.password, findByEmail.password);
    if (!authorization) {
        throw { type: "unauthorized", message: "Incorrect email or password"};
    };

    const token = jwt.sign(user, process.env.JWT);

    return {... findByEmail, token: token}
}

// export async function userName(token: string, email: string) {
//     const user = await repositories.findByEmail(email);
//     if (!user) throw { type: "unauthorized", message: "email not found"};

//     const verifyToken = await jwt.verify(token, process.env.JWT, (error) => {
//         if(error) { throw { type: "unauthorized", message: "Incorrect token" } }
//     })

//     return {... user, token: token}
// }