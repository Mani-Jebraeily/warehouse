import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import manageIcon from '../../../public/manage.svg'
import editIcon from '../../../public/edit.svg'
import deleteIcon from '../../../public/trash.svg'
import exitIcon from "../../../public/icon3.svg"
import axios from 'axios'
// import CreateModal from './modules/createModal'
// import CreateModal from './compone'
import CreateModal from '../modules/createModal'
import DeleteModal from '../modules/deleteModal'
import { useRouter } from 'next/router'


function Main({ deleteTokenHandeler }) {
  const [products, setProducts] = useState([])
  const [productsCounter, setProductsCounter] = useState([])
  const [showCreate, setShowCreate] = useState(false)
  const [showDelete, setShowDelete] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [pagination, setPagination] = useState(1)
  const [refresh,setRefresh]=useState(0)
  const [selectedId, setSelectedId] = useState(null)
  const maxPagination = Math.ceil(productsCounter.length / 10)
  const router = useRouter()
  // const token = document.cookie


  useEffect(() => {
    axios.get("http://localhost:3000/products?page=1&limit=1000")
      .then((res) => setProductsCounter([...res.data.data]))
      .then(() => console.log(productsCounter))

    axios.get(`http://localhost:3000/products?page=${pagination}&limit=10`)
      .then((res) => setProducts([...res.data.data]))
      .then(() => console.log(productsCounter))
  }, [pagination,refresh])


  const testToken = () => {
    // if (!token) {
    //   router.push("/login")
    // }
    // console.log("111")
  }

  setTimeout(() => {
    testToken()
  },610000)







  return (
    <>
      {showCreate && <CreateModal setShowCreate={setShowCreate} setRefresh={setRefresh}  refresh={refresh}/>}
      {showDelete && <DeleteModal setShowDelete={setShowDelete} setRefresh={setRefresh} selectedId={selectedId} refresh={refresh}/>}
      {showDelete && <DeleteModal setShowDelete={setShowDelete} setRefresh={setRefresh} selectedId={selectedId} refresh={refresh}/>}




      <div className=' flex flex-col justify-center items-center w-screen h-fit pb-30 bg-gray-50'>
        <div className=' w-[80vw] flex justify-between mt-10'>
          <div className='flex gap-5 items-center'>
            <Image src={manageIcon} alt='icon' />
            <h2 className='font-normal text-2xl text-[#282828]'>Product Management</h2>
          </div>
          <div className='flex gap-5 justify-center items-center'>
            <Image onClick={() => deleteTokenHandeler()} src={exitIcon} className='size-10 bg-red-300 cursor-pointer rounded-xl ' alt='icon exit' />
            <button onClick={() => setShowCreate(true)} className='w-[132px] h-[45px] rounded-xl text-white bg-[#55A3F0] cursor-pointer'>Add Product</button>

          </div>

        </div>





        <table class="table-auto rounded-4xl r ounded-[30px_30px_0px_0px] rou nded-2xl  mt-10 w-[80vw] overflow-hidden">
          <thead className=' flex justify-center   h-[70px] bg-[#F2F2F2] text-sm font-medium text-[#282828]'>
            <tr className='flex justify-around    w-[80vw] items-center'>
              <th className=' basis-32'>   </th>
              <th className=' basis-64'  >ID</th>
              <th className=' basis-64'>Price</th>
              <th className=' basis-64'>Quantity</th>
              <th className=' basis-64'>Product Name</th>
            </tr>
          </thead>
          <tbody className='flex flex-col justify-between bg-[#FFFFFF] *:h-15 *:border-b-[#F2F2F2] *:border-b *:flex *:justify-between *:items-center '>

            {products.map((p) => {
              return (<>
                <tr key={p.id} className=' *:basis-64 [&>td:first-child]:basis-32'>
                  <td className='flex  basis-32 justify-around'>
                    <Image onClick={()=>{
                      setSelectedId(p.id)
                      setShowDelete(true)
                      }} src={deleteIcon} alt='icon' className='cursor-pointer' />
                    <Image src={editIcon} alt='icon' className='cursor-pointer'/>
                  </td>
                  <td className=' text-center'>{p.id}</td>
                  <td className=' text-center'>{p.price}</td>
                  <td className=' text-center'>{p.quantity}</td>
                  <td className=' text-center'>{p.name}</td>
                </tr>

              </>)


            })}


          </tbody>
        </table>

        <div className='flex gap-5 mt-5'>
          {maxPagination > pagination ?
            <button onClick={() => setPagination(pagination + 1)} className='bg-blue-200 size-8 rounded-full cursor-pointer ' >{`<`}</button>

            :
            <button className='bg-blue-200 size-8 rounded-full cursor-not-allowed   ' >{`<`}</button>

          }
          <h2 className='font-normal text-2xl text-[#282828]'>{pagination}</h2>


          {pagination > 1 ?
            <button onClick={() => setPagination(pagination - 1)} className='bg-blue-200 size-8 rounded-full cursor-pointer ' >{`>`}</button>
            :
            <button className='bg-blue-200 size-8 rounded-full cursor-not-allowed   ' >{`>`}</button>

          }




        </div>



      </div>


    </>
  )
}

export default Main