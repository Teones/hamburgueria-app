import Joi from "joi";

import { CreatedUsersData } from "../services/userServices.js";

const signUpSchema = Joi.object<CreatedUsersData>({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

const signInSchema = Joi.object <CreatedUsersData> ({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

// const userName = Joi.object <CreatedUsersData> ({
//     email: Joi.string().email().required()
// })

export {
    signUpSchema,
    signInSchema,
    // userName
}