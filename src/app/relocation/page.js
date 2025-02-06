import React from 'react'
import { relocationChecklist, NeighbourTopBlogs } from '../constants'
import Image from 'next/image'
import Link from 'next/link'
import { hero21 } from '@/assets'

const Relocation = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center mx-3 w-full h-full overflow-y-auto pt-10'>
    <h1 className='my-10 text-primary text-3xl font-medium'>The Ultimate Relocation Checklist – Corporate, Family & International Moves</h1>
        <div className='min-h-[500px] xl:min-h-[400px] w-3/4 xl:w-full xl:mr-3'>
        <Image
        src={hero21}
        alt='hero20'
        className='w-full h-full rounded-2xl shadow-lg'/>
        </div>
        <div className='t flex flex-row lg:flex-col gap-[150px] lg:gap-0'>
            <div className='max-w-7xl mx-auto justify-start pl-[90px] lg:pl-2'>
                <h1 className='mt-10 text-primary text-2xl font-medium'>The Ultimate Relocation Checklist – Corporate, Family & International Moves</h1>
                <p className='font-normal text-lg text-dark mt-4'>Relocating can be a complex process, whether you’re moving for work, with family, or internationally. This <span className='font-bold'>comprehensive checklist</span> will guide you through a smooth and stress-free transition!</p>

                <div className='pt-10 mx-5'>
                    {relocationChecklist.map((post) => (
                        <div key={post.id} className='space-x-5 space-y-4'>
                            <div className='flex space-x-3'>
                                <p className='text-xl text-primary'>{post.id}.</p>
                                <h2 className='text-xl text-primary font-bold'>{post.title}</h2>
                            </div>
                            <div className='space-y-3 mx-3'>
                            {post.subtexts.map((data, index) => (
                                <div key={`${post.id}-${data.id}-${index}`} className='space-y-3'>
                                    <ul className='list-disc pl-5'>
                                        <li className='text-lg text-dark font-medium'>{data.title}</li>
                                    </ul>
                                    
                                    <div className='mx-3'>
                                        <p className='text-md font-normal text-dark mb-3'>{data.text1}</p>
                                        <p className='text-md font-normal text-dark mb-3'>{data.text2}</p>
                                        <p className='text-md font-normal text-dark mb-3'>{data.text3}</p>
                                        <p className='text-md font-normal text-dark mb-5'>{data.text4}</p>
                                        <p className='text-md font-normal text-dark mb-5'>{data.text5}</p>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className='pt-20 flex flex-col justify-center ite,s-center'>
                    <h1 className='mt-10 text-primary text-2xl font-medium'>Bonus Tips for a Stress-Free Move</h1>
                    <p className='font-normal text-lg text-dark mt-4'>Give yourself time – Adjusting takes weeks or months. Be patient!</p>
                    <p className='font-normal text-lg text-dark mt-4'>Stay organized – Keep a digital folder of important documents.</p>
                    <p className='font-normal text-lg text-dark mt-4'>Take care of yourself – Moving can be exhausting, so set time aside to relax.</p>
                </div>
            </div>

            <div className='mt-10 lg:hidden pr-10'>
            <h1 className='text-xl font-bold text-dark mb-5 '>Top Blogs</h1>
                {NeighbourTopBlogs.map((data)=> (
                    <div key={data.id} className='mb-[380px]'>
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

export default Relocation