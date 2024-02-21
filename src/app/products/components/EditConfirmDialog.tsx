"use client";
import { addProduct as createProduct} from "@/actions/ProductStore";
import { FC, useState } from "react";
import { MdClose } from "react-icons/md";

type AddProductDialogProps = {
  showAddDialog: boolean;
  setShowAddDialog: (showAddDialog: boolean) => void;
};

const default_product = {
  name: "",
  description: "",
  price: "",
  stock: 0,
  image: "",
}

const EditConfirmDialog: FC<AddProductDialogProps> = ({
  showAddDialog,
  setShowAddDialog,
}) => {
  const [productDetails, setProductDetails] = useState(default_product);


  if (!showAddDialog) {
    return null;
  }


  return (
    <div className="fixed inset-0  flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="w-[500px] bg-white border flex flex-col rounded-lg">
        <div
          id="dialogHeader"
          className="w-full flex justify-between border-b p-2"
        >
          <p className="font-bold">Add Product</p>
          <button onClick={closeDialog}>
            <MdClose size={25} />
          </button>
        </div>
        <div id="dialogBody" className="flex flex-col py-5 px-5 gap-y-5 text-sm">
          <div className="flex gap-x-5">
            <label htmlFor="">Name:</label>
            <input
              type="text"
              value={productDetails.name}
              className="border pl-2 rounded-lg"
              onChange={(e) => {
                setProductDetails({ ...productDetails, name: e.target.value });
              }}
            />
          </div>
          <div className="flex gap-x-5">
            <label htmlFor="">Description:</label>
            <input
              type="text"
              value={productDetails.description}
              className="border pl-2 rounded-lg"
              onChange={(e) => {
                setProductDetails({
                  ...productDetails,
                  description: e.target.value,
                });
              }}
            />
          </div>
          <div className="flex gap-x-5">
            <div className="w-[50%] flex items-center gap-x-5">
              <label htmlFor="">Price:</label>
              <input
                type="number"
                value={productDetails.price}
                className="border w-[50%] pl-2 rounded-lg"
                onChange={(e) => {
                  setProductDetails({
                    ...productDetails,
                    price: e.target.value,
                  });
                }}
              />
            </div>
            <div className="w-[50%] flex items-center gap-x-5">
              <label htmlFor="">Stock:</label>
              <input
                type="number"
                value={productDetails.stock}
                className="border w-[50%] pl-2 rounded-lg"
                onChange={(e) => {
                  setProductDetails({
                    ...productDetails,
                    stock: parseInt(e.target.value),
                  });
                }}
              />
            </div>
          </div>

          <div className="flex gap-x-5">
            <div>
              <label htmlFor="">Image:</label>

              <input type="file" className="ml-2" />
            </div>
          </div>
        </div>
        <div
          id="dialogFooter"
          className="pb-5 px-5 flex justify-center gap-x-5"
        >
          <button
            onClick={() => {
              createProduct(productDetails)
              setShowAddDialog(false)
              setProductDetails(default_product)
            }}
            className="border-2 border-green-700 py-1 px-2 rounded-xl text-green-700 text-sm hover:text-white hover:bg-green-700 hover:scale-110 duration-500"
          >
            Add Product
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


  function handleAddProduct(){
      // createProduct(productDetails)
      // setShowAddDialog(false)
      // console.log("success")
  }

  function closeDialog() {
    setShowAddDialog(false);
  }
};

export default EditConfirmDialog;
