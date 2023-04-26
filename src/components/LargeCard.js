import Image from 'next/image'
import React from 'react'

function LargeCard({img, title, description, buttonText}) {
  return (
    <div className='relative py-16 cursor-pointer'>
        <div className='relative h-96 min-w-[300px]'>
            <Image src={img} layout='fill' objectFit='cover' className='rounded-2xl'/>
        </div>

        <div className='absolute top-32 left-16'>
            <h3 className='text-4xl mb-3 font-semibold w-64'>{title}</h3>
            <p className='font-semibold'>{description}</p>
            <button className='text-sm font-semibold text-white bg-gray-900 px-4  py-2 rounded-lg mt-5 hover:shadow-xl hover:scale-110 transition transform duration-200 ease-out'>{buttonText}</button>
        </div>
    </div>
  )
}

export default LargeCard
