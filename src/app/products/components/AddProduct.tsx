"use client";

import { useState } from "react";
import { MdAdd } from "react-icons/md";
import AddProductDialog from "./AddProductDialog";

function AddProduct() {

    const [showAddDialog, setShowAddDialog] = useState(false)

  return (
    <div className="flex w-full justify-end">

 
    <button onClick={() => setShowAddDialog(true)} className="flex items-center justify-center bg-gray-300 rounded-lg px-2 py-1 font-semibold ">
      Add item
      <MdAdd size={20} />
    </button>

    <AddProductDialog showAddDialog={showAddDialog} setShowAddDialog={setShowAddDialog} />
    </div>
  );

}

export default AddProduct;
