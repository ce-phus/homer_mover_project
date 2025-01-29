import React from 'react'
import { arrowright, hero1, hero3, hero16, hero15 } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'

const Services = () => {
  return (
    <>
        <div className='space-y-4 flex items-center flex-col max-5xl mx-auto pt-10'>
            <h2 className='text-2xl text-dark font-medium'>"Comprehensive Relocation Solutions Tailored to Your Needs"</h2>
            <p className='text-lg font-normal w-1/2 xl:w-full xl:mx-5'>At Atlas Path, we specialize in providing end-to-end relocation services for corporate teams, families, and individuals. Whether you’re moving across town, across the country, or across the globe, our expertise ensures a smooth, stress-free transition.</p>
        </div>
        <div className='pt-10 pb-20 grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-20 xl:gap-[60px] mx-4'>
        <div className='space-y-3 text-center'>
            <Link href={'/domestic'} className='space-y-5 flex flex-col justify-center items-center'>
                <Image 
                src={hero16}
                className='w-[500px] lg:h-[400px] xl:w-[400px] xl:h-[350px] lg:w-[400px] h-[400px]'
                alt='service3'/>
                <h1 className='uppercase text-2xl fomt-normal text-primary'>Domestic relocation services</h1>
                <p className='text-md font-normal text-primary/70 duration-300 ease-in-out hover:scale-105'>Making Local Moves Effortless</p>
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
                src={hero15}
                className='w-[500px] lg:h-[400px] xl:w-[400px] xl:h-[350px] lg:w-[400px] h-[400px]'
                alt='service2'/>
                <h1 className='uppercase text-2xl fomt-normal text-primary'>Corporate relocation services</h1>
                <p className='text-md font-normal text-primary/70 duration-300 ease-in-out hover:scale-105'>Empowering Your Business with Seamless Employee Moves</p>
                <div className='flex justify-center items-center duration-300 ease-in-out hover:scale-105 w-3/4'>
                    <Image 
                    src={arrowright}
                    className='w-9 h-9'
                    alt='arrow-right'/>
                </div>
            </Link>
        </div>
        <div className='text-center'>
            <Link href={'/international'} className='space-y-5 flex flex-col justify-center items-center'>
                <Image 
                src={hero3}
                className='w-[500px] xl:w-[400px] xl:h-[350px] lg:h-[400px] lg:w-[400px] h-[400px]'
                alt='service1'/>
                <h1 className='uppercase text-2xl fomt-normal text-primary'>International relocation services</h1>
                <p className='text-md font-normal text-primary/70 duration-300 ease-in-out hover:scale-105'>Bridging Borders, Building Futurest</p>
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