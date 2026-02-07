import React, { useContext, useState } from 'react'
import logo from '../assets/logo.png'
import {useNavigate} from 'react-router-dom'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'

function SignUp() {
  const [showPass, setShowPass] = useState(false)
  const navigate = useNavigate()
  let {serverUrl} = useContext(authDataContext)

  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")
  const [userName,setUserName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [loading,setLoading] = useState(false)
  const [err,setError] = useState("")


  const handleSignUp = async (e)=>{
    e.preventDefault()
    setLoading(true)
    try{
      let result = await axios.post(serverUrl + "/api/auth/signup",{
        firstName,
        lastName,
        userName,
        email,
        password
      },{withCredentials:true})
      console.log(result)
      setLoading(false)
      setError("")
      setFirstName("")
      setLastName("")
      setUserName("")
      setEmail("")
      setPassword("")

    }catch(error){
      console.log(error)
      setError(error.response.data.message)
    }
  }

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
        onSubmit={handleSignUp}
        className="
        w-[90%] 
        max-w-[400px]
        h-[600px]
        md:shadow-xl
        flex flex-col
        justify-center
        gap-[10px] p-[15px]">

        <h1 className='text-gray-800  text-[30px] font-semibold mb-[30px]'>Sign Up</h1>

        <input type="text" placeholder="firstname" required className='w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md'
        value={firstName} onChange={(e)=>setFirstName(e.target.value)} />

        <input type="text" placeholder="lasttname" required className='w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md'
         value={lastName} onChange={(e)=>setLastName(e.target.value)} />

        <input type="text" placeholder="username" required className='w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md'
         value={userName} onChange={(e)=>setUserName(e.target.value)} />

        <input type="email" placeholder="email" required className='w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md'
         value={email} onChange={(e)=>setEmail(e.target.value)} />

        <div className='w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] rounded-md relative'>
          <input type={showPass ? "text" : "password"} placeholder="password" required 
          className='w-full h-full border-none border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md'
           value={password} onChange={(e)=>setPassword(e.target.value)} />
          <span  onClick={()=>setShowPass(prev=>!prev)}
          className='absolute right-3 top-2 text-blue-500 font-semibold cursor-pointer'>{showPass?"hidden":"Show"}</span>
        </div>

        {err && <p className='text-center text-red-500'>
          {err}
          </p>}

        <button className='w-[100%] h-[50px] cursor-pointer rounded-full bg-blue-600 mt-[20px] text-white' disabled={loading}>
          {loading? "loading...":"Sign Up"}
          </button>
        <p className='text-center'>Already have an account?
           <span onClick={()=>navigate("/login")} className='text-blue-500 cursor-pointer'>Sign In</span>
        </p>

      </form>
    </div>


  )
}

export default SignUp