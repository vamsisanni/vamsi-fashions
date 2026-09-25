import ProductCard from "../components/ProductCard";

function Men({products}){
  return(
    <div className="men-shopping">
      <h1>Men shopping</h1>
    <div className="product-container">
        {products.map((product)=>
        <ProductCard key={product.id} product={product}/>)}

      </div>

    </div>
  )
}
export default Men;