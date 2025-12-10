import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import manageIcon from '../../public/manage.svg'
import editIcon from '../../public/edit.svg'
import deleteIcon from '../../public/trash.svg'
import exitIcon from "../../public/icon3.svg"
import axios from 'axios'
import CreateModal from '../modules/createModal'
import DeleteModal from '../modules/deleteModal'
import EditModal from '../modules/editModal'
import { useRouter } from 'next/router'
import { getCookie } from 'cookies-next'


function Main({ deleteTokenHandeler }) {
  const api = process.env.NEXT_PUBLIC_API_URL
  const token = getCookie("token")
  const [products, setProducts] = useState([])
  const [productsCounter, setProductsCounter] = useState([])
  const [showCreate, setShowCreate] = useState(false)
  const [showDelete, setShowDelete] = useState(false)
  const [showEdit, setShowEdit] = useState(true)
  const [pagination, setPagination] = useState(1)
  const [refresh, setRefresh] = useState(0)
  const [selectedId, setSelectedId] = useState(null)
  const maxPagination = Math.ceil(productsCounter.length / 10)
  const router = useRouter()
  // const token = document.cookie







  useEffect(() => {
    testToken()
    setShowCreate(false)
    setShowDelete(false)
    setShowEdit(false)
    axios.get(`${api}/products?page=1&limit=1000`)
      .then((res) => setProductsCounter([...res.data.data]))

    axios.get(`${api}/products?page=${pagination}&limit=10`)
      .then((res) => setProducts([...res.data.data]))
      .catch((error) => {
        console.log(error)
        if (pagination > 1) {
          setPagination(pagination - 1)

        }
      })
  }, [pagination, refresh])


  //  final

  // useEffect(() => {
  //   testToken()
  //   setShowCreate(false)
  //   setShowDelete(false)
  //   setShowEdit(false)

  //   axios.get(`${api}/products?page=1&limit=1000`)
  //     .then((res) => setProductsCounter([...res.data.data]))

  //      if (pagination > 1&&products.length === 0) {
  //       setPagination(pagination - 1)
  //       console.log("tamam")
  //   }

  //   axios.get(`${api}/products?page=${pagination}&limit=10`)
  //     .then((res) => setProducts([...res.data.data]))
  //     .catch((error)=>{
  //       setPagination(pagination - 1)
  //     })
  // }, [pagination, refresh])













  const testToken = () => {
    if (!token) {
      router.push("/login")
    }
  }







  return (
    <>

      {showCreate && <CreateModal setShowCreate={setShowCreate} setRefresh={setRefresh} refresh={refresh} />}
      {showDelete && <DeleteModal setShowDelete={setShowDelete} setRefresh={setRefresh} selectedId={selectedId} refresh={refresh} />}
      {showEdit && <EditModal setShowEdit={setShowEdit} setRefresh={setRefresh} selectedId={selectedId} refresh={refresh} />}




      <div className=' flex flex-col justify-center items-center w-screen h-fit pb-30 bg-gray-50'>
        <div className=' w-[80vw] flex  justify-between mt-10'>
          <div className='flex gap-1 sm:gap-5 items-center'>
            <Image src={manageIcon} alt='icon' />
            <h2 className='font-normal text-[10px] sm:text-2xl text-[#282828]'>Product Management</h2>
          </div>
          <div className='flex gap-5 justify-center items-center'>
            <Image onClick={() => deleteTokenHandeler()} src={exitIcon} className='size-10 bg-red-300 cursor-pointer rounded-xl ' alt='icon exit' />
            <button onClick={() => setShowCreate(true)} className='w-[132px] h-[45px] rounded-xl text-white bg-[#55A3F0] cursor-pointer'>Add Product</button>

          </div>

        </div>


        <div className="mt-10 w-[80vw] overflow-x-auto rounded-4xl">
          <table className="min-w-[720px] w-full table-auto border-collapse">
            <thead className="bg-[#F2F2F2] h-[70px] text-sm font-medium text-[#282828]">
              <tr>
                <th className="w-64 text-center">Product Name</th>
                <th className="w-64 text-center">Quantity</th>
                <th className="w-64 text-center">Price</th>
                <th className="w-64 text-center">ID</th>
                <th className="w-32"></th>
              </tr>
            </thead>

            <tbody className="bg-white text-sm">
              {products.map((p) => (
                <tr key={p.id} className="h-15 border-b border-[#F2F2F2]">

                  <td className="w-64 text-center whitespace-nowrap">
                    {p.name}
                  </td>

                  <td className="w-64 text-center whitespace-nowrap">
                    {p.quantity}
                  </td>

                  <td className="w-64 text-center whitespace-nowrap">
                    {p.price}
                  </td>

                  <td className="w-64 text-center whitespace-nowrap">
                    {p.id}
                  </td>

                  <td className="w-64 lg:w-32">
                    <div className="flex justify-around">
                      <Image
                        onClick={() => {
                          setSelectedId(p.id)
                          setShowEdit(true)
                        }}
                        src={editIcon}
                        alt="edit"
                        className="cursor-pointer"
                      />
                      <Image
                        onClick={() => {
                          setSelectedId(p.id)
                          setShowDelete(true)
                        }}
                        src={deleteIcon}
                        alt="delete"
                        className="cursor-pointer"
                      />
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
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


