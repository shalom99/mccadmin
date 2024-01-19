"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

export default function PortfolioPage() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[1303px] pt-5 flex flex-col gap-y-10">
        <p className="text-3xl font-semibold">Portfolio</p>

        <div className="w-full flex gap-x-5">
          <Card className="w-[25%] cursor-not-allowed">
            <CardHeader>
              <CardTitle className="flex text-md">
                <p>Create</p>
              </CardTitle>
            </CardHeader>
            <CardContent></CardContent>
          </Card>

          <Card className="w-[25%] cursor-not-allowed">
            <CardHeader>
              <CardTitle className="flex text-md">
                <p>Update</p>
              </CardTitle>
            </CardHeader>
            <CardContent></CardContent>
          </Card>

          <Card className="w-[25%] cursor-not-allowed">
            <CardHeader>
              <CardTitle className="flex text-md">
                <p>Delete</p>
              </CardTitle>
            </CardHeader>
            <CardContent></CardContent>
          </Card>

          <Card className="w-[25%] cursor-not-allowed">
            <CardHeader>
              <CardTitle className="flex text-md">
                <p>Settings</p>
              </CardTitle>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        </div>
        <div>
        <Table>
      
      <TableHeader>
        <TableRow>
          <TableHead className=" flex gap-x-2 items-center justify-start">
            <input type="checkbox" />
            Select All
          </TableHead>
          <TableHead className="w-[100px]">Post #</TableHead>
          <TableHead>Post Title</TableHead>
          <TableHead>Post Description</TableHead>
          <TableHead className="text-center">Images</TableHead>
          <TableHead className="text-right">Image Quantity</TableHead>
          <TableHead className="text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        
      </TableBody>
    </Table>
        </div>
      </div>
    </div>
  );
}
