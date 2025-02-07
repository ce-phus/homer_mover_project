import React from 'react'
import Image from 'next/image'
import { essentials, NeighbourTopBlogs } from '../constants'
import { hero13, essentialtips } from '@/assets'
import Link from 'next/link'

const Essentials = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center mx-3 w-full h-full overflow-y-auto'>
    <h1 className='my-10 text-primary text-3xl font-medium'>Essential Tips for a Stress-Free International Move</h1>
        <div className='min-h-[200px] xl:min-h-[400px] w-3/4 xl:w-full xl:mr-3'>
        <Image
        src={essentialtips}
        alt='hero20'
        className='w-full h-[600px] rounded-2xl shadow-lg'/>
        </div>
        <div className='t flex flex-row lg:flex-col gap-[150px] lg:gap-0'>
            <div className='max-w-7xl mx-auto justify-start pl-[90px] lg:pl-2'>
                <h1 className='mt-10 text-primary text-2xl font-medium'>Essential Tips for a Stress-Free International Move</h1>
                <p className='font-normal text-lg text-dark mt-4'>Relocating to a new country is an exciting adventure, but it can also be overwhelming without the right preparation. From paperwork to packing, here are essential tips to ensure your international move is as seamless and stress-free as possible.</p>

                <div className='pt-10 mx-5'>
                    {essentials.map((post) => (
                        <div key={post.id} className='space-x-5 space-y-4 mb-4'>
                            <div className='flex space-x-3'>
                                <p className='text-xl text-primary'>{post.id}.</p>
                                <h2 className='text-xl text-primary font-bold'>{post.title}</h2>
                            </div>
                            <div className='mx-3 space-y-2 mt-3'>
                              <p className='font-normal text-dark'>- {post.text1}</p>
                              <p className='font-normal text-dark'>- {post.text2}</p>
                              <p className='font-normal text-dark'>- {post.text3}</p>
                            </div>
                              <p className='font-medium text-dark mx-1'>💡 Tip: {post.tip}</p>
                        </div>
                    ))}
                </div>

                <div className='pt-20 flex flex-col justify-center ite,s-center'>
                    <h1 className='mt-10 text-primary text-2xl font-medium'>Final Thoughts</h1>
                    <p className='font-normal text-lg text-dark mt-4'>An international move doesn’t have to be stressful with the right preparation and support. By following these steps, you’ll set yourself up for a smooth transition and exciting new beginning.</p>
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

export default Essentials