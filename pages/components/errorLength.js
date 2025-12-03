import React from 'react'

function ErrorLength() {
    return (
        <>
            <div className='absolute right-10 top-10'>
                <div className='bg-red-400 w-[16vw] h-[8vh] rounded-2xl flex items-center justify-center' >
                    <h1>Your Password is too short</h1>
                </div>
            </div>
        </>
    )
}

export default ErrorLength