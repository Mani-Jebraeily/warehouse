import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Main from '../components/template/main.js'

function Index() {
  const router = useRouter()
  useEffect(() => {
    const token = document.cookie
    if (!token) {
      router.push("/login")
    }
  }, [])

  const deleteTokenHandeler = () => {
    document.cookie = `token=0; Expires=Thu, 01 Jan 1970 00:00:01 GMT `
      router.push("/login")      
  }
  return (
    <>
    <Main deleteTokenHandeler={deleteTokenHandeler} />    
    </>
  )
}

export default Index

export async function getServerSideProps() {
  const api = process.env.NEXT_PUBLIC_API_URL

      // axios.get(`${api}/products?page=1&limit=1000`)
      // .then((res)=>console.log(res))
      console.log(api)
      // console.log("jisadjiadsdijsadsijajdisjidssdji")
      // .then((res) => setProductsCounter([...res.data.data]))
  return {
    props: {}
  }
}