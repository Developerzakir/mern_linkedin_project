import React from 'react'
import logo from '../assets/logo.png'

function SignUp() {
  return (
    <div className="w-full h-screen bg-[white] flex flex-col items-center justify-start gap-[10px]">
      <div className="p-[30px] lg:p-[35px] w-full h-[70px] flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="max-w-[200px] "
        />
      </div>

      <form
        action=""
        className="w-[90%] max-w-[400px] h-[600px] md:shadow-xl flex flex-col justify-center  gap-[10px] p-[15px]"
      >
        <h1 className='text-gray-800  text-[30px] font-semibold mb-[30px]'>Sign Up</h1>
        <input type="text" placeholder="firstname" required className='w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md' />
        <input type="text" placeholder="lasttname" required className='w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md' />
        <input type="text" placeholder="username" required className='w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md' />
        <input type="email" placeholder="email" required className='w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md'  />
       
       <div className='w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px]  rounded-md'>
         <input type="password" placeholder="password" required className='w-full h-full border-none border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md' />
       </div>

        <button className='w-[100%] h-[50px] rounded-full bg-blue-600 mt-[20px] text-white'>Sign Up</button>

      </form>
    </div>

   
  )
}

export default SignUp