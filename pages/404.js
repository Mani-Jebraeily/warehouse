import { redirect } from 'next/dist/server/api-utils'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'


function NotFound() {
    const router = useRouter()
  
  useEffect(()=>{
      router.push("/login")
  },[])
  return (
    <div className=' w-screen h-screen flex justify-center items-center text-3xl'>NotFound Page</div>
  )
}

export default NotFound
