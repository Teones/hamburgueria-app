import { Router } from "express";

import * as controller from "../controllers/userController.js"
import * as validate from "../middlewares/userMiddleware.js"

const userRouter = Router();
userRouter.post("/sign-up", validate.validateSignUp, controller.signUp);
userRouter.post("/sign-in", validate.validateSignIn, controller.signIn);
// userRouter.get("/user", /*validate.validateUser,*/ controller.userName)
userRouter.put("/forgot")

export default userRouter;