
import { FaFacebook, FaInstagram, FaPinterest, FaTwitterSquare } from 'react-icons/fa'

export default function Footer() {
    return <>
        <div className='bg-gray-900 py-10 text-gray-200'>
            <div className='max-w-7xl mx-auto px-4 md:flex md:justify-between'>
                <div>
                    <h1 className='text-red-500 font-bold text-2xl'>Zaptro</h1>
                    <p className='mt-1 mb-2 text-sm'>Powering Your World with the Best in Electronics</p>
                    <p className='text-sm'>123 Electronics St, Style City, NY 10001</p>
                    <p className='text-sm'>Email: support@Zaptro.com</p>
                    <p className='text-sm'>Phone:(123)456-7890</p>
                </div>
                <div className='mt-8 md:mt-0'>
                    <h1 className='text-white font-semibold text-xl'>Customer Service</h1>
                    <ul className='mt-2 text-sm space-y-2'>
                        <li>Contact Us</li>
                        <li>Shipping & Returns</li>
                        <li>FAQs</li>
                        <li>Order Tracking</li>
                        <li>Size Guide</li>
                    </ul>
                </div>
                <div className='mt-8 md:mt-0'>
                    <h1 className='text-white font-semibold text-xl'>Follow Us</h1>
                    <div className='flex space-x-4 items-center'>
                        <FaFacebook />
                        <FaInstagram />
                        <FaTwitterSquare />
                        <FaPinterest />
                    </div>
                </div>
                <div className='mt-8 md:mt-0'>
                    <h1 className='font-semibold text-white text-xl'>Stay in the Loop</h1>
                    <p className='text-sm mt-2'>Subscribe to get special offers, free giveaways, and more</p>
                    <div className='mt-1 md:flex md:justify-between'> 
                        <input type='text' placeholder='Your email address' className='p-2 w-full focus:outline-0 focus:ring-2 focus:ring-gray-500 rounded-l-md placeholder:text-gray-500'/> 
                        <button className='px-4 text-white bg-red-600 hover:bg-red-700 cursor-pointer rounded-r-md '>Subscribe</button> 
                    </div>
                </div>
            </div>
            <div className='border-t border-gray-700 mt-8 pt-6 text-center text-sm'>
                <p>&copy; {new Date().getFullYear()} <span className='text-red-500'>Zaptro</span>. All rights reserved</p>
            </div>
        </div>






    </>
}
