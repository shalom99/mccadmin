
import { prisma } from "@/lib/prismadb";
import { NextResponse } from "next/server"

export async function GET(){
    const products =  await prisma.products.findMany();

     const newProducts = await convertPricesToString(products);

    return NextResponse.json({newProducts})
}

async function convertPricesToString(productsArray: any) {
    for (let i = 0; i < productsArray.length; i++) {
      productsArray[i].price = productsArray[i].price.toFixed(2);
    }
    return productsArray;
  }
  
  
