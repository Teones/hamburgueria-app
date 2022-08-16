import { Orders, ControlOfOrders } from "@prisma/client"

export type CreateOrdersData = Omit <Orders, "id">;
export type CreateControllOrderData = Omit <ControlOfOrders, "id">;

import * as repositoriesMenu from "../repositories/menuRepositories.js"
import * as repositories from "../repositories/orderRepository.js"

export async function orders (data: CreateOrdersData) {
    // let ordersId = []
    // const cart = data["order"].map((item) => ordersId.push(Number(item["menuId"])))
    // const resposta = await repositoriesMenu.cart(ordersId)
    const orders = await repositories.orders(Number(data.userId))

    return orders   
}

export async function createOrder (data: CreateOrdersData) {
    const findByCode = await repositories.findByCode(data.code)
    if (findByCode) throw { type: "conflict", message: "order already exists"}

    const create = await repositories.createOrder(data, 6)

    return create
}

export async function createOrderControll ({menuId, ordersId, quantity}: CreateControllOrderData) {
    const order = await repositories.findByOrder()
    if (!order) throw { type: "", message: ""}
    const menu = await repositoriesMenu.menuId(Number(menuId))
    if (!menu) throw { type: "", message: ""}
    
    const create = await repositories.createControll(Number(menuId), Number(ordersId), Number(quantity))

    return create
}