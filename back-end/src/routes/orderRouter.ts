import { Router } from "express";

import * as controller from "../controllers/orderController.js"
import * as validations from "../middlewares/orderMiddlewares.js"

const orderRouter = Router();
orderRouter.get("/order", controller.orders)
orderRouter.post("/order", validations.validateOrder, controller.createOrder);
orderRouter.post("/orderControll", validations.validateControllOrder, controller.CreateControllOrder)

export default orderRouter;