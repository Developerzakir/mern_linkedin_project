import React, { useState } from 'react'
import logo from '../assets/logo.png'
import {useNavigate} from 'react-router-dom'

function SignUp() {
  const [showPass, setShowPass] = useState(false)
  const navigate = useNavigate()
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
        className="
        w-[90%] 
        max-w-[400px]
        h-[600px]
        md:shadow-xl
        flex flex-col
        justify-center
        gap-[10px] p-[15px]">

        <h1 className='text-gray-800  text-[30px] font-semibold mb-[30px]'>Sign Up</h1>

        <input type="text" placeholder="firstname" required className='w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md' />

        <input type="text" placeholder="lasttname" required className='w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md' />

        <input type="text" placeholder="username" required className='w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md' />

        <input type="email" placeholder="email" required className='w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md' />

        <div className='w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] rounded-md relative'>
          <input type={showPass ? "text" : "password"} placeholder="password" required className='w-full h-full border-none border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md' />
          <span  onClick={()=>setShowPass(prev=>!prev)}
          className='absolute right-3 top-2 text-blue-500 font-semibold cursor-pointer'>{showPass?"hidden":"Show"}</span>
        </div>

        <button className='w-[100%] h-[50px] rounded-full bg-blue-600 mt-[20px] text-white'>Sign Up</button>
        <p className='text-center'>Already have an account?
           <span onClick={()=>navigate("/login")} className='text-blue-500 cursor-pointer'>Sign In</span>
        </p>

      </form>
    </div>


  )
}

export default SignUp