import React from 'react'
import Icon from '../../../public/Close.svg'
import Image from 'next/image'
import axios from 'axios'

function DeleteModal({setShowDelete,refresh,setRefresh,selectedId}) {
    const [, token] = document.cookie.split("=")
    const id=selectedId

  const deleteHandeler=()=>{
    
       axios.delete(
                `http://localhost:3000/products/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }}).then(()=>{
                      setRefresh(refresh + 1)
                      setShowDelete(false)
                      
                    })
                    .catch((error)=>console.log(error))
                    
  }
  return (
    <>
     <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
     <div className='flex flex-col justify-center items-center gap-10 w-[472px] h-[338px] rounded-4xl bg-[#FFFFFF]'>
      <Image src={Icon} alt='Icon delete'/>
      <h2 className='font-normal text-[20px] text-[#282828] '>Delete This product?</h2>
      <div className='flex gap-8'>
        <button onClick={()=>setShowDelete(false)} className='w-40 h-10 bg-[#DFDFDF] p-2.5 rounded-xl font-semibold text-lg text-[#282828CC] cursor-pointer flex justify-center items-center'>Cancel</button>
        <button onClick={deleteHandeler} className='w-40 h-10 bg-[#F43F5E] p-2.5 rounded-xl font-semibold text-lg  text-[#FFFFFF] cursor-pointer flex justify-center items-center'>Delete</button>
      </div>


     </div>
  
    </div>
    </>
  )
}

export default DeleteModal




