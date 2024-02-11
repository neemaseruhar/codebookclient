import { useEffect, useState } from 'react';
import {ProductCard} from '../../../components/Elements/ProductCard'

export const FeaturedProducts = () => {

  const [products,setproduct] = useState([]);

  useEffect(()=> {
      async function displayProducts(){
        const response= await fetch (" http://localhost:5000/products/featured_products");
        const data= await response.json();
        setproduct(data)
      }
      displayProducts()
  },[])

  return (
    <section className="my-20">
        <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>    
        <div className="flex flex-wrap justify-center lg:flex-row">
          {products.map((product)=>(
             <ProductCard key={product.product_id} product={product}/>
          ))}
           
            
         
        </div>
    </section>
  )
}
