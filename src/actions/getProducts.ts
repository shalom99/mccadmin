import { prisma } from "@/lib/prismadb";

export const dynamic = "force-dynamic"

async function convertPricesToString(productsArray: any) {
  for (let i = 0; i < productsArray.length; i++) {
    productsArray[i].price = productsArray[i].price.toFixed(2);
  }
  return productsArray;
 }

 export async function getProducts (){
  const products =  await prisma.products.findMany();
  console.log("products", products)
  const newProducts = await convertPricesToString(products);
  return newProducts;
 }