import { useNavigate } from "react-router-dom"


export default function Breadcrums({ title }) {
    const navigate = useNavigate()
    return <>
        <div className="max-w-6xl mx-auto my-10">
            <h1 className=""><h1 className='text-xl text-gray-700 font-semibold '><span className='cursor-pointer hover:text-red-500 transition-all duration-300' onClick={() => navigate('/')}>Home</span> / <span className='cursor-pointer hover:text-red-500 transition-all duration-300' onClick={() => navigate('/products')}>Products</span> / <span>{title}</span></h1></h1>

        </div>
    </>

} 
