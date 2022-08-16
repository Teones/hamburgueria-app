import { prisma } from "../config/database.js"

import { CreatedUsersData } from "../services/userServices.js"

export async function findByEmail (email: string) {
    return prisma.users.findUnique({
        where: {
            email: email
        }
    });
};

export async function insert(user: CreatedUsersData, password: string) {
    return prisma.users.create({
        data: {
            name: user.name,
            email: user.email,
            password: password,
        }
    })
}