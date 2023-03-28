import React from 'react'

const MediumCards = () => {
  return (
    <div className='mt-20 mb-20 mx-4 md:mx-10 lg:mx-28'>
        <div className='w-full grid grid-cols-1 gap-3 md:grid-cols-1 lg:grid-cols-2'>
            <div className='h-[250px] relative'>
            <img className='left-0 w-full h-[100%] object-cover' src="https://img.freepik.com/free-photo/handsome-guy-scratching-his-neck_140725-36588.jpg?w=1060&t=st=1679904245~exp=1679904845~hmac=cd5d0d9dffff12e3f2325db15a55bb4296340d06556ae5fec31b0a62375e8c75" alt="" />
           <div className='absolute top-1/3 left-2/3 flex flex-col items-center justify-center'>
            <p className='text-4xl font-medium tracking-wider'>SHIRTS</p>
            <p className='bg-black text-gray-200 text-sm tracking-wide w-[100px]'>UPTO 60% OFF</p>
            </div>
            </div>
            <div className='h-[250px] relative '>
            <img className='left-0 w-full h-[100%] object-cover' src="https://img.freepik.com/premium-photo/young-handsome-man-feeling-happy-facing-challenge-celebrating-cold-weather-concept_1194-367407.jpg?w=1060" alt="" />
            <div className='absolute top-1/3 pl-2  flex flex-col items-center justify-center'>
            <p className='text-4xl font-medium tracking-wider'>WINTER</p>
            <p className='bg-black text-gray-200 text-sm tracking-wider w-[90px]'>COLLECTION</p>
            </div>
            </div>
        </div>
        <div className='mt-3 w-full grid grid-cols-1 gap-3 md:grid-cols-1 lg:grid-cols-3'>
            <div className='h-[200px] relative '>
            <img className='left-0 w-full h-[100%] object-cover' src="https://img.freepik.com/free-photo/beautiful-young-woman-wearing-shirt-mockup_23-2149276346.jpg?w=1060&t=st=1679904360~exp=1679904960~hmac=97d235bb3aba88e578fbdd9ed248acb71cb0b9afcff4eb1ff46c97c79c3f7eeb" alt="" />
            <div className='absolute top-1/3 left-2/3 flex flex-col items-center justify-center'>
            <p className='text-4xl font-medium tracking-wider lg:text-lg'>WOMEN'S</p>
            <p className='bg-black text-gray-200 text-sm tracking-wide w-[40px] '>WEAR</p>
            </div>
            </div>
            <div className='h-[200px] relative '>
            <img className='left-0 w-full h-[100%] object-cover' src="https://img.freepik.com/free-photo/happy-handsome-brutal-bearder-man-wearing-warm-red-winter-trendy-fleece-hoodie_343596-2697.jpg?w=1060&t=st=1679904554~exp=1679905154~hmac=146202fdef83f2907aecdcd40a3da76852b428f5964be85ca205b3a2a63ae134" alt="" />
            <div className='absolute top-1/3 pl-2  flex flex-col items-center justify-center'>
            <p className='text-4xl font-medium tracking-wider lg:text-lg'>BEST DEAL</p>
            <p className='bg-black text-gray-200 text-sm tracking-wider w-[60px]'>80% OFF</p>
            </div>
            </div>
            <div className='h-[200px] relative '>
            <img className='left-0 w-full h-[100%] object-cover' src="https://img.freepik.com/free-photo/attractive-red-haired-girl-looking-directly-camera-with-charming-smile-wearing-casual-orange-pullover-standing-against-yellow-wall-expressing-positive-emotions_176532-11315.jpg?w=1060&t=st=1679904736~exp=1679905336~hmac=5a545d8607e285fa0e9abb9a5e9a4aa0210295484e87bf063eccb029f16bc70a" alt="" />
            <div className='absolute top-1/3 pl-2  flex flex-col items-center justify-center'>
            <p className='text-4xl font-medium tracking-wider lg:text-lg'>TRENDY</p>
            <p className='bg-black text-gray-200 text-sm tracking-wider w-[90px]'>COLLECTION</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default MediumCards