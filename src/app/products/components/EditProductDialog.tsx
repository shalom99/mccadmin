"use client";
import { FC, useState } from "react";
import { MdClose } from "react-icons/md";

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

    const [mockProduct, setMockProduct] = useState(product) 

  return (
    <div className="fixed inset-0  flex items-center justify-center z-50 ">
      <div className="w-[500px] bg-white border flex flex-col rounded-lg">
        <div
          id="dialogHeader"
          className="w-full flex justify-end p-2"
        >
   
          <button onClick={closeDialog} >
            <MdClose size={25} className="border rounded-xl p-1 hover:bg-black hover:text-white duration-500" />
          </button>
        </div>
        <div id="dialogBody" className="flex flex-col py-5 px-5 gap-y-5">
        <div className="flex gap-x-5">
            <label htmlFor="">Item ID #:</label>
    <p>{product.product_id}</p>
          </div>
          <div className="flex gap-x-5">
            <label htmlFor="">Name:</label>
            <input
              type="text"
              value={mockProduct.product_name}
              className="border"
              onChange={(e) => setMockProduct({...mockProduct, product_name: e.target.value})}
            />
          </div>
          <div className="flex gap-x-5">
            <label htmlFor="">Description:</label>
            <input type="text" value={mockProduct.description} className="border" 
            onChange={(e) => setMockProduct({...mockProduct, description: e.target.value})}
            />
          </div>
          <div className="flex gap-x-5">
            <div className="w-[50%] flex items-center gap-x-5">
              <label htmlFor="">Price:</label>
              <input
                type="number"
                value={mockProduct.price}
                onChange={(e) => setMockProduct({...mockProduct, price: e.target.value})}
                className="border w-[50%]"
              />
            </div>
            <div className="w-[50%] flex items-center gap-x-5">
              <label htmlFor="">Stock:</label>
              <input
                type="number"
                value={mockProduct.quantity_in_stock}
                onChange={(e) => setMockProduct({...mockProduct, quantity_in_stock: e.target.value})}
                className="border w-[50%]"
              />
            </div>
          </div>

          <div className="flex gap-x-5">
            <div>
         
              <label htmlFor="">Image:</label>
              <img src="" alt="" className="border w-[100px] h-[100px]" />
              <input type="file" />
            </div>
          </div>
        </div>
        <div
          id="dialogFooter"
          className="pb-10 px-5 flex justify-center gap-x-5"
        >
          <button className="bg-green-700 py-2 px-5 rounded-xl text-white">
            Save
          </button>
          <button
            className="bg-red-700 py-2 px-5 rounded-xl text-white"
            onClick={closeDialog}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  function updateProduct(){

  }

  function closeDialog() {
    setSelectedProduct({});
    setShowDialog(false);
  }
};

export default EditProductDialog;
