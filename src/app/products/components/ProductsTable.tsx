"use client";
import { FC } from "react";

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
type ProductsTableProps = {
  products: any;
};

const ProductsTable: FC<ProductsTableProps> = ({ products }) => {
  console.log(products[0]);
  return (
    <Table>
      <TableCaption>A list of products in store</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Item #</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="text-right">Price</TableHead>
          <TableHead className="text-right">Quantity in stock</TableHead>
          <TableHead className="text-right">Image</TableHead>
          <TableHead className="text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((item: any, index: number) => (
          <>
            <TableRow>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{item.product_name}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell className="text-right">{item.price}</TableCell>
              <TableCell className="text-right">
                {item.quantity_in_stock}
              </TableCell>
              <TableCell className="text-right">{item.image_url}</TableCell>
              <TableCell className="">
                <div className="flex items-center justify-center gap-x-2">
                  <MdModeEdit size="25"/>
                  <MdDeleteOutline size="25"/>
                </div>
              </TableCell>
            </TableRow>
          </>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductsTable;
