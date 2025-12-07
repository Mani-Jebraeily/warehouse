import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import icon from '../public/icon4.svg'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ErrorLogin from './components/errorLogin'

function Login() {
  const router = useRouter()
  const [username, SetUsername] = useState("")
  const [password, SetPassword] = useState("")
  const [success, setSuccess] = useState(false)
  const [errorLogin, setErrorLogin] = useState(false)
  useEffect(() => {
    const token = document.cookie
    if (token) {
      router.push("/")
    }
  }, [success])

  const postHandeler = () => {
    axios.post("http://localhost:3000/auth/login", { username, password })
      .then((res) => {
        if (res.data.token) {
          console.log(res.data.token)
          document.cookie = `token=${res.data.token}; max-age=600; `
          setSuccess(true)
        }
      }).catch((error) => {
        setErrorLogin(true)
        setTimeout(() => {
          setErrorLogin(false)
        }, 10000)

      })
  }


  return (
    <>
      <Head>
        <title> WAREHOUSE | LOGIN</title>
        <meta name="description" content="warehouse website" />
      </Head>


      {errorLogin&&<ErrorLogin setErrorLogin={setErrorLogin}/>}
      <div className='flex flex-col gap-10 justify-center items-center w-screen h-screen bg-[#F7F8F8] '>
        <div className='flex flex-col justify-center items-center w-[90vw] sm:w-[460px]  *:h-[53px]  *:sm:w-[400px]  *:w-[80vw] h-fit p-[60px_0px]   bg-[#FFFFFF] border border-[#E4E4E4] rounded-2xl'>
          <div className='flex gap-3 justify-start mb-5 w-[400px]'>
            <Image src={icon} className='size-10' />
            <h1 className='text-3xl text-[#282828] font-bold'>Login</h1>
          </div>
          <input value={username} onChange={(e) => SetUsername(e.target.value)} className=' rounded-2xl bg-[#F2F2F2] m-2.5 p-[22px_15px] text-sm text-[#28282880]' placeholder='User Name:' />
          <input value={password} type='password' onChange={(e) => SetPassword(e.target.value)} className='h-[53px] rounded-2xl bg-[#F2F2F2] m-2.5 p-[22px_15px] text-sm text-[#28282880]' placeholder='Password:' />
          <button onClick={() => postHandeler()} className='flex justify-center items-center text-center w-[400px] h-[53px] rounded-2xl   m-2.5 p-2.5 bg-[#55A3F0] font-semibold text-[16px]  sm:text-xl text-[#FFFFFF] cursor-pointer'>Login</button>
          <span className=' font-normal text-[1rem] mt-6  text-center  text-[#3A8BED]'>
            <Link href="/register">
              You dont Have an account?
            </Link>
          </span>
        </div>
      </div>
    </>
  )
}

export default Login