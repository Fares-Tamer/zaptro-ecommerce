import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from "../assets/src_assets_Loading4.webm"
import Breadcrums from '../components/Breadcrums'

import { IoCartOutline } from 'react-icons/io5'
import { CartContext } from '../context/CartContext'
import { toast } from 'react-toastify'
import { useUser } from '@clerk/clerk-react'

export default function SingleProduct() {
    let { id } = useParams()
    const {user} = useUser() 
    const [productData, setProductData] = useState()
    const { addToCart } = useContext(CartContext)

    const fetchSingleProduct = async () => {
        try {
            let res = await axios.get(`https://fakestoreapi.com/products/${id}`)
            // console.log(res) 
            setProductData(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const isLogin = (product) => {
        if (user) {
            addToCart(product)
        } else {
            toast.error("You need to log in first to add items to your cart")
        }
    }

    useEffect(() => {
        fetchSingleProduct();
        window.scroll(0, 0)
    }, [])
    return <>
        {
            productData ? <div className='px-4 pb-4 md:px-0'>
                <Breadcrums title={productData.title} />
                <div className='max-w-6xl mx-auto md:p-6 grid md:grid-cols-2 gap-10'>
                    {/* Product Image */}
                    <div className='w-full'>
                        <img src={productData.image} alt={productData.title} className=' object-cover' />
                    </div>
                    {/* Product Details */}
                    <div>
                        <h1 className='font-bold md:text-3xl text-xl'>{productData.title}</h1>
                        <p className='text-gray-500 pt-2'>{productData.category}</p>
                        <p className='font-bold text-xl'>Price: <span className='text-red-500 font-semibold text-lg'>${productData.price}</span></p>
                        <p className='text-gray-500 py-5'>{productData.description}</p>
                        <label className='font-semibold'>Quantity: </label>
                        <input type='number' className='w-15 placeholder:text-black pl-2' min={1} placeholder='1' value={1} readOnly />
                        <p className='font-semibold text-lg pt-4'>Rate: <span className='text-green-500'>{productData.rating.rate}</span></p>
                        <p className='font-semibold text-lg pb-4'>Count: <span className='text-blue-500'>{productData.rating.count}</span></p>
                        <div className='flex gap-4 mt-4'>
                            <button onClick={() => isLogin(productData)} className='px-6 flex gap-2 py-2 text-lg bg-red-500 text-white rounded-md cursor-pointer'><IoCartOutline className='w-6 h-6' /> Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
                :
                <div className='flex justify-center items-center h-screen'>
                    <video muted loop autoPlay>
                        <source src={Loading} type='video/webm' />
                    </video>
                </div>

        }





    </>
}
