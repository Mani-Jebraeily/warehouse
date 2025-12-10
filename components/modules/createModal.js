import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import plusIcon from '../../public/plus.svg'
import axios from 'axios'
import { useRouter } from 'next/router'
import ErrorFill from '../errorFill'
import { getCookie } from 'cookies-next'


function CreateModal({ setShowCreate, setRefresh, refresh }) {

    const api = process.env.NEXT_PUBLIC_API_URL
    const router = useRouter()
      const token = getCookie("token")
    
    const [name, setName] = useState("")
    const [price, setPrice] = useState(1)
    const [quantity, setQuantity] = useState(1)
    const [showError, setShowError] = useState(false)

    useEffect(() => {
        if (!token) {
            router.push("/login")
        }

    }, [])


    const postHandeler = () => {
        if (name && price && quantity) {
            axios.post(
                `${api}/products`,
                { name, price, quantity },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            ).then(() => {
                setName("")
                setPrice(0)
                setQuantity(0)
                setShowCreate(false)
                setRefresh(refresh + 1)
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

                <div className='flex flex-col justify-ce nter items-center  w-[90vw] sm:w-[460px] h-[548px] bg-[#FFFFFF] rounded-4xl'>
                    <div className='flex mt-10 mb-10 gap-3 justify-center items-center '>
                        <Image src={plusIcon} className='size-7 ' alt='icon plus' />
                        <h1 className='font-medium text-xl  text-[#282828]'>
                            Create New Product
                        </h1>

                    </div>
                    <div className='w-[90%]  flex flex-col justify-center items-center'>

                        <label for='name' className='font-medium text-sm text-[#282828] self-start '>Product Name</label><br />
                        <input onChange={(e) => setName(e.target.value)} value={name} placeholder='Product Name:' name='name' className='p-2.5 m-[0_auto] w-[80vw] sm:w-[389px] h-[42px] rounded-lg bg-[#F2F2F2] font-light text-sm text-[#8D8D8D]' /><br />
                        <label for='quantity' className='font-medium text-sm text-[#282828]  self-start'>Quantity</label><br />
                        <input onChange={(e) => setQuantity(e.target.value)} type='number' placeholder='Quantity:' name='quantity' className='p-2.5 m-[0_auto] w-[80vw] sm:w-[389px] h-[42px] rounded-lg bg-[#F2F2F2] font-light text-sm text-[#8D8D8D]' /><br />
                        <label for='price' className='font-medium text-sm text-[#282828] self-start'>Price</label><br />
                        <input onChange={(e) => setPrice(e.target.value)} type='number' placeholder='Price:' name='price' className='p-2.5 m-[0_auto] w-[80vw] sm:w-[389px] h-[42px] rounded-lg bg-[#F2F2F2] font-light text-sm text-[#8D8D8D]' /><br />
                        <div className=' w-[80vw] sm:w-[389px]  flex  flex-col-reverse gap-2  sm:gap-0 sm:flex-row justify-between items-center'>
                            <button onClick={() => setShowCreate(false)} className='font-medium cursor-pointer text-sm text-[#282828CC] w-[80vw] sm:w-[185px] h-[42px] p-2.5 rounded-xl bg-[#DFDFDF]'>Cancel</button>
                            <button onClick={() => postHandeler()} className='font-medium cursor-pointer text-sm text-[#FFFFFF] w-[80vw] sm:w-[185px] h-[42px] p-2.5 rounded-xl bg-[#55A3F0]'>Create</button>
                        </div>
                    </div>


                    


                </div>
            </div>
        </>
    )
}

export default CreateModal