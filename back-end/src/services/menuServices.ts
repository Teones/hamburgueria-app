import { Menu } from "@prisma/client";

import * as repositories from "../repositories/menuRepositories.js";

export type CreateMenuData = Omit <Menu, "id">;

export async function crate (item: CreateMenuData) {
    const duplicateItem = await repositories.findByName(item.name)
    if (duplicateItem) throw { type: "conflict", message: "item already exists"}

    return duplicateItem
}

export async function menu () {
    const menu = await repositories.menu();
    if (!menu) throw {type:"", message: ""}
    return menu
}

export async function menuId (id: number) {
    const item = await repositories.menuId(id)
    if (!item) throw {type: "", message: ""}
    return item
}

export async function menuHamburguerTraditional (category: string, subCategory: string) {
    const menu = await repositories.findByMenuHamburguerTraditional(category, subCategory);
    return menu;
};