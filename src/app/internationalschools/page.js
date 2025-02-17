import React from 'react'
import Image from 'next/image'
import { international } from '@/assets'
import { internationalBlogs, NeighbourTopBlogs } from '../constants'
import Link from 'next/link'

const InternationalSchools = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center mx-3 w-full h-full overflow-y-auto'>
    <h1 className='my-10 text-primary text-3xl font-medium'>Exploring International Schools in Surrey: A Guide for Relocating Families</h1>
        <div className='min-h-[300px] xl:min-h-[400px] w-3/4 xl:w-full xl:mr-3'>
        <Image
        src={international}
        alt='hero20'
        className='w-full h-[800px] rounded-2xl shadow-lg'/>
        </div>
        <div className='t flex flex-row lg:flex-col gap-[150px] lg:gap-0'>
            <div className='max-w-7xl mx-auto justify-start pl-[90px] lg:pl-2'>
                <h1 className='mt-10 text-primary text-2xl font-medium'>Exploring International Schools in Surrey: A Guide for Relocating Families</h1>
                <p className='font-normal text-lg text-dark mt-4'>Relocating to a new country is an exciting adventure, but finding the right educational environment for your children can be challenging. Surrey, with its picturesque landscapes and vibrant communities, is not only a wonderful place to live but also an ideal hub for accessing top-rated international schools. In this post, we explore the unique benefits of international schools in Surrey and its surrounding areas, and how living in Surrey offers families a wealth of excellent educational opportunities.</p>
                <h1 className='mt-5 text-primary text-2xl font-medium'>What Are International Schools?</h1>
                <p className='font-normal text-lg text-dark mt-4'>International schools provide a globally recognized education by following curricula such as the International Baccalaureate (IB) or a blend of international and British educational frameworks. These schools cultivate global citizenship, critical thinking, and cultural awareness in an environment that celebrates diversity and excellence.</p>

                <div className='pt-10 mx-5'>
                {internationalBlogs.map((post)=> (
                    <div key={post.id} className='flex flex-col'>
                        <div className='flex space-x-2 mt-4'>
                            <p className='text-2xl text-primary font-medium'>{post.id}.</p>
                            <h1 className='text-xl text-primary font-medium'>{post.title}</h1>
                        </div>
                        <h2 className='text-dark text-lg font-normal mb-4'>{post.text}</h2>
                        {post.subtexts && post.subtexts.length > 0 && (
                            <div className='mx-3 mt-3'>
                                {post.subtexts.map((item)=> (
                                    <div key={item.id} className='mt-2'>
                                        <div className='flex space-x-2'>
                                            <p className='text-xl text-dark font-medium'>{item.id}.</p>
                                            <h1 className='text-lg text-dark font-medium mb-4'>{item.title}</h1>
                                        </div>
                                        <p className='text-md font-normal text-dark'>{item.text}</p>
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
                    <div key={data.id} className='mb-10 xl:mb-20'>
                        <Link href={data.link}>
                        <div className='w-[400px] xl:h-[300px] h-[250px] lg:h-[450px]'>
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

export default InternationalSchools