import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { FaRegTrashAlt } from "react-icons/fa"
import { LuNotebookText } from "react-icons/lu"
import { GiShoppingBag } from "react-icons/gi"
import { MdDeliveryDining } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import emptyCart from '../assets/empty-cart.png'
import { useUser } from "@clerk/clerk-react"
import { toast } from "react-toastify"

export default function Cart({location}) {
  const { cartItem , updateQuantity , deleteItem} = useContext(CartContext)
  const [phone, setPhone] = useState(null||[])
  const navigate = useNavigate()
  const totalPrice = cartItem.reduce((total,item)=>Math.ceil(total+item.price*item.quantity),0) 
  const handling = 5;
  const {user} = useUser()
  // console.log(user)
  const [fullName, setFullName] = useState(user?.fullName) 
  const [promoCode, setPromoCode] = useState("") 
  const [discount,setDiscount] = useState(0)

  const PROMO_CODES ={
    SAVE10:0.1,
    SAVE20:0.2
  }



  const handlePhoneChange = (e)=>{
    const value = e.target.value;
    if(/^\d*$/.test(value)){
      setPhone(value)
    }
  }

  const handlePromoCode = ()=>{
    const code = promoCode.toUpperCase()
    if(PROMO_CODES[code]){
      setDiscount(PROMO_CODES[code]*totalPrice) 
      setPromoCode('')
    }else{
      toast.error("Promo Code is invalid")
    }
  } 


  return <> 
    <div className="max-w-6xl mx-auto mt-10 mb-5 px-4 md:px-0">
      {
        cartItem?.length > 0 ? <div>
          <h1 className="font-bold text-2xl">My Cart ({cartItem.length})</h1>
          <div className="mt-10">
            {
              cartItem.map((item, index) => {
                return <div key={index} className="bg-gray-100 p-5 rounded-md mt-3 w-full flex items-center justify-between">

                  <div className="flex items-center gap-4 justify-between">
                    <img src={item?.image} alt={item?.title} className="w-20 h-20" />
                    <div>
                      <h1 className="md:w-75 line-clamp-2">{item?.title}</h1>
                      <p className="text-red-500 font-semibold text-lg">${item?.price}</p>
                    </div>
                  </div> 

                  <div className="bg-red-500 text-white flex gap-4 p-2 rounded-md font-bold text-xl">
                    <button className="cursor-pointer" onClick={()=>updateQuantity(cartItem,item.id,'-')}>-</button>
                    <span>{item.quantity}</span> 
                    <button className="cursor-pointer" onClick={()=>updateQuantity(cartItem,item.id,'+')}>+</button>
                  </div> 

                  <div className="hover:shadow-2xl hover:bg-white/60 transition-all rounded-full p-3">
                    <span><FaRegTrashAlt onClick={()=>deleteItem(item.id)} className="text-red-500 cursor-pointer text-2xl"/></span> 
                  </div>
                </div>
              })
            }
          </div>


          <div className="grid md:grid-cols-2  md:gap-20 mt-8 ">

            <div className="bg-gray-100 p-7 space-y-2 "> 

              <h1 className="font-bold text-xl text-gray-800">Delivery Info</h1> 

              <div className='flex flex-col space-y-1'>
                  <label htmlFor="fullName">Full Name</label>
                  <input type="text" id="fullName" className='p-2 rounded-md ' defaultValue={fullName} onChange={(e)=>setFullName(e.target.value)}/>  
              </div> 

              <div className='flex flex-col space-y-1'>
                  <label htmlFor="address">Address</label>
                  <input type="text" id="address" className='p-2 rounded-md' value={`${location?.country}-${location?.state}-${location?.town}`} readOnly/> 
              </div> 

              <div className="flex gap-5 w-full">
                <div className="flex flex-col space-y-1 w-full">
                  <label htmlFor="state">State</label>
                  <input type="text" id="state" className="p-2 rounded-md w-full" value={location?.state} readOnly/> 
                </div>

                <div className="flex flex-col space-y-1 w-full">
                  <label htmlFor="postcode">PostCode</label> 
                  <input type="text" id="postcode" className="p-2 rounded-md w-full" value={location?.postcode} readOnly/> 
                </div>
              </div>

              <div className="flex gap-5 w-full">
                <div className="flex flex-col space-y-1 w-full">
                  <label htmlFor="country">Country</label>
                  <input type="text" id="country" className="p-2 rounded-md w-full" value={location?.country} readOnly/>
                </div>

                <div className="flex flex-col space-y-1 w-full"> 
                  <label htmlFor="phone">Phone</label> 
                  <input type="text" id="phone" placeholder="Enter Your Phone" className="p-2 rounded-md w-full" onChange={handlePhoneChange} value={phone}/> 
                </div>
              </div>

              <button className="bg-red-500 disabled:bg-gray-400 disabled:cursor-not-allowed px-2 py-1 text-white rounded-md mt-2 cursor-pointer hover:bg-red-700 transition-all duration-300" disabled={phone.length !== 11}>Submit</button> 

            </div>

            <div className="bg-white border border-gray-100 shadow-xl rounded-md p-7 space-y-2 h-max">
              <h1 className="font-bold text-gray-800 text-xl">Bill details</h1>

              <div className="flex justify-between items-center">
                <p className="flex items-center text-gray-600"><LuNotebookText/> Items total</p>
                <p className="text-gray-600 font-semibold">${totalPrice}</p>
              </div>

              <div className="flex justify-between items-center">
                <p className="flex items-center text-gray-600"><GiShoppingBag/> Handling charge</p>
                <p className="text-red-500 font-bold ">$5</p>
              </div>

              <div className="flex justify-between items-center">
                <p className="flex items-center text-gray-600"><MdDeliveryDining/> Delivery charge</p>
                <p className="text-red-500 font-semibold"><del className="text-gray-600">$25</del> FREE</p>
              </div>

              <p className=" border-gray-100 border"></p>

              <div className="flex justify-between items-center">
                <p className="font-semibold text-xl">Grand total</p>
                <p className="text-xl font-semibold">${totalPrice + handling - discount}</p> 
              </div>

              <div className="flex flex-col space-y-1 w-full mt-8">
                  <label className="font-semibold text-gray-800">Apply Promo Code</label> 
                  <div className="flex items-center justify-between gap-3">
                    <input type="text" placeholder="save+num" className="py-2 rounded-md w-full px-1" value={promoCode} onChange={(e)=>setPromoCode(e.target.value)}/> 
                    <button className="py-2 border-gray-200 border cursor-pointer px-4 rounded-md" onClick={handlePromoCode}>Apply</button>
                  </div>
              </div> 

              <button className='bg-red-500 text-white px-3 py-2 rounded-md w-full cursor-pointer mt-3'>Proceed to Checkout</button> 



            </div>

            
          </div>
          
        </div>
          :
          <div className='flex flex-col gap-3 justify-center items-center h-150'>
          <h1 className='text-red-500/80 font-bold text-5xl text-muted'>Oh no! Your cart is empty</h1>
          <img src={emptyCart} alt="" className='w-100'/>
          <button onClick={()=>navigate('/products')} className='bg-red-500 text-white px-3 py-2 rounded-md cursor-pointer '>Continue Shopping</button>
        </div>
      }
    </div>










  </>
}
