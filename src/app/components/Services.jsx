import React from 'react'
import { service1, service2, service3, service4, arrowright } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'

const Services = () => {
  return (
    <div className='pt-20 pb-20 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 mx-4'>
        <div className='text-center'>
            <Link href={'/service2'} className='space-y-5 flex flex-col justify-center items-center'>
                <Image 
                src={service1}
                className='w-[700px] md:h-[500px] md:w-[500px] sm:w-[300px] sm:h-[300px] h-[700px]'
                alt='service1'/>
                <h1 className='uppercase text-2xl fomt-normal text-primary'>Private relocation services</h1>
                <p className='text-md font-normal text-primary/70 duration-300 ease-in-out hover:scale-105'>When you need to relocate, finding a new home could easily be a full time occupation, demanding huge amounts of your time and effort.. but it doesn;t have to be like that</p>
                <div className='flex justify-center items-center duration-300 ease-in-out hover:scale-105 w-3/4'>
                    <Image 
                    src={arrowright}
                    className='w-9 h-9'
                    alt='arrow-right'/>
                </div>
            </Link>
        </div>

        <div className='space-y-3 text-center'>
            <Link href={'/service2'} className='space-y-5 flex flex-col justify-center items-center'>
                <Image 
                src={service2}
                className='w-[700px] md:h-[500px] md:w-[500px] sm:w-[300px] sm:h-[300px] h-[700px]'
                alt='service2'/>
                <h1 className='uppercase text-2xl fomt-normal text-primary'>Private relocation services</h1>
                <p className='text-md font-normal text-primary/70 duration-300 ease-in-out hover:scale-105'>When you need to relocate, finding a new home could easily be a full time occupation, demanding huge amounts of your time and effort.. but it doesn;t have to be like that</p>
                <div className='flex justify-center items-center duration-300 ease-in-out hover:scale-105 w-3/4'>
                    <Image 
                    src={arrowright}
                    className='w-9 h-9'
                    alt='arrow-right'/>
                </div>
            </Link>
        </div>

        <div className='space-y-3 text-center'>
        <Link href={'/service2'} className='space-y-5 flex flex-col justify-center items-center'>
                <Image 
                src={service4}
                className='w-[700px] md:h-[500px] md:w-[500px] sm:w-[300px] sm:h-[300px] h-[700px]'
                alt='service3'/>
                <h1 className='uppercase text-2xl fomt-normal text-primary'>Private relocation services</h1>
                <p className='text-md font-normal text-primary/70 duration-300 ease-in-out hover:scale-105'>When you need to relocate, finding a new home could easily be a full time occupation, demanding huge amounts of your time and effort.. but it doesn;t have to be like that</p>
                <div className='flex justify-center items-center duration-300 ease-in-out hover:scale-105 w-3/4'>
                    <Image 
                    src={arrowright}
                    className='w-9 h-9'
                    alt='arrow-right'/>
                </div>
                
            </Link>
        </div>
    </div>
  )
}

export default Services