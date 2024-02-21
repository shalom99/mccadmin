"use server";

import { prisma } from "@/lib/prismadb";
import { convertPricesToString } from "@/lib/utils";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import toast from "react-hot-toast";


export async function getProducts() {
  const products = await prisma.products.findMany();
  // console.log("products", products)
  const newProducts = await convertPricesToString(products);
  return newProducts;
}

export async function addProduct(productData: any) {

  try {
    const addItem = await prisma.products.create({
      data: {
        product_name: productData.name,
        price: productData.price,
        description: productData.description,
        quantity_in_stock: productData.stock,
        category_id: 10,
        image_url: ""
      }
    })

    revalidatePath("/products");
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      // The .code property can be accessed in a type-safe manner
      if (e.code === 'P2002') {
        console.log(
          'There is a unique constraint violation, a new user cannot be created with this email'
        )
      }
    }
    throw e
  }

}


export async function updateProduct(newProductData: any) {

  try {
    await prisma.products.update({
      where: {
        product_id: newProductData.product_id,
      },
      data: {
        product_name: newProductData.product_name,
        description: newProductData.description,
        price: newProductData.price,
        quantity_in_stock: newProductData.quantity_in_stock,
        image_url: newProductData.image_url,
      },
    });
    revalidatePath("/products");
    return { message: 'Successfully updated product' }

  } catch (e) {
    return { message: 'Database Error: Failed to Update Product'}
  }


}

export async function deleteProduct(productId: number) {
  try {
    await prisma.products.delete({
      where: {
        product_id: productId,
      },
    });
    revalidatePath("/products");
  } catch (err) {
    console.log("Error Deleting", err);
  }
}
