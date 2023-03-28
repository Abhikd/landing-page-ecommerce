import React from 'react'
import {BsBox} from 'react-icons/bs'
import {SlBadge} from 'react-icons/sl'
import {MdPayment, MdSupportAgent} from 'react-icons/md'

const Policy = () => {
  return (
    <div className='w-full bg-[#f5f4f2] h-[250px] mb-20 grid grid-cols-2  lg:grid-cols-4 divide-x-2 divide-y-2'>
        <div className='flex flex-col items-center justify-center'>
            <BsBox size={70} />
            <h1 className='font-medium text-base mt-4'>7 Days Return</h1>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <SlBadge size={70} />
            <h1 className='font-medium text-base mt-4'>Quality Products</h1>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <MdPayment size={70} />
            <h1 className='font-medium text-base mt-4'>Safe Payment</h1>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <MdSupportAgent size={70} />
            <h1 className='font-medium text-base mt-4'>24X7 Helpline</h1>
        </div>
    </div>
  )
}

export default Policy 