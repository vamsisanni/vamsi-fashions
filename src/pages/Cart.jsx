import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import "../css/cart.css";

function Cart(){

  const {cart} = useContext(CartContext);
  return (
    <div className="cart-container">
     

     {cart.length !== 0 ?cart.map((product)=>(
      <div className="cart-product" key={product.id}>
        <img src={product.image} />
        <div className="cart-product-info">

        <h3>{product.title}</h3>
        <p>{product.price}</p>
        <p>Quantity:{product.quantity}</p>
        </div>
        
      </div>
     )) : "cart is empty "}
    </div>
  )
}
export default Cart;