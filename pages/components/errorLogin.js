import React from 'react'

function ErrorLogin({setErrorLogin}) {
    return (
        <>
            <div className='absolute right-10 top-10'>
                <div className='bg-red-400 w-[16vw] text-white h-[8vh] rounded-2xl flex items-center justify-around' >
                    <button className=' size-10 rounded-full  bg-white cursor-pointer' onClick={() => setErrorLogin(false)}>❌ </button>
                    <h1>Invalid username or password</h1>
                </div>
            </div>
        </>
    )
}

export default ErrorLogin