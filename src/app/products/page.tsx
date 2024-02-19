
import ProductsTable from "./components/ProductsTable";

import AddProduct from "./components/AddProduct";
import { getProducts } from "@/actions/getProducts";




export default async function ProductsPage({}) {
  const fetchProducts = await getProducts();

  return (
    <div className="flex justify-center pt-10 px-10">
      <div className="w-[1303px] flex flex-col gap-y-5">
        <h1 className="text-3xl font-semibold">Products</h1>
        <ProductsTable products={fetchProducts} /> 
        <div className="flex justify-end">
          <AddProduct />
     
        </div>
      </div>
    </div>
  );
}
