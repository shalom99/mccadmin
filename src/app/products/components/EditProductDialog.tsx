"use client";
import {  updateProduct } from "@/actions/ProductStore";
import { FC, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { CldImage } from "next-cloudinary";
import { CldUploadButton } from "next-cloudinary";
import { CiEdit } from "react-icons/ci";
import toast from "react-hot-toast";
import { useForm } from 'react-hook-form'
import { useFormState } from "react-dom";

type EditProductDialogProps = {
  product: any;
  setShowDialog: (show: boolean) => void;
  setSelectedProduct: (set: {}) => void;
};

type FormValues = {
  productName: string;
  description: string;
  price: number;
  quantity_in_stock: number;
  image_url: string;
}


const EditProductDialog: FC<EditProductDialogProps> = ({
  product,
  setShowDialog,
  setSelectedProduct,
}) => {
  const [mockProduct, setMockProduct] = useState(product);
  // const [state, formAction] = useFormState<State, FormData>(getFullName, null) 


  const { register } = useForm();

  // useEffect(() => {
  //   if (!state) {
  //     return;
  //   }
  
  //   if (state.status === "success") {
  //     alert(state.message);
  //   }
  // }, [state]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="w-[600px] bg-white border flex flex-col rounded-lg">
        <div
          id="dialogHeader"
          className="w-full flex justify-between p-2 border-b"
        >
          <h3 className="font-bold">Update Product</h3>
          <button onClick={closeDialog}>
            <MdClose
              size={25}
              className="rounded-full hover:bg-black hover:text-white duration-500"
            />
          </button>
        </div>

        <div id="dialogBody">
          <form action={updateProduct} className="w-full h-full flex flex-col gap-y-2 px-5">
          <div className="flex items-center gap-x-5">
            <label htmlFor="productId" className="text-sm">
              Item ID #:
            </label>
            <input id="productId" name="productId" value={product.product_id} className="text-sm py-1 pointer-events-none" />
          </div>
          <div className="flex items-center gap-x-5">
            <label htmlFor="productName" className="text-sm">
              Name:
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={mockProduct.product_name}
              className="border rounded-lg pl-2 py-1 text-sm"
              onChange={(e) =>
                setMockProduct({ ...mockProduct, product_name: e.target.value })
              }
            />
          </div>
          <div className="flex items-center gap-x-5">
            <label htmlFor="productDescription" className="text-sm">
              Description:
            </label>
            <input
              type="text"
              id="productDescription"
              name="productDescription"
              value={mockProduct.description}
              className="border rounded-lg pl-2 py-1 text-sm"
              onChange={(e) =>
                setMockProduct({ ...mockProduct, description: e.target.value })
              }
            />
          </div>
          <div className="flex gap-x-5">
            <div className="w-[50%] flex items-center gap-x-5">
              <label htmlFor="" className="text-sm">
                Price:
              </label>
              <input
                type="number"
                id="productPrice"
                name="productPrice"
                value={mockProduct.price}
                onChange={(e) =>
                  setMockProduct({ ...mockProduct, price: e.target.value })
                }
                className="border w-[50%] rounded-lg pl-2 pr-1 py-1 text-sm"
              />
            </div>
            <div className="w-[50%] flex items-center gap-x-5">
              <label htmlFor="" className="text-sm">
                Stock:
              </label>
              <input
                type="number"
                id="productStock"
                name="productStock"
                value={mockProduct.quantity_in_stock}
                onChange={(e) =>
                  setMockProduct({
                    ...mockProduct,
                    quantity_in_stock: e.target.value,
                  })
                }
                className="border w-[50%] rounded-lg pl-2 pr-1 py-1 text-sm"
              />
            </div>
          </div>

          <div className="relative flex gap-x-5 py-2 group border-2 rounded-lg mt-2 p-1">
            <CldImage
              width="960"
              height="600"
              src="https://res.cloudinary.com/dhvo8k1o2/image/upload/v1708562982/customcaps/stock/tfdbfiebctygebripg6i.jpg"
              sizes="100vw"
              alt="Description of my image"
              className="h-[300px] group-hover:brightness-50 duration-500"
            />

            <div className="absolute left-0 right-0 top-0 bottom-0 mx-auto z-40">
              <CldUploadButton
                uploadPreset="ydkdgspf"
                className="w-full h-full flex items-center justify-center "
              >
                <CiEdit
                  size={150}
                  className="opacity-0 group-hover:opacity-100 group-hover:text-white duration-500"
                />
              </CldUploadButton>
            </div>
          </div>

          <div className="w-full flex justify-center gap-x-10 pt-4 pb-2">
            <button
              // onClick={async () => {
              //   const { message } = await updateProduct(mockProduct);
              //   if (message === "Successfully updated product") {
              //     toast.success(message);
              //   } else {
              //     toast.error(message);
              //   }

              //   setSelectedProduct({});
              //   setShowDialog(false);
              // }}
              type="submit"
              className="border-2 border-green-700 py-1 px-2 rounded-xl text-green-700 text-sm hover:text-white hover:bg-green-700 hover:scale-110 duration-500"
            >
              Save
            </button>
            <button
              className="border-2 border-red-700 py-1 px-2 rounded-xl text-red-700 text-sm hover:text-white hover:bg-red-700 hover:scale-110 duration-500"
              onClick={closeDialog}
            >
              Close
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );

  function closeDialog() {
    setSelectedProduct({});
    setShowDialog(false);
  }
};

export default EditProductDialog;
