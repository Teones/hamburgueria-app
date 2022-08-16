import { NextFunction, Request, Response } from "express";

import * as schema from "../schemas/orderSchema.js"

export function validateOrder (req: Request, res: Response, next: NextFunction) {
    const user = req.body;
    const {error} = schema.createOrder.validate(user, {abortEarly: false});;
    if(error) {
        return res.status(422).send(error.details.map(detail => detail.message));
    };

    next();
};

export function validateControllOrder (req: Request, res: Response, next: NextFunction) {
    const user = req.body;
    const {error} = schema.createControllOrder.validate(user, {abortEarly: false});;
    if(error) {
        return res.status(422).send(error.details.map(detail => detail.message));
    };

    next();
};