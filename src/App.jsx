import { useContext, useEffect } from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import axios from 'axios'
import { useState } from 'react'
import Footer from './components/Footer'
import SingleProduct from './pages/SingleProduct'
import CategoryProduct from './pages/CategoryProduct'
import { CartContext } from './context/CartContext'
import ProtectedCart from './components/ProtectedCart'

export default function App() {

  const [location, setLocation] = useState() 
  const [openDropDown, setOpenDropDown] = useState(false) 
  const {cartItem,setCartItem} = useContext(CartContext) 


  const getLocation = async ()=>{
    navigator.geolocation.getCurrentPosition(async pos => {
      const {latitude,longitude} = pos.coords
      // console.log(latitude,longitude)  
      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json` 
      try {
        const location = await axios.get(url) 
        // console.log(location) 
        const exactLocation = location.data.address 
        setLocation(exactLocation); 
        // console.log(exactLocation) 
      } catch (error) {
        console.log(error) 
      }
    })
  }


  useEffect(()=>{
    getLocation();
  },[]) 

  // Load cart from Local Storage
  useEffect(()=>{
    const storedCart = localStorage.getItem('cartItem') 
    if(storedCart){
      setCartItem(JSON.parse(storedCart)) 
    }
  },[])
  // save cart to local Storage
  useEffect(()=>{
    localStorage.setItem('cartItem',JSON.stringify(cartItem))
  },[cartItem])


  return <BrowserRouter>
    <Navbar location={location} setLocation={setLocation} openDropDown={openDropDown} setOpenDropDown={setOpenDropDown}/>   
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/products/:id' element={<SingleProduct/>}></Route>
      <Route path='/category/:category' element={<CategoryProduct/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/cart' element={<ProtectedCart><Cart location={location}/></ProtectedCart>}></Route>
        
    </Routes>
    <Footer/> 
  </BrowserRouter>
}
