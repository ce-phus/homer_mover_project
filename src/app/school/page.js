import React from 'react'
import Image from 'next/image'
import { school, ResourceBlogs } from '../constants'
import { hero24 } from '@/assets'
import Link from 'next/link'

const SchoolSearch = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center mx-3 w-full h-full overflow-y-auto pt-10'>
    <h1 className='my-10 text-primary text-3xl font-medium'>School Search Tool & Tips for Finding the Right School</h1>
        <div className='min-h-[300px] xl:min-h-[200px] w-3/4 xl:w-full xl:mr-3'>
        <Image
        src={hero24}
        alt='hero18'
        className='w-full h-[700px] xl:h-[500px] rounded-2xl shadow-lg'/>
        </div>
        <div className='t flex flex-row lg:flex-col gap-[150px] lg:gap-0'>
            <div className='max-w-7xl mx-auto justify-start pl-[90px] lg:pl-2'>
                <h1 className='mt-10 text-primary text-2xl font-medium'>School Search Tool & Tips for Finding the Right School</h1>
                <p className='font-normal text-lg text-dark mt-4'>Finding the right school for your child is a crucial part of the relocation process. Whether you're moving to a new city or an entirely different country, ensuring a smooth educational transition is key.</p>
                <p className='mt-2 font-medium text-lg'>Visa Requirements Checklist</p>

                <div className='pt-10 mx-5'>
                    {school.map((post) => (
                        <div key={post.id} className='space-x-5 space-y-4 mb-4'>
                            <div className='flex space-x-3'>
                                <p className='text-xl text-primary'>{post.id}.</p>
                                <h2 className='text-xl text-primary font-bold'>{post.title}</h2>
                            </div>
                            {post.subtexts.map((data)=> (
                                <div key={data.id} className='mx-3'>
                                    <div className='flex space-x-2 mt-3 mb-2'>
                                        <h2 className='text-lg font-medium'>{data.id}</h2>
                                        <h2 className='text-lg font-medium'>{data.title}</h2>
                                    </div>
                                    <div className='mx-2 space-y-2 mb-4'>
                                    <p className='font-normal mb-2 text-dark text-md'>{data.text1}</p>
                                    <p className='font-normal text-dark text-md'>{data.text2}</p>
                                    <p className='font-normal text-dark text-md'>{data.text3}</p>
                                    </div>
                                    <p className='font-medium text-lg'> {data.tip}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <div className='pt-20 flex flex-col justify-center ite,s-center'>
                    <h1 className='mt-10 text-primary text-2xl font-medium'>Need Help with School Placement?</h1>
                    <p className='font-normal text-lg text-dark mt-4'>At <span className='font-bold'>Atlas Path,</span> we specialize in helping families find the perfect school in <span className='font-bold'>Surrey, London, and across England. </span>Let us guide you through the process for a seamless transition.</p>
                   <p className='font-normal text-lg text-dark mt-4'>Contact us today for expert school search assistance! </p>
                </div>
            </div>

            <div className='mt-10 lg:hidden pr-10'>
            <h1 className='text-xl font-bold text-dark mb-5 '>Resources</h1>
                {ResourceBlogs.map((data)=> (
                    <div key={data.id} className='mb-20'>
                        <Link href={data.link}>
                        <div className='w-[400px] h-[200px]'>
                            <Image 
                            src={data.img}
                            alt='hero19'
                            className='w-full h-full rounded-2xl'/>
                        </div>
                        <h1 className='text-xl font-medium text-dark line-clamp-1 mt-3'>{data.title1}</h1>
                        </Link>                     
                    </div>
                ))}
            </div>
        </div>
        
    </div>
    </>
  )
}

export default SchoolSearch