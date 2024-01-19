
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

export default function OrdersPage() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[1303px] flex flex-col pt-10">
        <p className="text-3xl font-semibold">Orders</p>

        <Table>
      
      <TableHeader>
        <TableRow>
          <TableHead className=" flex gap-x-2 items-center justify-start">
            <input type="checkbox" />
            Select All
          </TableHead>
          <TableHead className="w-[100px]">Order #</TableHead>
          <TableHead>Customer Name</TableHead>
          <TableHead>Customer Email</TableHead>
          <TableHead className="text-right">Price / Cap</TableHead>
          <TableHead className="text-center">Quantity</TableHead>
          <TableHead className="text-right">Cap Image</TableHead>
          <TableHead className="text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        
      </TableBody>
    </Table>
    </div>
    </div>
  );
}
