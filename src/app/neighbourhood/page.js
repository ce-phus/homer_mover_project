import React from 'react'
import Image from 'next/image'
import { hero20, hero19 } from '@/assets'
import { neighborhood, NeighbourTopBlogs } from '../constants'
import Link from 'next/link'

const Neighbourhood = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center mx-3 w-full h-full overflow-y-auto pt-10'>
    <h1 className='my-10 text-primary text-3xl font-medium'>How to Choose the Right Neighbourhood for Your Family</h1>
        <div className='min-h-[500px] xl:min-h-[400px] w-3/4 xl:w-full xl:mr-3'>
        <Image
        src={hero20}
        alt='hero20'
        className='w-full h-full rounded-2xl shadow-lg'/>
        </div>
        <div className='t flex flex-row lg:flex-col gap-[150px] lg:gap-0'>
            <div className='max-w-7xl mx-auto justify-start pl-[90px] lg:pl-2'>
                <h1 className='mt-10 text-primary text-2xl font-medium'>How to Choose the Right Neighbourhood for Your Family</h1>
                <p className='font-normal text-lg text-dark mt-4'>Choosing the perfect neighbourhood for your family is one of the most important decisions when relocating. The right area can make all the difference in ensuring a smooth transition, a great quality of life, and access to key amenities. At <span className='font-bold'>Atlas Path</span>, we help families find the ideal place to call home in <span className='font-bold'>Surrey, London, and across England.</span> Here’s what you should consider when choosing a neighbourhood for your family.</p>

                <div className='pt-10 mx-5'>
                {neighborhood.map((post)=> (
                    <div key={post.id} className='flex flex-col'>
                        <div className='flex space-x-2'>
                            <p className='text-2xl text-primary font-medium'>{post.id}.</p>
                            <h1 className='text-xl text-primary font-medium mb-4'>{post.title1}</h1>
                        </div>
                        
                        <h2 className='text-dark text-lg font-medium mb-4'>{post.text}</h2>
                        <h2 className='text-dark text-lg font-medium'>{post.text1}</h2>
                        {post.subtext && post.subtext.length > 0 && (
                            <div className='mx-3 mt-4 mb-5'>
                                {post.subtext.map((item)=> (
                                    <div key={item.id} className='space-y-3'>
                                        <p className='text-lg font-normal text-dark'>{item.title1}</p>
                                        <p className='text-lg font-normal text-dark'>{item.title2}</p>
                                        <p className='text-lg font-normal text-dark'>{item.title3}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
                </div>

                <div className='pt-20 flex flex-col justify-center ite,s-center'>
                    <h1 className='mt-10 text-primary text-2xl font-medium'>Final Thoughts: Let Atlas Path Help You Find the Perfect Neighbourhood</h1>
                    <p className='font-normal text-lg text-dark mt-4'>Finding the right family-friendly neighbourhood takes time, research, and local expertise.<span className='font-bold'>Atlas Path</span> specialises in helping families find the best locations in <span className='font-bold'>Surrey, London, and beyond.</span></p>
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

export default Neighbourhood