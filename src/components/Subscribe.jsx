import React from 'react'

const Subscribe = () => {
  return (
    <div className='w-full mb-20 flex flex-col items-center justify-center'>
        <div className='w-[85%] bg-[#840017] text-white flex flex-col items-center justify-center'>
            <h1 className='text-3xl pt-14 text-center'>Subscribe to get updates on exciting offers</h1>
            <h1 className='text-3xl pb-8'>and deals</h1>
            <div className='w-[45%] flex'>
            <input className='mb-10 w-full h-10 bg-white bg-opacity-40 px-6 placeholder-white' placeholder='Enter your mail' />
            <button className='mb-10 h-10 bg-white text-red-600 w-32 font-medium'>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Subscribe