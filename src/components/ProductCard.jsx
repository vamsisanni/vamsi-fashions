import { useContext } from 'react';
import '../css/productCard.css';
import { CartContext } from '../context/CartContext';

function ProductCard({product}){


const {addToCart} = useContext(CartContext);
  
  return(
  
     <div className='product-card'>
       <div className="product-image">
        <img src={product.image} />
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>
      </div>
      <div className='cart-order-btn'>
        <button onClick={()=>addToCart(product)} className='cart-btn'>Add to cart</button>
        <button className='buy-btn'>Buy the product</button>
      </div>
     </div>
    
  )
}
export default ProductCard;