import ProductsTable from './components/ProductsTable'
import { getProducts } from '@/actions/Store'
import { MdAdd } from "react-icons/md";

export default async function ProductsPage({}) {
    const getProduct = await getProducts()

  return (
     <div  className='py-10 px-10'>
        <div>
        <ProductsTable products={getProduct}/>
        <button className='flex'> 
        Add items hello
       <MdAdd size={25}/></button>
      
        </div>
     </div>
)
}

