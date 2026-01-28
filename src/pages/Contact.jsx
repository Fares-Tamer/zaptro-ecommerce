
export default function Contact() {
  return <>
    <div className='bg-gray-100 min-h-screen py-10 px-4 bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center'>
      <div className='backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl w-full p-10 max-w-5xl'>
        <h1 className='text-center text-white font-bold text-4xl mb-10'>Get in Touch with <span className='text-red-400'>Zaptro</span></h1>
        <div className='grid md:grid-cols-2 gap-8'>
          {/* Info Section */}
          <div className='text-white space-y-7'>
            <div>
              <h3 className='font-semibold text-2xl'>Contact Info</h3>
              <p className='text-gray-300'>Have a question or need support? We're here to help you with your electronics journey.</p>
            </div>
            <div>
              <p><strong>📍 Address:</strong> 123 Tech Lane, Kolkata, India</p>
              <p><strong>📧 Email:</strong> support@zaptro.com</p>
              <p><strong>📞 Phone:</strong> +91 98765 43210</p>
            </div>
          </div>
          {/* form section */}
          <div className="space-y-5">
            <div className="flex flex-col gap-1">
              <label className="text-white">Your Name</label>
              <input type="text" placeholder="Enter Your Name" className="rounded-xl px-4 py-2 focus:outline-0 focus:ring-2 focus:ring-blue-500 bg-white/20"/> 
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-white">Email Address</label>
              <input type="email" placeholder="Enter Your Email" className="rounded-xl px-4 py-2 focus:outline-0 focus:ring-2 focus:ring-blue-500 bg-white/20"/> 
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-white">Your Message</label>
              <textarea type="text" rows={3} placeholder="Type your message..." className="rounded-xl px-4 py-2 focus:outline-0 focus:ring-2 focus:ring-blue-500 bg-white/20 placeholder:text-gray-200"/> 
            </div>

            <button className="text-center w-full text-white bg-linear-to-r from-red-500 to-purple-500 rounded-xl py-2 font-semibold">Send Message 🚀</button> 
          </div>

          <p></p>
        </div>
      </div>
    </div>







  </>
}
