import React from 'react'

function Error({setErrorUser}) {
    return (
        <>
            <div className='absolute right-10 top-10'>
                <div className='bg-red-400 w-[200px] sm:w-[300px] text-white h-[8vh] rounded-2xl flex items-center justify-around' >
                    <button className=' size-10 rounded-full  bg-white cursor-pointer' onClick={()=>setErrorUser(false)}>❌ </button>
                    <h1>this username already exists</h1>
                </div>
            </div>
        </>
    )
}

export default Error