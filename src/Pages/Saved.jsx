import React, { useContext } from 'react'
import { Toaster } from 'react-hot-toast'
function Saved() {
  return (
    <div className='w-full'>
      <Toaster position="top-right" reverseOrder={false} />
      <div className='w-full flex items-center justify-center px-[50px] '>
        <h1 className=' mt-[30px] text-[50px] mb-[50px] text-blue-600'>Saved Products List</h1>
      </div>
      <ul className='list-none flex flex-wrap px-[50px] gap-[20px]'>
        {state.length ? state.map((item, index) => (
          <li className='relative border-[1px] border-blue-400 w-[30%] rounded-md h-[900px]' key={index}>
            <img src={item.images[0]} alt="img" className='w-[100%] h-[50%] rounded-tl-md rounded-tr-md' />
            <div className='p-[20px] flex flex-col items-center space-y-[15px] '>
              <h2 className='text-center text-blue-700 text-[28px] '>{item.title}</h2>
              <p className='font-semibold text-[30px] text-blue-800'>Category:{item.category.name}</p>
              <p className='text-blue-900 text-[25px]'>Price : {item.price}</p>
              <p className='text-justify text-blue-500'>{item.description}</p>
            </div>
          </li>
          
        )) : <li className='w-full font-bold text-[50px] text-center mt-[150px]'>Saved Products not found</li> }
      </ul>
    </div>
  )
}

export default Saved
