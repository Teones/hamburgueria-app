import Joi from "joi";

import { CreateControllOrderData, CreateOrdersData } from "../services/orderServices.js";

const createOrder = Joi.object<CreateOrdersData>({
    code: Joi.string().required(),
    total: Joi.string().required(),
    status: Joi.string().valid("Edit", "Cancelado", "Entregue", "Criado").required()
    // price: Joi.string().pattern(/^[0-9]+$/).required(),  
});

const createControllOrder = Joi.object <CreateControllOrderData> ({
    menuId: Joi.string().pattern(/^[0-9]+$/).required(),
    ordersId: Joi.string().pattern(/^[0-9]+$/).required(),
    quantity: Joi.string().required(),
})

export {
    createOrder,
    createControllOrder
}