import React from 'react'
import Image from 'next/image'
import { hero5, hero8 } from '@/assets'
import {motion} from "framer-motion"
import { TiTickOutline } from 'react-icons/ti'
import { TiTick } from "react-icons/ti";

const page = () => {
  return (
    <>
    <div className='flex flex-row lg:flex-col sm:flex-co'>
        <div className='w-full sm:h-full md:h-[1000px] lg:h-[600px]'>
            <Image 
            src={hero5}
            alt='hero5'
            className='w-full h-full'/>
        </div>
        <div className='w-full text-center flex flex-col items-center justify-center bg-grade space-y-5'>
            <h1 className='mt-5 text-4xl font-medium tracking-wide text-primary'>Corporate Relocation Services</h1>

            <h1 className='text-2xl text-dark tracking-wide font-medium'>Empowering Your Business with Seamless Employee Moves</h1>

            <ul className='space-y-2 mb-20'>
                <li className='space-x-2 flex'>
                    <TiTick className='text-xl text-primary mt-1'/>
                    <p className='text-xl font-medium'>Employee Relocation Programs: <span className='text-lg font-normal'>Tailored support for relocating staff, ensuring productivity and well-being</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <TiTick className='text-xl text-primary mt-1'/>
                    <p className='text-xl font-medium'>Immigration Compliance:  <span className='text-lg font-normal'>Assistance with work permits, visas, and legal documentation.</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <TiTick className='text-xl text-primary mt-1'/>
                    <p className='text-xl font-medium'>Temporary Housing Solutions: <span className='text-lg font-normal'>Arranging short-term accommodations for employees during transitions.</span></p>
                </li>

                <li className='space-x-2 flex mb-20'>
                    <TiTick className='text-xl text-primary mt-1'/>
                    <p className='text-xl font-medium'>Spousal and Family Integration: <span className='text-lg font-normal'>Support for accompanying family members, including school searches and cultural orientation.</span></p>
                </li>
            </ul>
        </div>
    </div>
    <div className='max-w-7xl mx-auto pt-20 pb-20'>
        <div className='text-center space-y-8'>
            <h2 className='text-xl tracking-wide text-dark font-medium'>Additional Services</h2>
            <h1 className='text-2xl text-primary font-medium'>Tailored Solutions to Make Every Move Stress-Free</h1>
            <ul className='space-y-4 mb-20 flex flex-col items-center'>
                <li className='space-x- flex'>
                    <p className='text-xl font-medium'>Property Management:  <span className='text-lg font-normal'>Coordinating the sale or rental of your current property.</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='text-xl font-medium'>Settling-In Services: <span className='text-lg font-normal'>Support with tasks like registering for healthcare, setting up utilities, or finding local services.</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='text-xl font-medium'>Customized Moving Plans: <span className='text-lg font-normal'>Flexible packages designed around your specific timeline and requirements.</span></p>
                </li>
            </ul>
        </div>
    </div>

    <div className='flex flex-row lg:flex-col bg-grade'>

        <div className='flex w-full mx-[100px] lg:mx-0 lg:mt-10 lg:mb-10 items-center justify-center flex-col space-y-5'>
            <h1 className='text-2xl text-primary tracking-wide'>Why Choose Atlas Path?</h1>
            <ul className='space-y-2 mb-20 mx-10'>
                <li className='space-x-3 flex'>
                    <TiTick className='text-xl text-primary mt-1'/>
                    <p className='text-xl font-medium'>Surrey-Based Expertise: <span className='text-lg font-normal'>With deep local knowledge, we understand what matters to individuals and businesses moving to or from the UK</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <TiTick className='text-xl text-primary mt-1'/>
                    <p className='text-xl font-medium'>Comprehensive Support: <span className='text-lg font-normal'>From legal requirements to cultural integration, we cover every detail.</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <TiTick className='text-xl text-primary mt-1'/>
                    <p className='text-xl font-medium'>Personalized Approach: <span className='text-lg font-normal'>Every relocation is as unique as the client. We tailor solutions to meet your needs.</span></p>
                </li>
            </ul>
        </div>
        <div className='w-full h-['>
            <Image 
            src={hero8}
            alt='hero8'
            className='w-full h-full'/>
        </div>

        
    </div>
    </>
  )
}

export default page