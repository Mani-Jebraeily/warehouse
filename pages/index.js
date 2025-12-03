import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react'



function Index() {
  // const token = document.cookie

  const [success, setSuccess] = useState(false)

  const router = useRouter()

  useEffect(() => {
    const token = document.cookie
    if (!token) {
      router.push("/login")
    }
  }, [success])
  return (
    <div>Index</div>
  )
}

export default Index