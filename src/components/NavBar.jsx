import{Link} from 'react-router-dom';
import '../css/NavBar.css';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

function NavBar(){
  const {cart} = useContext(CartContext);
  return(
    <div className="navbar">
      <div className="fashion-brand">
      <Link to='/'>vamsi fashions</Link>
      </div>
      <div className='nav-links'>
        <Link to='/men' className='nav-link'>
        Men
        </Link>
        <Link to='/women' className='nav-link'>
        Women
        </Link>
        <Link className='nav-link' to='/cart'>Cart:{cart.length}</Link>
        <Link className='nav-link' to='orders'>Orders</Link>
      </div>
    </div>
  )
}
export default NavBar;