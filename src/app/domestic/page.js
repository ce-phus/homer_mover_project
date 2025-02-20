import React from 'react'
import { download, domestic, domestic1 } from '@/assets'
import Image from 'next/image';

const Domestic = () => {
  return (
    <>
    <div className='flex flex-row lg:flex-col pt-10'>
        <div className='w-full sm:h-full md:h-[1000px] lg:h-[600px] h-[700px]'>
            <Image 
            src={domestic}
            alt='hero5'
            className='w-full h-full'/>
        </div>
        <div className='w-full flex flex-col items-center bg-gray-100 space-y-8'>
            <h1 className='text-[20px] uppercase font-medium tracking-wide text-primary text-center mt-20'>Domestic Relocation Services</h1>
                <Image
                src={download}
                className='w-[150px]'
                alt=''/>

            <h1 className='text-[20px] text-center uppercase text-dark tracking-wide font-medium'>Making Local Moves Effortless</h1>

            <ul className='space-y-2 mb-20 mx-5'>
                <li className='space-x-2 flex'>
                    <p className='text-lg font-medium'>Home Search Assistance: <span className='text-lg font-normal'>Helping you find the perfect home in Surrey or elsewhere in the UK.</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='text-lg font-medium'>Moving Logistics: <span className='text-lg font-normal'>Coordinating with trusted moving companies to handle your belongings with care.</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='text-lg font-medium'>Neighborhood Orientation: <span className='text-lg font-normal'>Providing insights into schools, amenities, and local communities.</span></p>
                </li>

                <li className='space-x-2 flex mb-20'>
                    <p className='text-lg font-medium'>Custom Support: <span className='text-lg font-normal'>Services designed to meet your unique needs, from downsizing to relocating for a new job.</span></p>
                </li>
            </ul>
        </div>
    </div>
    <div className='max-w-7xl mx-auto pt-20 pb-20'>
        <div className='text-center space-y-8'>
            <h2 className='text-[20px] uppercase tracking-wide text-dark font-medium'>Services</h2>
            <h1 className='text-[20px] uppercase text-primary font-medium'>Tailored Solutions to Make Every Move Stress-Free</h1>
            <ul className='space-y-4 mb-20 flex flex-col items-center'>
                <li className='space-x- flex'>
                    <p className='text-lg font-medium'>Personalized Consultation & Planning: <span className='text-lg font-normal'>We start with an in-depth consultation to understand your specific domestic moving needs and develop a customized relocation plan.</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='text-lg font-medium'>Efficient Logistics Coordination: <span className='text-lg font-normal'>Our team handles all aspects of your move within the UK—from packing and loading to transportation and unloading—ensuring a smooth and timely transition.</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='text-lg font-medium'>Trusted Vendor Management: <span className='text-lg font-normal'>We coordinate with reliable local service providers, including professional movers, packing experts, and cleaning services, to make your move hassle-free.</span></p>
                </li>
            </ul>
        </div>
    </div>

    <div className='flex flex-row lg:flex-col bg-gray-100'>

        <div className='flex w-full mx-[100px] lg:mx-0 lg:mt-10 lg:mb-10 items-center justify-center flex-col space-y-5'>
            <h1 className='text-[20px] uppercase text-primary tracking-wide'>Additional Services</h1>
            <ul className='space-y-2 mb-20 mx-10'>
                <li className='space-x-3 flex'>
                    <p className='text-lg font-medium'>Home Search & Settling-In Support: <span className='text-lg font-normal'>If required, we assist with home search and provide guidance on setting up utilities and essential services in your new area.</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='text-lg font-medium'>Documentation & Insurance Assistance: <span className='text-lg font-normal'>We help ensure that all necessary paperwork is completed and your belongings are adequately protected with appropriate moving insurance.</span></p>
                </li>

                <li className='space-x-2 flex'>
                    <p className='text-lg font-medium'>Post-Move Support: <span className='text-lg font-normal'>Our service doesn’t end when the move is complete—we offer follow-up support to address any concerns and help you settle comfortably into your new home.</span></p>
                </li>
            </ul>
        </div>
        <div className='w-full h-[550px] lg:h-full'>
            <Image 
            src={domestic1}
            alt='hero8'
            className='w-full h-full'/>
        </div>   
    </div>
    </>
  )
}

export default Domestic