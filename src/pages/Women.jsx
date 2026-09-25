import ProductCard from "../components/ProductCard";

function Women({products}){
  console.log('reaching');
  console.log(products);
  return (
    <div className="women-shopping">
      <h1>women shoppig</h1>
      <div className="product-container">
        {products.map((product)=>
       
        <ProductCard key={product.id} product={product}/>)}
      </div>
    </div>
  )
}
export default Women;