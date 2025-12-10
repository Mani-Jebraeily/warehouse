import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import EditIcon from '../../public/edit-info.svg'
import axios from 'axios'
import { useRouter } from 'next/router'
import ErrorFill from '../errorFill'
import { getCookie } from 'cookies-next'

function EditModal({ setShowEdit, selectedId,setRefresh,refresh }) {
  const api = process.env.NEXT_PUBLIC_API_URL
  const router = useRouter()
  const [name, setName] = useState("")
  const [price, setPrice] = useState(1)
  const [quantity, setQuantity] = useState(1)
  const [showError, setShowError] = useState(false)
  const token = getCookie("token")

  useEffect(() => {
    if (!token) {
      router.push("/login")
    }
    axios.get(`${api}/products/${selectedId}`)
      .then((res) => {
        setName(res.data.name)
        setPrice(res.data.price)
        setQuantity(res.data.quantity)
      })
      .catch((error) => {
        setShowEdit(false)
      })

  }, [])

  const postHandeler = () => {
    if (name && price && quantity) {
      axios.put(
        `${api}/products/${selectedId}`,
        { name, price, quantity },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      ).then((res) => {
        console.log(res)
        // setName("")
        // setPrice(0)
        // setQuantity(0)
        setRefresh(refresh + 1)
        // setShowEdit(false)
      }).catch((error) => console.log(error))
    } else {
      setShowError(true)
      setTimeout(() => {
        setShowError(false)


      }, 10000)
    }
  }
  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
        {showError && <ErrorFill setShowError={setShowError} />}

        <div className='flex flex-col justify-ce nter items-center w-[80vw] sm:w-[460px] h-[548px] bg-[#FFFFFF] rounded-4xl'>
          <div className='flex mt-10 mb-10 gap-3 justify-center items-center '>
            <Image src={EditIcon} className='size-7 ' alt='icon plus' />
            <h1 className='font-medium text-xl  text-[#282828]'>
              Edit Information
            </h1>

          </div>
          <div className=' w-[90%] flex flex-col items-center'>
            <label for='name' className='font-medium text-sm text-[#282828] self-start'>Product Name</label><br />
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Product Name:' name='name' className='p-2.5 m-[0_auto] w-full sm:w-[389px] h-[42px] rounded-lg bg-[#F2F2F2] font-light text-sm text-[#8D8D8D]' /><br />
            <label for='quantity' className='font-medium text-sm text-[#282828] self-start '>Quantity</label><br />
            <input value={quantity} onChange={(e) => setQuantity(e.target.value)} type='number' placeholder='Quantity:' name='quantity' className='p-2.5 w-full sm:w-[389px] h-[42px] rounded-lg bg-[#F2F2F2] font-light text-sm text-[#8D8D8D]' /><br />
            <label for='price' className='font-medium text-sm text-[#282828] self-start '>Price</label><br />
            <input value={price} onChange={(e) => setPrice(e.target.value)} type='number' placeholder='Price:' name='price' className='p-2.5 w-full sm:w-[389px] h-[42px] rounded-lg bg-[#F2F2F2] font-light text-sm text-[#8D8D8D]' /><br />
            <div className='  flex gap-2  flex-col-reverse sm:flex-row w-full justify-around items-center'>
              <button onClick={() => setShowEdit(false)} className='font-medium cursor-pointer text-sm text-[#282828CC] w-full sm:w-[185px] h-[42px] p-2.5 rounded-xl bg-[#DFDFDF]'>Cancel</button>
              <button onClick={() => postHandeler()} className='font-medium cursor-pointer text-sm text-[#FFFFFF] w-full sm:w-[185px] h-[42px] p-2.5 rounded-xl bg-[#55A3F0]'>Create</button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default EditModal