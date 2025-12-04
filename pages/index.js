import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Main from './components/main'



function Index() {

  const [success, setSuccess] = useState(false)

  const router = useRouter()

  useEffect(() => {
    const token = document.cookie
    if (!token) {
      router.push("/login")
    }
  }, [success])
  return (
    <Main/>
  )
}

export default Index