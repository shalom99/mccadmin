"use server";

import { prisma } from "@/lib/prismadb";
import { revalidatePath } from "next/cache";



function convertPricesToString(productsArray: any) {
  for (let i = 0; i < productsArray.length; i++) {
    productsArray[i].price = productsArray[i].price.toFixed(2);
  }
  return productsArray;
}

export async function getProducts() {
  const products = await prisma.products.findMany();

  const productsWithStringPrices = convertPricesToString(products);
  console.log(productsWithStringPrices);

  return productsWithStringPrices;
}

export async function updateProduct(newProductData: any) {
  const product = await prisma.products.findUnique({
    where: {
      product_id: newProductData.product_id,
    },
  });

  const setUppdateProduct = await prisma.products.update({
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
    console.log("Error Deleting");
  }
}
