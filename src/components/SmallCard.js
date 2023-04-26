import Image from 'next/image'
import React from 'react'

function SmallCard({ distance, location, img }) {
    return (
        <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out cursor-pointer'>
            <div className='relative h-16 w-16'>
            <Image className='rounded-lg' src={img} layout='fill' />
            </div>
            <div className=''>
                <h3 className='font-semibold'>{location}</h3>
                <h4 className='text-gray-500'>{distance}</h4>
            </div>
        </div>
    )
}

export default SmallCard
