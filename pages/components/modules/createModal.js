import React from 'react'
import Image from 'next/image'
import plusIcon from '../../../public/plus.svg'

function CreateModal() {
    return (
        <>
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
                {/* <div className="bg-white w-[320px] rounded-xl p-6 text-center">
        
        <div className="text-red-500 text-4xl mb-4">✕</div>

        <p className="mb-6">آیا از حذف این محصول مطمئنید؟</p>

        <div className="flex gap-3 justify-center">
          <button
            // onClick={onClose}
            className="px-4 py-2 rounded bg-gray-200"
          >
            لغو
          </button>

          <button
            onClick={() => {
              // delete logic
            //   onClose();
            }}
            className="px-4 py-2 rounded bg-red-500 text-white"
          >
            حذف
          </button>
        </div>

      </div> */}

                <div className='flex flex-col justify-ce nter items-center w-[460px] h-[548px] bg-[#FFFFFF] rounded-4xl'>
                    <div className='flex mt-10 mb-10 gap-3 justify-center items-center '>
                        <Image src={plusIcon} className='size-7 '/>
                        <h1 className='font-medium text-xl  text-[#282828]'>
                            Create New Product
                        </h1>

                    </div>

                    <form className='bg-red -400 flex flex-col'>

                        <label for='name' className='font-medium text-sm text-[#282828] '>Product Name</label><br />
                        <input placeholder='Product Name:' name='name' className='p-2.5 w-[389px] h-[42px] rounded-lg bg-[#F2F2F2] font-light text-sm text-[#8D8D8D]' /><br />
                        <label for='quantity' className='font-medium text-sm text-[#282828] '>Quantity</label><br />
                        <input type='number' placeholder='Quantity:' name='quantity' className='p-2.5 w-[389px] h-[42px] rounded-lg bg-[#F2F2F2] font-light text-sm text-[#8D8D8D]' /><br />
                        <label for='price' className='font-medium text-sm text-[#282828] '>Price</label><br />
                        <input type='number' placeholder='Price:' name='price' className='p-2.5 w-[389px] h-[42px] rounded-lg bg-[#F2F2F2] font-light text-sm text-[#8D8D8D]' /><br />
                        <div className='flex justify-between'>
                            <button className='font-medium cursor-pointer text-sm text-[#282828CC] w-[185px] h-[42px] p-2.5 rounded-xl bg-[#DFDFDF]'>Cancel</button>
                            <button className='font-medium cursor-pointer text-sm text-[#FFFFFF] w-[185px] h-[42px] p-2.5 rounded-xl bg-[#55A3F0]'>Create</button>
                        </div>
                    </form>


                </div>
            </div>
        </>
    )
}

export default CreateModal