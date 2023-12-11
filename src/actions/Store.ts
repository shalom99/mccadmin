'use server'

import { prisma } from "@/lib/prismadb"

export async function getProducts() {
    const getProducts = await prisma.products.findMany()

    return getProducts;
}
