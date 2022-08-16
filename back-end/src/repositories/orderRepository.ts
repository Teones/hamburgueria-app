import { prisma } from "../config/database.js";

import { CreateControllOrderData, CreateOrdersData } from "../services/orderServices.js";

export async function orders (userId: number) {
    return prisma.orders.findMany({
        where: {
            userId
        }
    })
}

export async function findByCode(code: string) {
    return prisma.orders.findFirst({
        where: {
            code
        }
    })
}

export async function findByOrder() {
    return prisma.orders.findFirst({
        where: {
            status: "Edit"
        }
    })
}

export async function createOrder ({code, total, status}: CreateOrdersData, userId: number) {
    return prisma.orders.create({
        data: {
            code,
            userId,
            total,
            status
        }
    })
}

export async function createControll(menuId: number, ordersId: number, quantity: number) {
    return prisma.controlOfOrders.create({
        data: {
            menuId,
            ordersId,
            quantity
        }
    })
}