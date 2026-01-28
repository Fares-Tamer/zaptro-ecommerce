import { useContext, useEffect } from 'react'
import { DataContext } from '../context/DataContext'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Category from './Category';
import { useNavigate } from 'react-router-dom';


export default function Carousel() {

    const { data, fetchAllProducts } = useContext(DataContext)
    const navigate = useNavigate()
    // console.log(data)
    useEffect(() => {
        fetchAllProducts();
    }, [])

    var settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed:2000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return <>
    <div>
        <Slider {...settings}>
            {
                data?.slice(0,7)?.map((item,index)=>{
                    return <div key={index} className='bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10 h-160'>
                        <div className='flex flex-col sm:flex-row gap-10 justify-center items-center px-4 py-20 sm:py-0  md:h-150'>
                            <div className='md:space-y-6 space-y-3'>
                                <h3 className='text-red-500 font-semibold font-sans text-sm'>Powering Your World with the Best in Electronics</h3>
                                <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold uppercase line-clamp-2 md:line-clamp-3 md:w-125 text-white'>{item.title}</h1> 
                                <p className='md:w-125 line-clamp-3 text-gray-400 pr-7'>{item.description}</p>
                                <button onClick={()=>navigate('/products')} className='bg-linear-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer mt-2'>Shop Now</button>
                            </div>
                            <div>
                                <img src={item.image} alt={item.title} className='rounded-full w-40 sm:w-56 md:w-70 object-contain hover:scale-105 transition-all shadow-2xl'/> 
                            </div>
                        </div>
                    </div>
                })
            }
            
           
        </Slider>
        {/* <Category/>  */}
    </div> 








    </>
}
