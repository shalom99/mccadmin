"use server";

import { prisma } from "@/lib/prismadb";
import { convertPricesToString } from "@/lib/utils";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import toast from "react-hot-toast";
import { z } from 'zod';


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

    return {
      status: 'success', 
      message: 'Succesfully added new product'
    }

    

    revalidatePath("/products");
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      // The .code property can be accessed in a type-safe manner
      if (e.code === 'P2002') {
        console.log(
          'There is a unique constraint violation, a new product cannot be created with this email'
        )
      }
    }
    throw e
  }

}

const UpdateForm = z.object({
  productId: z.coerce.number(),
  productName: z.string(),
  productDescription: z.string(),
  price: z.coerce.number(),
  stock: z.coerce.number(),
});


export async function updateProduct(formData: FormData) {

  const { productId, productName, productDescription, price, stock} = UpdateForm.parse({
    productId: formData.get('productId'),
    productName: formData.get('productName'),
    productDescription: formData.get('productDescription'),
    price: formData.get('productPrice'),
    stock: formData.get('productStock'),
  });

  const priceInCents = price * 100;


  try {
    await prisma.products.update({
      where: {
        product_id: productId,
      },
      data: {
        product_name: productName,
        description: productDescription,
        price: priceInCents,
        quantity_in_stock: stock
      },
    });
    revalidatePath("/products");
    return {
      status: 'success', 
      message: 'Updated product'
    }

  } catch (e) {
    return { message: `Database Error: Failed to Update Product. ${e}`}
  }


}

export async function deleteProduct(productId: number) {
  //  throw new Error('Failed to Delete Invoice');

  try {
    await prisma.products.delete({
      where: {
        product_id: productId,
      },
    });
    revalidatePath("/products");
    return {
      status: 'success', 
      message: 'Deleted Product'
    }

  } catch (err) {
    return { 
      status: 'error', 
      message: 'Database Error: Failed to delete Product'}
  }
}




// export async function getFullName(data: FormData) {
//   // we're gonna put a delay in here to simulate some kind of data processing like persisting data
//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   console.log("server action", data);
  
//   return {
//     status: "success",
//     message: `Welcome, ${data.get("firstName")} ${data.get("lastName")}!`,
//   };
// }


