import { Request, Response } from "express";

import * as services from "../services/menuServices.js"

export async function create (req: Request, res: Response) {
    const {name, image, price, description, category, subCategory}: services.CreateMenuData = req.body
    const item: services.CreateMenuData = req.body
    if (!name || !image || !price || !category || !description || !subCategory) {
        throw { type: "not_found", message: "missing data"};
    }; 

    const create = await services.crate(item);

    return res.status(200).send(create)
}

export async function menu (req: Request, res: Response) {
    const menu = await services.menu();

    return res.status(200).send(menu);
}

export async function menuId (req: Request, res: Response) {
    const {id} = req.params;
    if (!id) throw { type: "", message: ""}

    const item = await services.menuId(Number(id))

    return res.status(200).send(item)
}






export async function menuFilter (req: Request, res: Response) {
    const {category, subCategory} = req.params
    if (
        (category !== "Hamburguer" || "Bebidas" || "Doces e Sobremesas" || "Combos") ||
        (category === "Hamburguer" && subCategory !== "Tradicional" || "Artesanal")
        ) {
        throw { type: "not_found", message: ""}
    } 
    const menu = await services.menuHamburguerTraditional(category, subCategory);
    return res.status(200).send(menu);
}