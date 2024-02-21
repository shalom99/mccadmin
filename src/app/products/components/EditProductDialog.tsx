"use client";
import { updateProduct } from "@/actions/ProductStore";
import { FC, useState } from "react";
import { MdClose } from "react-icons/md";
import { CldImage } from "next-cloudinary";
import { CldUploadButton } from "next-cloudinary";
import { CiEdit } from "react-icons/ci";
import toast from "react-hot-toast";

type EditProductDialogProps = {
  product: any;
  setShowDialog: (show: boolean) => void;
  setSelectedProduct: (set: {}) => void;
};

const EditProductDialog: FC<EditProductDialogProps> = ({
  product,
  setShowDialog,
  setSelectedProduct,
}) => {
  const [mockProduct, setMockProduct] = useState(product);

  return (
    <div className="fixed inset-0  flex items-center justify-center z-50 backdrop-blur-sm ">
      <div className="w-[600px] bg-white border flex flex-col rounded-lg">
        <div id="dialogHeader" className="w-full flex justify-between p-2 border-b">
          <h3 className="font-bold">Update Product</h3>
          <button onClick={closeDialog}>
            <MdClose
              size={25}
              className="rounded-full hover:bg-black hover:text-white duration-500"
            />
          </button>
        </div>
        <div id="dialogBody" className="flex flex-col py-2 px-5 gap-y-2">
          <div className="flex items-center gap-x-5">
            <label htmlFor="" className="text-sm">
              Item ID #:
            </label>
            <p className="text-sm py-1">{product.product_id}</p>
          </div>
          <div className="flex items-center gap-x-5">
            <label htmlFor="" className="text-sm">
              Name:
            </label>
            <input
              type="text"
              value={mockProduct.product_name}
              className="border rounded-lg pl-2 py-1 text-sm"
              onChange={(e) =>
                setMockProduct({ ...mockProduct, product_name: e.target.value })
              }
            />
          </div>
          <div className="flex items-center gap-x-5">
            <label htmlFor="" className="text-sm">
              Description:
            </label>
            <input
              type="text"
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

          <div className="flex gap-x-5 py-2">
            <div className="relative">
  

              <div className="outline-red-500 group">
                <CldImage
                  width="960"
                  height="600"
                  src="https://res.cloudinary.com/dhvo8k1o2/image/upload/v1685542399/j3mddwzxl7l7tj6qqoxn.webp"
                  sizes="(max-width: 640px) 100vw"
                  alt="Description of my image"
                  className="group-hover:brightness-50 duration-500"
                />
               
                <CldUploadButton
                  uploadPreset="ydkdgspf"
                  className="absolute bottom-0 right-0 m-auto z-40 border-blue-500"
                >
                  <CiEdit size={75} className="group-hover:text-white duration-500" />
                </CldUploadButton>
              </div>
            </div>
          </div>
        </div>
        <div
          id="dialogFooter"
          className="pb-5 px-5 flex justify-center gap-x-5"
        >
          <button
            onClick={() => {
              updateProduct(mockProduct);


              // toast.success("Success")
              // setSelectedProduct({});
              // setShowDialog(false);
            }}
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
      </div>
    </div>
  );

  function closeDialog() {
    setSelectedProduct({});
    setShowDialog(false);
  }
};

export default EditProductDialog;
