import { useNavigate } from 'react-router-dom'
import banner from '../assets/banner1.jpg'

export default function MidBanner() {
    const navigate = useNavigate()
    return <>
        <div className="bg-gray-100 md:py-18 mt-10 md:mt-0">
            <div className="max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover h-137 md:h-150 relative" style={{
                backgroundImage: `url(${banner})`, backgroundposition: "center", backgroundAttachment: "fixed"
            }}>
                <div className='absolute inset-0 bg-black/60 md:rounded-2xl bg-opacity-50 flex items-center justify-center'>
                    <div className='text-center text-white px-4'>
                        <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4'>Next-Gen Electronics at Your Fingertips</h1>
                        <p className='text-lg md:text-xl mb-6'>Discover the latest tech innovations with unbeatable prices and free shipping on all orders.</p>
                        <button onClick={()=>navigate('/products')} className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 md:py-3 md:px-3 rounded-lg transition duration-300 cursor-pointer'>Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}
