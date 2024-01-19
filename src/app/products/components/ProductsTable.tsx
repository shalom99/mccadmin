"use client";
import { FC, useState } from "react";

import { MdModeEdit, MdDeleteOutline } from "react-icons/md";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EditProductDialog from "./EditProductDialog";

import DeleteProductDialog from "./DeleteProductDialog";

type productType = {
  product_id: number,
  product_name: string,
  description: string,
  price: number,
  quantity_in_stock: number,
  category_id: number,
  image_url: string,
}

type ProductsTableProps = {
  products: any;
};



const ProductsTable: FC<ProductsTableProps> = ({ products }) => {
//   console.log(products[0]);
  const [selectedProduct, setSelectedProduct ] = useState({})
  const [showEditDialog, setShowEditDialog] = useState(false) 
  const [showDeleteDialog, setShowDeleteDialog] = useState(false) 

    console.log(selectedProduct)
  return (
    <Dialog>
      <Table>
        <TableCaption>A list of products in store</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className=" flex gap-x-2 items-center justify-start">
              <input type="checkbox" />
              Select All
            </TableHead>
            <TableHead className="w-[100px]">Item ID #</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-center">Quantity in stock</TableHead>
            <TableHead className="text-right">Image</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((item: productType, index: number) => (
            <>
              <TableRow>
                <TableCell>
                  <input type="checkbox" />
                </TableCell>
                <TableCell className="font-medium">{item.product_id}</TableCell>
                <TableCell>{item.product_name}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell className="text-right">${item.price}</TableCell>
                <TableCell className="text-center">
                  {item.quantity_in_stock}
                </TableCell>
                <TableCell className="text-right">{item.image_url}</TableCell>
                <TableCell className="">
                  <div className="flex items-center justify-center gap-x-2">
                    <button onClick={(e) => {setShowEditDialog(true); setSelectedProduct(item)}} className="group">
                    <MdModeEdit size="25" className="group-hover:scale-125 duration-500"/>
                    </button>
                    <button onClick={(e) => {setShowDeleteDialog(true); setSelectedProduct(item) }} className="group" >
                    <MdDeleteOutline size="25" className="group-hover:scale-125 duration-500"  />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>

      {showEditDialog && <EditProductDialog product={selectedProduct} setShowDialog={setShowEditDialog} setSelectedProduct={setSelectedProduct}/>}

      {showDeleteDialog && <DeleteProductDialog product={selectedProduct} setShowDialog={setShowDeleteDialog} setSelectedProduct={setSelectedProduct}/>}
               
            {/* <p>{JSON.stringify(selectedProduct)}</p> */}


    </Dialog>
  );
};

export default ProductsTable;
