import React from 'react'
// import gitHubIcon from '../../public/gitHub.svg'
import gitHubIcon from '../public/gitHub.svg'
import Image from 'next/image'
import Link from 'next/link'

function GitHub() {
    return (
        <>
            <Link  target='_blank'  href="https://github.com/Mani-Jebraeily" className='cursor-pointer' >
                <Image src={gitHubIcon} className='size-10  fixed bottom-2 left-2 sm:bottom-10 sm:left-10' />
            </Link>
        </>
    )
}

export default GitHub