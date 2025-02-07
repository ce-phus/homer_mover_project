import React from 'react'
import { country, NeighbourTopBlogs } from '../constants'
import Image from 'next/image'
import { hero20, feel } from '@/assets'
import Link from 'next/link'

const Country = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center mx-3 w-full h-full overflow-y-auto'>
    <h1 className='my-10 text-primary text-3xl font-medium'>Making a New Country Feel Like Home: Essential Tips for a Smooth Transition</h1>
        <div className='min-h-[500px] xl:min-h-[400px] w-3/4 xl:w-full xl:mr-3'>
        <Image
        src={feel}
        alt='hero20'
        className='w-full h-full rounded-2xl shadow-lg'/>
        </div>
        <div className='t flex flex-row lg:flex-col gap-[150px] lg:gap-0'>
            <div className='max-w-7xl mx-auto justify-start pl-[90px] lg:pl-2'>
                <h1 className='mt-10 text-primary text-2xl font-medium'>Making a New Country Feel Like Home: Essential Tips for a Smooth Transition</h1>
                <p className='font-normal text-lg text-dark mt-4'>Relocating to a new country is an exciting but often overwhelming experience. Adapting to a different culture, lifestyle, and environment takes time, but with the right approach, you can make your new country feel like home faster. At <span className='font-bold'>Atlas Path</span>, we specialise in making international moves seamless and stress-free. Here are our top tips for settling in and feeling at home in your new country.</p>

                <div className='pt-10 mx-5'>
                {country.map((post)=> (
                    <div key={post.id} className='flex flex-col'>
                        <div className='flex space-x-2'>
                            <p className='text-2xl text-primary font-medium'>{post.id}.</p>
                            <h1 className='text-xl text-primary font-medium mb-'>{post.title1}</h1>
                        </div>
                        
                       
                        {post.subtext && post.subtext.length > 0 && (
                            <div className='mx-3 mt-4 mb-5'>
                                {post.subtext.map((item)=> (
                                    <div key={item.id} className='space-y-3'>
                                        <p className='font-normal text-dark'>{item.title1}</p>
                                        <p className='font-normal text-dark'>{item.title2}</p>
                                        <p className='font-normal text-dark'>{item.title3}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
                </div>

                <div className='pt-20 flex flex-col justify-center ite,s-center'>
                    <h1 className='mt-10 text-primary text-2xl font-medium'>Let Atlas Path Help You Settle In</h1>
                    <p className='font-normal text-lg text-dark mt-4'>At <span className='font-bold'>Atlas Path</span> we’re dedicated to making international relocations smooth and stress-free. Whether you need help finding a home, understanding local regulations, or settling into a new lifestyle, we’re here to support you every step of the way.</p>
                    <p className='mt-4 font-medium text-lg'>Contact us today and let’s make your new country feel like home!</p>
                </div>
            </div>

            <div className='mt-10 lg:hidden pr-10'>
            <h1 className='text-xl font-bold text-dark mb-5 '>Top Blogs</h1>
                {NeighbourTopBlogs.map((data)=> (
                    <div key={data.id} className='mb-20'>
                        <Link href={data.link}>
                        <div className='w-[400px] h-[200px]'>
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

export default Country