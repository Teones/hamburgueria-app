import { Router } from "express";

import * as middlewares from "../middlewares/menuMiddlewares.js";
import * as controller from "../controllers/menuControlle.js";

const menuRouter = Router();
menuRouter.post("/menu", middlewares.createMenu, controller.create);
menuRouter.get("/menu", controller.menu)
// menuRouter.get("/menu/:category/:subcategory", middlewares.menuFilter, controller.menuFilter);
menuRouter.get("/menu/:id", controller.menuId)

export default menuRouter;