import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import manageIcon from '../../public/manage.svg'
import editIcon from '../../public/edit.svg'
import deleteIcon from '../../public/trash.svg'
import axios from 'axios'

function Main() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/products")
      .then((res) => setProducts([...res.data.data]))
  }, [])
  console.log(products)

  return (
    <>

      <div className=' flex flex-col justify-center items-center w-screen h-fit bg-amber-800'>
        {/* <div className='flex w-[80vw] bg-blue-300'> */}
        <div className='bg-amber-400 w-[80vw] flex justify-between mt-10'>
          <div className='flex items-center'>
            <Image src={manageIcon} alt='icon' />
            <h2>Product Management</h2>

          </div>
          <button className='w-[132px] h-[45px] rounded-xl text-white bg-[#55A3F0] cursor-pointer'>Add Product</button>
        </div>





        <table class="table-auto rounded-[30px_30px_0px_0px] rou nded-2xl bg-amber-200 mt-10 w-[80vw] overflow-hidden">
          <thead className=' rounded-2xl h-[70px] bg-[#F2F2F2] text-sm font-medium text-[#282828]'>
            <tr className='flex justify-around  items-center *:border-l-2 *:border-r-2'>
              <th className='bg-amber-200 basis-32'>  - </th>
              <th className='bg-amber-200 basis-64'  >ID</th>
              <th className='bg-amber-200 basis-64'>price</th>
              <th className='bg-amber-200 basis-64'>Quantity</th>
              <th className='bg-amber-200 basis-64'>Product Name</th>
            </tr>
          </thead>
          <tbody className='bg-[#FFFFFF] *:h-15 *:border-b-[#F2F2F2] *:border-b *:flex *:justify-between *:items-center '>
          
            {products.map((p) => {
              return (<>
                <tr key={p.id}>
                  <td className='flex gap-2 basis-32 '>
                    <Image src={editIcon} alt='icon'/>
                    <Image src={deleteIcon} alt='icon'/>
                  </td>
                  <td className='basis-64'>{p.id}</td>
                  <td className='basis-64'>{p.price}</td>
                  <td className='basis-64'>{p.quantity}</td>
                  <td className='basis-64'>{p.name}</td>
                </tr>

              </>)


            })}


          </tbody>
        </table>


        {/* </div> */}

      </div>
    </>
  )
}

export default Main