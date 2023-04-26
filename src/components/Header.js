import Image from 'next/image'
import React from 'react'
import { MagnifyingGlassCircleIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { Bars3Icon, GlobeAltIcon } from '@heroicons/react/24/outline';

function Header() {
    return (
        <header className='sticky-top-0 grid grid-cols-3 bg-white shadow-md py-5 px-5 lg:px-10 z-50'>
            {/* Left */}
            <div className='relative flex items-center h-10 cursor-pointer my-auto'>
                <Image src='https://links.papareact.com/qd3' layout='fill' objectFit='contain' objectPosition='left' />
            </div>
            {/* Middle */}
            <div className='flex items-center md:border-2 rounded-full py-2 shadow-sm'>
                <input type='text' placeholder='Start your search' className='pl-5 outline-none grow text-sm text-gray-600 placeholder-gray-400' />
                <MagnifyingGlassCircleIcon className='fill-red-400 hidden md:inline-flex h-8 cursor-pointer md:mx-2' />
            </div>
            {/* Right */}
            <div className='flex items-center space-x-4 justify-end text-gray-500'>
                <p className='hidden md:inline-flex cursor-pointer'>Become a host</p>
                <GlobeAltIcon className='h-6 cursor-pointer' />
                <div className='flex border-2 rounded-full p-2 space-x-1'>
                    <Bars3Icon className='h-6 cursor-pointer'/>
                    <UserCircleIcon className='h-6 cursor-pointer'/>
                </div>
            </div>
        </header>
    )
}

export default Header
