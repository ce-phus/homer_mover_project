import React from 'react'
import Image from 'next/image'
import { hero37, hero15, hero4 } from '@/assets'
import {motion} from "framer-motion"
import { TiTickOutline } from 'react-icons/ti'
import { TiTick } from "react-icons/ti";

const page = () => {
  return (
    <>
    <div className='flex flex-row lg:flex-col'>
        <div className='w-full h-1/2 sm:h-full md:h-[1000px] xl:h-[600px]'>
            <Image 
            src={hero15}
            alt='hero5'
            className='w-full h-full'/>
        </div>
        <div className='w-full flex flex-col items-center pt-20 lg:pt-20 bg-gray-100 space-y-5'>
            <h1 className='mt-5 text-xl font-medium tracking-wide text-primary'>Corporate Relocation Services</h1>

            <h1 className='text-xl text-dark tracking-wide font-medium'>Empowering Your Business with Seamless Employee Moves</h1>

            <ul className='space-y-2 mb-20 mx-5'>
                <li className='space-x-2 flex'>
                    <p className='font-medium'>Employee Relocation Programs: <span className='text-lg font-normal'>Tailored support for relocating staff, ensuring productivity and well-being</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='font-medium'>Immigration Compliance:  <span className='text-lg font-normal'>Assistance with work permits, visas, and legal documentation.</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='font-medium'>Temporary Housing Solutions: <span className='text-lg font-normal'>Arranging short-term accommodations for employees during transitions.</span></p>
                </li>

                <li className='space-x-2 flex mb-20'>
                    <p className='font-medium'>Spousal and Family Integration: <span className='text-lg font-normal'>Support for accompanying family members, including school searches and cultural orientation.</span></p>
                </li>
            </ul>
        </div>
    </div>
    <div className='max-w-7xl mx-auto pt-20 pb-20'>
        <div className='text-center space-y-8'>
            <h2 className='text-lg tracking-wide text-dark font-medium'>Additional Services</h2>
            <h1 className='text-xl text-primary font-medium'>Tailored Solutions to Make Every Move Stress-Free</h1>
            <ul className='space-y-4 mb-20 flex flex-col items-center'>
                <li className='space-x- flex'>
                    <p className='font-medium'>Property Management:  <span className='text-lg font-normal'>Coordinating the sale or rental of your current property.</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='font-medium'>Settling-In Services: <span className='text-lg font-normal'>Support with tasks like registering for healthcare, setting up utilities, or finding local services.</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='font-medium'>Customized Moving Plans: <span className='text-lg font-normal'>Flexible packages designed around your specific timeline and requirements.</span></p>
                </li>
            </ul>
        </div>
    </div>

    <div className='flex flex-row lg:flex-col bg-gray-100'>
        <div className='flex w-full mx-[100px] xl:mx-0 lg:mt-10 lg:mb-10 items-center justify-center flex-col space-y-5'>
            <h1 className='text-xl text-primary tracking-wide'>Why Choose Atlas Path?</h1>
            <ul className='space-y-2 mb-20 mx-10'>
                <li className='space-x-3 flex'>
                    <p className='font-medium'>Surrey-Based Expertise: <span className='text-lg font-normal'>With deep local knowledge, we understand what matters to individuals and businesses moving to or from the UK</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='font-medium'>Comprehensive Support: <span className='text-lg font-normal'>From legal requirements to cultural integration, we cover every detail.</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className=' font-medium'>Personalized Approach: <span className='text-lg font-normal'>Every relocation is as unique as the client. We tailor solutions to meet your needs.</span></p>
                </li>
            </ul>
        </div>
        <div className='w-full h-['>
            <Image 
            src={hero37}
            alt='hero8'
            className='w-full h-full'/>
        </div>

        
    </div>
    </>
  )
}

export default page