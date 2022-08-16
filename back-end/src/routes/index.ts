import { Router } from "express";

import userRouter from "./userRouter.js";
import menuRouter from "./menuRouter.js";
import orderRouter from "./orderRouter.js";

const router = Router();
router.use(userRouter);
router.use(menuRouter);
router.use(orderRouter);

export default router;