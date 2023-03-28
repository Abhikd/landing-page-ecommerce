import React from 'react'
import {GrDiamond} from 'react-icons/gr'
import {SlBadge} from 'react-icons/sl'

const HurryUp = () => {
  return (
    <div className="w-[85%] mb-20 mx-auto">
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
        <div className='relative'>
            <div className='w-full h-[650px] bg-[#cccea7]'></div>
            <div className='absolute w-full flex justify-center items-center top-[100px]'><GrDiamond size={150} /></div>
            <div className='absolute h-20 w-full top-[300px] flex justify-center items-center'>
                <h1 className='text-xl font-semibold'>Hurry Up!</h1>
            </div>
            <div className='absolute h-20 w-full top-[380px] flex justify-center items-center'>
                <h1 className='text-7xl font-semibold'>Shop Now</h1>
            </div>
            <div className='absolute h-20 w-full top-[470px] flex justify-center items-center'>
                <h1 className='text-xl font-semibold'>Sale</h1>
            </div>
            <div className='absolute h-16 w-full top-[530px] flex justify-center items-center'>
                <button className='border border-white text-white h-10 w-48 text-sm'>SHOP NOW</button>
            </div>
          </div>
          <div className='relative'>
            <div className='w-full h-[650px] bg-[#d6bebe]'></div>
            <div className='absolute w-full flex justify-center items-center top-[100px]'><SlBadge size={150} /></div>
            <div className='absolute h-20 w-full top-[300px] flex justify-center items-center'>
                <h1 className='text-xl font-semibold'>Hurry Up!</h1>
            </div>
            <div className='absolute h-20 w-full top-[380px] flex justify-center items-center'>
                <h1 className='text-7xl font-semibold'>Shop Now</h1>
            </div>
            <div className='absolute h-20 w-full top-[470px] flex justify-center items-center'>
                <h1 className='text-xl font-semibold'>Sale</h1>
            </div>
            <div className='absolute h-16 w-full top-[530px] flex justify-center items-center'>
                <button className='border border-white text-white h-10 w-48 text-sm'>SHOP NOW</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HurryUp