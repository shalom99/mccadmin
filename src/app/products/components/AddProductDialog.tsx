"use client";
import { FC, useState } from "react";
import { MdClose } from "react-icons/md";

type AddProductDialogProps = {
  product: any;
  setShowDialog: (show: boolean) => void;
  setSelectedProduct: (set: {}) => void;
};

const AddProductDialog: FC<AddProductDialogProps> = ({
  product,
  setShowDialog,
  setSelectedProduct,
}) => {

    const [newProduct, setNewProduct] = useState({}) 

  return (
    <div className="fixed inset-0  flex items-center justify-center z-50 ">
      <div className="w-[500px] bg-white border flex flex-col">
        <div
          id="dialogHeader"
          className="w-full flex justify-between border-b p-2"
        >
          <p>Item #</p>
          <button onClick={closeDialog}>
            <MdClose size={25} />
          </button>
        </div>
        <div id="dialogBody" className="flex flex-col py-5 px-5 gap-y-5">
          <div className="flex gap-x-5">
            <label htmlFor="">Name:</label>
            <input
              type="text"
             
              className="border"
      
            />
          </div>
          <div className="flex gap-x-5">
            <label htmlFor="">Description:</label>
            <input type="text" 
            className="border" 
          
            />
          </div>
          <div className="flex gap-x-5">
            <div className="w-[50%] flex items-center gap-x-5">
              <label htmlFor="">Price:</label>
              <input
                type="number"
               
              
                className="border w-[50%]"
              />
            </div>
            <div className="w-[50%] flex items-center gap-x-5">
              <label htmlFor="">Stock:</label>
              <input
                type="number"
             
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

export default AddProductDialog