import { Request, Response } from "express";

import * as services from "../services/orderServices.js"

export async function orders (req: Request, res: Response) {
    const data : services.CreateOrdersData = req.body;
    if (!data.userId) throw { type: "not_found", message: "missing data"};

    const cart = await services.orders(data)

    return res.status(200).send(cart)
}

export async function createOrder (req: Request, res: Response) {
    const data: services.CreateOrdersData = req.body
    if (!data.code || !data.total || !data.status) {
        throw { type: "not_found", message: "missing data"};
    }
    const create = await services.createOrder(data)

    return res.status(201).send(create)
}

export async function CreateControllOrder (req: Request, res: Response) {
    const data: services.CreateControllOrderData = req.body
    if (!data.menuId || !data.ordersId || !data.quantity) {
        throw { type: "not_found", message: "missing data"};
    }

    const create = await services.createOrderControll(data)

    return res.status(201).send(create)
}