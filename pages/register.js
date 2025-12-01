import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import icon from '../public/icon4.svg'
import Head from 'next/head'
import axios from 'axios'
import { useRouter } from 'next/router'
function Register() {
  const router = useRouter()
  const [username, SetUsername] = useState("")
  const [password, SetPassword] = useState("")
  const [password2, SetPassword2] = useState("")
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    const token = document.cookie
    if (token) {
      router.push("/")
    }
    console.log(token)
  }, [success])

  const postHandeler = () => {
    if (3 <= username.length && 6 <= password.length && password === password2) {
      axios.post("http://localhost:3000/auth/register", { username, password })
        .then((res) => {
          console.log(res)
          if (res.status === 201) {
            axios.post("http://localhost:3000/auth/login", { username, password })
              .then((res) => {
                if (res.data.token) {
                  console.log(res.data.token)
                  document.cookie = `token=${res.data.token}; max-age=600; `
                  setSuccess(true)
                }
              }
              )
          }
        })
    }
  }
  return (
    <>
      <Head>
        <title> WAREHOUSE | REGISTER</title>
        <meta name="description" content="warehouse website" />
      </Head>
      <div className='flex flex-col gap-10 justify-center items-center w-screen h-screen bg-[#F7F8F8]'>
        <div className='flex flex-col justify-center items-center w-[460px]  *:w-[400px] h-fit p-[60px_0px] [596px]  bg-[#FFFFFF] border border-[#E4E4E4] rounded-2xl'>
          <div className='flex gap-3 justify-start mb-5 w-[400px]'>
            <Image src={icon} className='size-10' alt='icon' />
            <h1 className='text-3xl text-[#282828] font-bold'>Register</h1>
          </div>
          <input onChange={(e) => SetUsername(e.target.value)} className='h-[53px] rounded-2xl bg-[#F2F2F2] m-2.5 p-[22px_15px] text-sm text-[#28282880]' placeholder='User Name:' />
          <input onChange={(e) => SetPassword(e.target.value)} className='h-[53px] rounded-2xl bg-[#F2F2F2] m-2.5 p-[22px_15px] text-sm text-[#28282880]' placeholder='Password:' />
          <input onChange={(e) => SetPassword2(e.target.value)} className='h-[53px] rounded-2xl bg-[#F2F2F2] m-2.5 p-[22px_15px] text-sm text-[#28282880]' placeholder='Reapid Password' />
          <button onClick={() => postHandeler()} className='text-center w-[400px] h-[53px] rounded-2xl  m-2.5 p-2.5 bg-[#55A3F0] font-semibold text-xl text-[#FFFFFF] cursor-pointer'>Sign Up</button>
          <span className=' font-normal text-[1rem] mt-6  text-center  text-[#3A8BED]'>
            <Link href="/login">
              Are You Have an account?
            </Link>
          </span>
        </div>
      </div>
    </>
  )
}

export default Register