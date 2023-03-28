import React from 'react'

const FashionBanner = () => {
  return (
    <div className="w-full h-[500px] relative">
         <img className='left-0 w-full h-[90%] object-cover' src="https://img.freepik.com/free-photo/blonde-girl-showing-helpless-gesture-blue-t-shirt-looking-confused-front-view_176474-60261.jpg?w=1060&t=st=1679912477~exp=1679913077~hmac=b52940343df58dc2b3cc3fa42790f2d09dc6c241984afebbcec5311726a3b6ce" alt="" />
         <div className='absolute top-1/3 ml-10 flex flex-col items-center justify-center'>
            <p className='text-6xl font-medium tracking-wide text-red-700'>LOOSE FIT</p>
            <p className="text-4xl">STYLISH TEES</p>
            <button className='border border-black w-36 bg-black text-white font-semibold mt-4 rounded-lg'>SHOP NOW</button>
            </div>
    </div>
  )
}

export default FashionBanner