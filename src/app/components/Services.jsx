import React from 'react'
import { arrowright, hero1, hero3, hero4 } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'

const Services = () => {
  return (
    <>
        <div className='space-y-4 flex items-center flex-col max-5xl mx-auto pt-10'>
            <h2 className='text-2xl text-dark font-medium'>"Comprehensive Relocation Solutions Tailored to Your Needs"</h2>
            <p className='text-lg font-normal w-1/2 lg:w-full lg:mx-3'>At Atlas Path, we specialize in providing end-to-end relocation services for corporate teams, families, and individuals. Whether you’re moving across town, across the country, or across the globe, our expertise ensures a smooth, stress-free transition.</p>
        </div>
        <div className='pt-10 pb-20 grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-3 mx-4'>
        <div className='text-center'>
            <Link href={'/international'} className='space-y-5 flex flex-col justify-center items-center'>
                <Image 
                src={hero3}
                className='w-[500px] md:h-[500px] md:w-[500px] sm:w-[300px] sm:h-[300px] h-[500px]'
                alt='service1'/>
                <h1 className='uppercase text-2xl fomt-normal text-primary'>International relocation services</h1>
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
            <Link href={'/corporate'} className='space-y-5 flex flex-col justify-center items-center'>
                <Image 
                src={hero4}
                className='w-[500px] md:h-[500px] md:w-[500px] sm:w-[300px] sm:h-[300px] h-[500px]'
                alt='service2'/>
                <h1 className='uppercase text-2xl fomt-normal text-primary'>Corporate relocation services</h1>
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
            <Link href={'/domaestic'} className='space-y-5 flex flex-col justify-center items-center'>
                <Image 
                src={hero1}
                className='w-[500px] md:h-[500px] md:w-[500px] sm:w-[300px] sm:h-[300px] h-[500px]'
                alt='service3'/>
                <h1 className='uppercase text-2xl fomt-normal text-primary'>Domestic relocation services</h1>
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
    </>
    
  )
}

export default Services