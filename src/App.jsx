import { useState,useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Men from './pages/Men'
import Women from './pages/women'
import NavBar from './components/NavBar'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(0);
  const [products,setProducts] = useState([]);

 const [loading,setLoading] = useState(false);
  const [error,setError] = useState('');

  useEffect(()=>  {
   async function fetchProducts(){
    try{
       setLoading(true);
   const response = await fetch(' https://fakestoreapi.com/products');
   const data = await response.json();
   setProducts(data);
      
    } catch(err){
      setError(err.message);
    }finally{
        setLoading(false);
    }
   }

   fetchProducts();
  },[]);

  return (
    <>
     <h1>Vamsi fashions</h1>
     <NavBar />
     <Routes>
      <Route path='/' element={<Home products={products}/>}/>
      <Route path='/men' element={<Men products={products}/>} />
      <Route path='/women' element={<Women products={products} />}/>
      <Route path='/cart' element={<Cart />} />
      <Route  path='/orders' element={<Orders />}/>
      <Route path='/product/:id' element={<Product  products={products}/>} />
     </Routes>
    </>
  )
}

export default App
