import { prisma } from "@/lib/prismadb";
import ProductsTable from "./components/ProductsTable";

import { MdAdd } from "react-icons/md";


function convertPricesToString(productsArray: any) {
  for (let i = 0; i < productsArray.length; i++) {
    productsArray[i].price = productsArray[i].price.toFixed(2);
  }
  return productsArray;
}


async function getProducts(){
  const products =  await prisma.products.findMany();

  const newProducts = await convertPricesToString(products);

  return newProducts;

}

export default async function ProductsPage({}) {
  const getProduct = await getProducts();



  return (
    <div className="flex justify-center pt-10 px-10">
      <div className="w-[1303px] flex flex-col gap-y-5">
        <h1 className="text-3xl font-semibold">Products</h1>
        <ProductsTable products={getProduct} />
        <div className="flex justify-end">
          <button className="flex items-center justify-center bg-gray-300 rounded-lg px-2 py-1 font-semibold ">
            Add item
            <MdAdd size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
