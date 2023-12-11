'use server'

import { prisma } from "@/lib/prismadb"

export async function getProducts() {
    const products = await prisma.products.findMany()

    return products;
}

export async function updateProduct(newProductData: any){



    const setUppdateProduct = await prisma.products.update({
        where: {
            product_id: newProductData.product_id
        },
        data: {
            product_name: newProductData.product_name,
            description: newProductData.description,
            price: newProductData.price,
            quantity_in_stock: newProductData.quantity_in_stock,
            image_url: newProductData.image_url,
        }
    })


}