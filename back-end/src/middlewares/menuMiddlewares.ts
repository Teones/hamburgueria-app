import { NextFunction, Request, Response } from "express";

import * as menuSchema from "../schemas/menuSchema.js"

export function createMenu (req: Request, res: Response, next: NextFunction) {
    const menu = req.body;
    const {error} = menuSchema.createMenu.validate(menu, {abortEarly: false});
    if (error) {
        return res.status(422).send(error.details.map(detail => detail.message));
    };

    next ();
};

export function menuFilter (req: Request, res: Response, next: NextFunction) {
    const filter = req.body;
    const {error} = menuSchema.menuFilter.validate(filter, {abortEarly: false});
    if (error) {
        return res.status(422).send(error.details.map(detail => detail.message));
    };

    next ();
};