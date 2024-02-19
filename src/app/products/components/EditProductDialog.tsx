"use client";
import { updateProduct } from "@/actions/ProductStore";
import { FC, useState } from "react";
import { MdClose } from "react-icons/md";
import { CldImage } from 'next-cloudinary';

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
      <div className="w-[500px] bg-white border flex flex-col rounded-lg">
        <div id="dialogHeader" className="w-full flex justify-end p-2">
          <button onClick={closeDialog}>
            <MdClose
              size={25}
              className="border rounded-xl p-1 hover:bg-black hover:text-white duration-500"
            />
          </button>
        </div>
        <div id="dialogBody" className="flex flex-col pb-2 px-5 gap-y-2">
          <div className="flex gap-x-5">
            <label htmlFor="" className="text-sm">
              Item ID #:
            </label>
            <p className="text-sm">{product.product_id}</p>
          </div>
          <div className="flex gap-x-5">
            <label htmlFor="" className="text-sm">
              Name:
            </label>
            <input
              type="text"
              value={mockProduct.product_name}
              className="border rounded-lg pl-2 text-sm"
              onChange={(e) =>
                setMockProduct({ ...mockProduct, product_name: e.target.value })
              }
            />
          </div>
          <div className="flex gap-x-5">
            <label htmlFor="" className="text-sm">
              Description:
            </label>
            <input
              type="text"
              value={mockProduct.description}
              className="border rounded-lg pl-2 text-sm"
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
                className="border w-[50%] rounded-lg pl-2 text-sm"
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
                className="border w-[50%] rounded-lg pl-2 text-sm"
              />
            </div>
          </div>

          <div className="flex gap-x-5 ">
            <div>
              <label htmlFor="" className="text-sm">
                Image:
              </label>
              <img src="" alt="" className="border w-[100px] h-[100px] my-2" />

              <CldImage
                width="960"
                height="600"
                src="https://res.cloudinary.com/dhvo8k1o2/image/upload/v1685542399/j3mddwzxl7l7tj6qqoxn.webp"
                sizes="100vw"
                alt="Description of my image"
              />
              <input type="file" className="text-sm" />
            </div>
          </div>
        </div>
        <div
          id="dialogFooter"
          className="pb-10 px-5 flex justify-center gap-x-5"
        >
          <button
            onClick={() => {
              updateProduct(mockProduct);
              setSelectedProduct({});
              setShowDialog(false);
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
