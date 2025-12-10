import React from 'react'

function ErrorFill({setShowError}) {
    return (
        <>
            <div className='absolute md:right-10 top-5 md:top-10'>
                <div className='bg-red-400 w-[200px] sm:w-[300px] text-white h-[8vh] rounded-2xl flex md:gap-5 items-center justify-around' >
                    <button className=' size-10 rounded-full  bg-white cursor-pointer' onClick={() => setShowError(false)}>❌ </button>
                    <h1>
                        Please fill out all fields
                    </h1>
                </div>
            </div>
        </>
    )
}

export default ErrorFill