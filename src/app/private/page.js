import React from 'react'
import { privatepic, private2, download } from '@/assets'
import Image from 'next/image'

const Private = () => {
  return (
    <>
    <div className='flex flex-row lg:flex-col pt-10'>
        <div className='w-full sm:h-full md:h-[1000px] lg:h-full h-[700px] xl:h-[635px]'>
            <Image 
            src={privatepic}
            alt='hero5'
            className='w-full h-full'/>
        </div>
        <div className='w-full flex flex-col items-center bg-gray-100 space-y-8'>
            <h1 className='text-[20px] uppercase font-medium tracking-wide text-primary text-center mt-20 lg:mt-10'>Private Relocation Services</h1>
                <Image
                src={download}
                className='w-[150px]'
                alt=''/>

            <ul className='mx-5'>
                <li className='space-x-2 flex mb-2'>
                    <p className='text-lg font-normal'>At Atlas Path, we understand that every move is deeply personal. Our Private Relocation Service is designed to cater specifically to individuals and families seeking a smooth, stress-free transition to their new home. We provide a personalized approach that addresses every detail—from initial planning and home search to the final move and settling-in process.</p>
                </li>

                <li className='space-x-2 flex mb-10'>
                    <p className='text-lg font-normal'>Our tailored service includes assistance with packing, transportation, utility setup, and even local orientation, ensuring you feel supported at every step. With our expert local knowledge and commitment to excellence, Atlas Path takes the worry out of your relocation, allowing you to focus on starting your new chapter with confidence and ease.</p>
                </li>
            </ul>
        </div>
    </div>
    <div className='max-w-7xl mx-auto pt-20 pb-20'>
        <div className='text-center space-y-8'>
            <h2 className='text-[20px] uppercase tracking-wide text-dark font-medium'>Additional Services</h2>
            <h1 className='text-[20px] uppercase text-primary font-medium'>Tailored Solutions to Make Every Move Stress-Free</h1>
            <ul className='space-y-4 mb-20 flex flex-col items-center'>
                <li className='space-x- flex'>
                    <p className='text-lg font-medium'>Personalized Consultation: <span className='text-lg font-normal'>In-depth discussions to design a relocation strategy that suits your lifestyle.</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='text-lg font-medium'>Home Search & Settling-In Support: <span className='text-lg font-normal'>Assistance in finding your perfect new home and setting up essential services.</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='text-lg font-medium'>Professional Packing & Safe Transportation: <span className='text-lg font-normal'>Expert handling of your belongings for a secure and efficient move.</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='text-lg font-medium'>Local Orientation: <span className='text-lg font-normal'>Guidance to help you quickly acclimate to your new community, from neighborhood insights to local amenities.</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='text-lg font-medium'>Ongoing Support: <span className='text-lg font-normal'>Continuous assistance throughout the process, ensuring a smooth transition and peace of mind.</span></p>
                </li>
            </ul>
        </div>
    </div>

    <div className='flex flex-row lg:flex-col bg-gray-100'>

        <div className='flex w-full mx-[100px] lg:mx-0 lg:mt-10 lg:mb-10 items-center justify-center flex-col space-y-5'>
            <h1 className='text-[20px] uppercase text-primary tracking-wide'>Why Choose Atlas Path?</h1>
            <ul className='space-y-2 mb-20 mx-10'>
                <li className='space-x-3 flex'>
                    <p className='text-lg font-medium'>Surrey-Based Expertise: <span className='text-lg font-normal'>With deep local knowledge, we understand what matters to individuals and businesses moving to or from the UK</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='text-lg font-medium'>Comprehensive Support: <span className='text-lg font-normal'>From legal requirements to cultural integration, we cover every detail.</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='text-lg font-medium'>Personalized Approach: <span className='text-lg font-normal'>Every relocation is as unique as the client. We tailor solutions to meet your needs.</span></p>
                </li>
            </ul>
        </div>
        <div className='w-full h-[550px] lg:h-full'>
            <Image 
            src={private2}
            alt='hero8'
            className='w-full h-full'/>
        </div>   
    </div>
    </>
  )
}

export default Private