'use server'

import { prisma } from "@/lib/prismadb"
import { revalidatePath } from "next/cache";

export async function getProducts() {
    const products = await prisma.products.findMany()

    return products;
}



export async function updateProduct(newProductData: any){

    const product = await prisma.products.findUnique({
        where: {
            product_id: newProductData.product_id
        }
    })


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

export async function deleteProduct(productId: number){

    try{
        await prisma.products.delete({
            where: {
                product_id:  productId
            }
        })

        revalidatePath('/products')
    }catch(err){
        console.log("Error Deleting")
    }


}

