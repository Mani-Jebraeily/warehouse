import React, { useEffect } from 'react'
import Icon from '../../public/Close.svg'
import Image from 'next/image'
import axios from 'axios'
import { useRouter } from 'next/router'
import { getCookie } from 'cookies-next'
import { MainContext } from '../template/main'
import { useContext } from 'react'



// function DeleteModal({ setShowDelete, refresh, setRefresh, selectedId }) {
function DeleteModal() {
    const { setShowDelete, refresh, setRefresh, selectedId }=useContext(MainContext)

  // const [, token] = document.cookie.split("=")
  const api = process.env.NEXT_PUBLIC_API_URL
  const token = getCookie("token")

  const id = selectedId
  const router = useRouter()


  useEffect(() => {
    if (!token) {
      router.push("/login")
    }
  }, [])

  const deleteHandeler = () => {

    axios.delete(
      `${api}/products/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(() => {
        setRefresh(refresh + 1)
        setShowDelete(false)

      })
      .catch((error) => {
        console.log(error)
        router.push("/login")
      })

  }
  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
        <div className='flex flex-col justify-center items-center gap-10 w-[80vw] sm:w-[472px] h-[338px] rounded-4xl bg-[#FFFFFF]'>
          <Image src={Icon} alt='Icon delete' />
          <h2 className='font-normal text-[20px] text-[#282828] '>Delete This product?</h2>
          <div className=' flex gap-2 sm:gap-8 flex-col-reverse sm:flex-row'>
            <button onClick={() => setShowDelete(false)} className='w-40 h-10 bg-[#DFDFDF] p-2.5 rounded-xl font-semibold text-lg text-[#282828CC] cursor-pointer flex justify-center items-center'>Cancel</button>
            <button onClick={deleteHandeler} className='w-40 h-10 bg-[#F43F5E] p-2.5 rounded-xl font-semibold text-lg  text-[#FFFFFF] cursor-pointer flex justify-center items-center'>Delete</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeleteModal




