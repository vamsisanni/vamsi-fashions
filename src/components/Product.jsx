import { useParams } from "react-router-dom";
import '../css/product.css';
function Product({products}){
  const{id} = useParams();
  console.log(id);
  console.log(products);
  const product = products.find((product)=> product.id ===Number(id));
  if(!product){
    return<h2>Product not found</h2>
  }
  return (
    
    <div className="container">
      <div className="product-image">
        <img src={product.image} />

      </div>
      <div className="info">
        <h6>{product.title}</h6>
        <p>{product.price}</p>
      </div>

      
  
    </div>
     

    
  )
}

export default Product;