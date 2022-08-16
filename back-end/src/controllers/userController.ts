import { Request, response, Response } from "express";

import * as services from "../services/userServices.js";

export async function signUp (req: Request, res: Response) {
    const user: services.CreatedUsersData = req.body;
    if(!user.name || !user.email || !user.password) {
        throw { type: "not found" };
    };

    const signUp = await services.signUp(user);

    return res.status(201).send(signUp); // created
};

export async function signIn (req: Request, res: Response) {
    const user: services.CreatedUsersData = req.body;
    if (!user.email || !user.password) {
        throw {type: "not found", message: "enter a password and email"}
    };

    const signIn = await services.signIn(user);

    return res.status(200).send(signIn);
}

// export async function userName (req: Request, res: Response) {
//     console.log("rodou")
//     const email: string = req.body["email"];
//     const token = req.headers["token"] as string;
//     console.log(email, token)
//     if (!email || !token) throw {type: "", message: ""}

//     const user = await services.userName(token, email)

//     return res.status(200).send(user)
// }