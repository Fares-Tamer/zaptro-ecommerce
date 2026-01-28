import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return <>
    <div className='bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-20'> 
      <div className='max-w-5xl mx-auto rounded-2xl bg-white shadow-lg p-8 space-y-8'>
        <h1 className='text-center font-bold text-4xl'>About Zaptro</h1>  
        <p className='text-lg text-gray-700'>
          Welcome to <span className="font-semibold text-red-600">Zaptro</span>, your one-stop destination for the latest and greatest in electronics. From cutting-edge gadgets to must-have accessories, we’re here to power up your tech life with premium products and unbeatable service.
        </p>


        <h2 className='text-red-600 font-semibold text-2xl'>Our Mission</h2>
        <p className='text-gray-700'>At Zaptro, our mission is to make innovative technology accessible to everyone. We’re passionate about connecting people with the tools and tech they need to thrive in a digital world — all at competitive prices and delivered with speed and care.</p>

        <div className='space-y-6'>
          <h2 className='text-red-600 font-semibold text-2xl'>Why Choose Zaptro?</h2>
          <ul className='text-gray-700 space-y-2 list-disc pl-6'>
            <li>Top-quality electronic products from trusted brands</li>
            <li>Lightning-fast and secure shipping</li>
            <li>Reliable customer support, always ready to help</li>
            <li>Easy returns and hassle-free shopping experience</li>
          </ul>
        </div>

        <div className='space-y-6'>
          <h1 className='text-red-600 font-semibold text-2xl'>Our Vision</h1> 
          <p className='text-gray-700'>We envision a future where technology elevates everyday life. At Zaptro, we’re committed to staying ahead of the curve, offering cutting-edge solutions that are both practical and affordable.</p>
        </div>

        <div className='text-center mt-10'>
          <h1 className=' text-red-700 font-semibold text-xl mb-2'>join the Zaptro Family</h1> 
          <p className='text-gray-700 mb-4'>Whether you’re a tech enthusiast, a professional, or just looking for something cool and functional — Zaptro has something for everyone.</p> 
          <Link to={'/products'}><button className='rounded-xl bg-red-600 px-6 py-2 text-white hover:bg-red-700 transition-all cursor-pointer duration-300'>Start Shipping</button></Link>
        </div>
      </div>
    </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  </>
}
