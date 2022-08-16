import { prisma } from "../config/database.js";
import { CreateMenuData } from "../services/menuServices.js";

export async function findByName(name: string) {
    return prisma.menu.findFirst({
        where: {
            name
        }
    })
}

export async function menu() {
    return prisma.menu.findMany()    
}

export async function menuId (id: number) {
    return prisma.menu.findUnique({
        where: {
            id
        }
    })
}

export async function cart (cartsId: number[]) {
    return prisma.menu.findMany({
        where: {
            id: {in: cartsId}
        }
    })
}

export async function findByMenuHamburguerTraditional(category: string, subCategory: string) {
    return prisma.menu.findMany({
        where: {
            category,
            subCategory
        }
    })
}