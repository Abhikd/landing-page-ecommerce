import React from 'react'

const FashionBanner = () => {
  return (
    <div className="w-full h-[500px] relative">
         <img className='left-0 w-full h-[90%] object-cover' src="https://img.freepik.com/free-photo/doubtful-redhead-guy-glasses-frowning-looking-pointing-fingers-up-something-disappointed-s_1258-144916.jpg?w=1380&t=st=1679911445~exp=1679912045~hmac=d740bb2e34030d6ba396582ebd305f90f7b8a9a8cfc58701940957eca2dd353f" alt="" />
         <div className='absolute top-1/3 ml-10 flex flex-col items-center justify-center'>
            <p className='text-4xl font-medium tracking-wide'>LET THE FASHION</p>
            <p className="text-3xl">SPEAK YOUR PERSONALITY</p>
            <button className='border border-pink-500 w-36 bg-pink-500 text-white font-semibold mt-4 rounded-lg'>GRAB IT TODAY</button>
            </div>
    </div>
  )
}

export default FashionBanner