import React from 'react'
import { checklist, NeighbourTopBlogs } from '../constants'
import Image from 'next/image'
import { hero6 } from '@/assets'
import Link from 'next/link'

const Checklist = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center mx-3 w-full h-full overflow-y-auto'>
    <h1 className='my-10 text-primary text-3xl font-medium'>The Ultimate Relocation Checklist for Moving to the UK</h1>
        <div className='min-h-[500px] xl:min-h-[400px] w-3/4 xl:w-full xl:mr-3'>
        <Image
        src={hero6}
        alt='hero20'
        className='w-full h-full rounded-2xl shadow-lg'/>
        </div>
        <div className='t flex flex-row lg:flex-col gap-[150px] lg:gap-0'>
            <div className='max-w-7xl mx-auto justify-start pl-[90px] lg:pl-2'>
                <h1 className='mt-10 text-primary text-2xl font-medium'>The Ultimate Relocation Checklist for Moving to the UK</h1>
                <p className='font-normal text-lg text-dark mt-4'>Moving to the UK is an exciting adventure, but it requires careful planning and organisation. At <span className='font-bold'>Atlas Path</span>, we’ve created this step-by-step relocation checklist to help you navigate the process smoothly.</p>

                <div className='pt-10 mx-5'>
                    {checklist.map((post) => (
                        <div key={post.id} className='space-x-5 space-y-4'>
                            <div className='flex space-x-3'>
                                <p className='text-xl text-primary'>{post.id}.</p>
                                <h2 className='text-xl text-primary font-bold'>{post.title}</h2>
                            </div>
                            <div className='space-y-3 mx-3'>
                            {post.subheader.map((data, index) => (
                                <div key={`${post.id}-${data.id}-${index}`} className='space-y-3'>
                                    <ul className='list-disc pl-5'>
                                        <li className='text-lg text-dark font-medium'>{data.title1}</li>
                                    </ul>
                                    
                                    <div className='mx-3'>
                                        <p className='text-md font-normal text-dark mb-3'>{data.title2}</p>
                                        <p className='text-md font-normal text-dark mb-3'>{data.title3}</p>
                                        <p className='text-md font-normal text-dark mb-3'>{data.title4}</p>
                                        <p className='text-md font-normal text-dark mb-5'>{data.title5}</p>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className='pt-20 flex flex-col justify-center ite,s-center'>
                    <h1 className='mt-10 text-primary text-2xl font-medium'>Let Atlas Path Make Your Move Stress-Free!</h1>
                    <p className='font-normal text-lg text-dark mt-4'>At <span className='font-bold'>Atlas Path</span> we specialise in corporate, domestic, and international relocations. Whether you need help with visa support, housing, or settling in, we’re here to guide you every step of the way.</p>
                </div>
            </div>

            <div className='mt-10 lg:hidden pr-10'>
            <h1 className='text-xl font-bold text-dark mb-5 '>Top Blogs</h1>
                {NeighbourTopBlogs.map((data)=> (
                    <div key={data.id} className='mb-[300px]'>
                        <Link href={data.link} className=''>
                        <div className='w-[450px] h-[350px]'>
                            <Image 
                            src={data.img}
                            alt='hero19'
                            className='w-full h-full rounded-2xl'/>
                        </div>
                        <h1 className='text-xl font-medium text-dark line-clamp-1 mt-3'>{data.text}</h1>
                        </Link>                     
                    </div>
                ))}
            </div>
        </div>
        
    </div>
    </>
  )
}

export default Checklist