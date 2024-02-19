import { prisma } from "@/lib/prismadb"

export async function GET(request: Request) {
    const res = await prisma.products.findMany();
    const newProducts = await convertPricesToString(res)
    console.log("api",newProducts)

    return Response.json({res})
  }


  async function convertPricesToString(productsArray: any) {
    for (let i = 0; i < productsArray.length; i++) {
      productsArray[i].price = productsArray[i].price.toFixed(2);
    }
    return productsArray;
   }