import {  useState } from "react";
import '../css/Home.css';
import ProductCard from "../components/ProductCard";
function Home({products}){

  return(
    <>
      <div className="product-container">
        {products.map((product)=>
        <ProductCard key={product.id} product={product}/>)}

      </div>
      </>
  
  )
}

export default Home;