import React from 'react'

function Error() {
    return (
        <>
            <div className='absolute right-10 top-10'>
                <div className='bg-red-400 w-[16vw] h-[8vh] rounded-2xl flex items-center justify-center' >
                    <h1>this username already exists</h1>
                </div>
            </div>
        </>
    )
}

export default Error