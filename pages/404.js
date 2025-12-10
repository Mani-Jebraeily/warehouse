import { redirect } from 'next/dist/server/api-utils'
import React from 'react'

function NotFound() {
  return (
    <div>NotFound</div>
  )
}

export default NotFound

// export async function getStaticProps(){
//     return{
//         redirect:{destination:"/login"}
//     }
// }