import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export async function convertPricesToString(productsArray: any) {
  for (let i = 0; i < productsArray.length; i++) {
    productsArray[i].price = productsArray[i].price.toFixed(2);
  }
  return productsArray;
 }

