import React from 'react'

function ErrorPassword({setErrorPassword}) {
    return (
        <>
            <div className='absolute right-10 top-10'>
                <div className='bg-red-400 w-[200px] sm:w-[300px] h-[8vh] rounded-2xl flex gap-5 items-center justify-center' >
                    <button className=' size-10 rounded-full   bg-white cursor-pointer' onClick={()=>setErrorPassword(false)}>❌ </button>
                    <h1>Passwords do not match</h1>
                </div>
            </div>
        </>
    )
}

export default ErrorPassword