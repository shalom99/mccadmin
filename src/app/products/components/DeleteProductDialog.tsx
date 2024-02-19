"use client";
import { FC, useState } from "react";
import { MdClose } from "react-icons/md";
import { deleteProduct } from "@/actions/ProductStore";

type DeleteProductDialogProps = {
  product: any;
  setShowDialog: (show: boolean) => void;
  setSelectedProduct: (set: {}) => void;
};

const DeleteProductDialog: FC<DeleteProductDialogProps> = ({
  product,
  setShowDialog,
  setSelectedProduct,
}) => {
  const [mockProduct, setMockProduct] = useState(product);

  return (
    <div className="fixed inset-0  flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="w-[500px] bg-white border flex flex-col rounded-lg ">
        <div id="dialogHeader" className="w-full flex justify-end p-2">
          <button onClick={closeDialog}>
            <MdClose
              size={25}
              className="border rounded-xl p-1 hover:bg-black hover:text-white duration-500"
            />
          </button>
        </div>
        <div id="dialogBody" className="flex flex-col gap-y-2">
          <p className="text-center py-2 text-sm font-bold">
            Are you sure you want to delete the following products?
          </p>
          <p className="text-center text-sm">Product ID #: {product.product_id}</p>
        </div>
        <div
          id="dialogFooter"
          className="pt-3 pb-5 flex justify-center gap-x-5"
        >
          <button
            className="text-sm border border-red-700 text-red-700  hover:bg-red-700 py-1 px-2 rounded-xl hover:text-white hover:scale-110 duration-500"
            onClick={handleDeleteProduct}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );

  function updateProduct() {}

  function closeDialog() {
    setSelectedProduct({});
    setShowDialog(false);
  }

  function handleDeleteProduct(){
    deleteProduct(product.product_id);
    setSelectedProduct({});
    setShowDialog(false);
  }
};

export default DeleteProductDialog;
