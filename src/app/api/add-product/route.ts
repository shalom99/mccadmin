
import { prisma } from "@/lib/prismadb";
import { NextResponse } from "next/server"

export async function POST(request: Request){
    const res = await request.json()
    const {name, description, price, stock, image} = res;
     const result = await prisma.products.create({
        data: {
            product_name: name,
            description,
            price,
            quantity_in_stock: stock,
            category_id: 10,
            image_url: image,
        }
     })

    return NextResponse.json({result})
}