'use client'
import ClipLoader from "react-spinners/ClipLoader";
import {CSSProperties } from 'react'
type loadingProps = {
  
}

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

export default function loading() {
  return (
     <div className="fixed inset-0 backdrop-blur-lg z-50 flex items-center justify-center">

<ClipLoader
        loading
        color="#36d7b7"
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
     </div>
)
}
