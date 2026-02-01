import { useContext } from "react";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";


export default function ProductCard({product}) { 
    const {addToCart} = useContext(CartContext)  
  
    const {user} = useUser() 
    const isLogin = (product)=>{
      if(user){
        addToCart(product)
      }else{
        toast.error("You need to log in first to add items to your cart")
      }
    }

  return <>
  <div className='relative border border-gray-100 rounded-2xl cursor-pointer hover:scale-105  hover:shadow-2xl transition-all p-2 h-max'>
    
    <Link to={`/products/${product.id}`} className="flex justify-center items-center"><img src={product.image} alt={product.title} className=" w-30 aspect-square"/></Link>
      
    <h1 className="line-clamp-2 p-1 font-semibold">{product.title.length > 10 ? product.title.slice(0,10):product.title}</h1>
    <p className="font-bold my-1 text-lg text-gray-800">${product.price}</p>
    <button onClick={()=>isLogin(product)} className="flex items-center gap-2 bg-red-500 text-white px-2 py-1 rounded-md font-semibold text-lg w-full cursor-pointer"><span><IoCartOutline className="w-6 h-6"/></span> Add to Cart</button>  
  </div>
  
  </> 
}
