import Joi from "joi";

import { CreateMenuData } from "../services/menuServices.js";

const createMenu = Joi.object<CreateMenuData>({
    name: Joi.string().required(),
    image: Joi.string().uri().required(),
    price: Joi.string().pattern(/^[0-9]+$/).required(),
    description: Joi.string().required(),
    category: Joi.string().valid("Hamburguer", "Bebidas", "Doces e Sobremesas", "Combo").required(),
    subCategory: Joi. string().valid("Tradicional", "Artesanal").required()    
});

const menuFilter = Joi.object<CreateMenuData>({
    category: Joi.string().valid("Hamburguer", "Bebidas", "Doces e Sobremesas", "Combo").required(),
    subCategory: Joi. string().valid("Tradicional", "Artesanal")
});

export {
    createMenu,
    menuFilter
}