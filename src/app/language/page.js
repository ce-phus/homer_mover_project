import React from 'react'
import Image from 'next/image'
import { hero25 } from '@/assets'
import Link from 'next/link'
import { language, ResourceBlogs } from '../constants'

const NewLanguage = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center mx-3 w-full h-full overflow-y-auto pt-10'>
    <h1 className='my-10 text-primary text-3xl font-medium'>Best Language Learning Apps for Expats & Relocators</h1>
        <div className='min-h-[300px] xl:min-h-[200px] w-3/4 xl:w-full xl:mr-3'>
        <Image
        src={hero25}
        alt='hero18'
        className='w-full h-[700px] xl:h-[500px] rounded-2xl shadow-lg'/>
        </div>
        <div className='t flex flex-row lg:flex-col gap-[150px] lg:gap-0'>
            <div className='max-w-7xl mx-auto justify-start pl-[90px] lg:pl-2'>
                <h1 className='mt-10 text-primary text-2xl font-medium'>Best Language Learning Apps for Expats & Relocators</h1>
                <p className='font-normal text-lg text-dark mt-4'>Moving to a new country often comes with the challenge of learning a new language. Whether you're relocating for work, education, or personal reasons, mastering the local language can make daily life easier and help you integrate faster. Here are some top language learning apps to help you on your journey:</p>
                <p className='mt-2 font-medium text-xl'>Top Language Learning Apps:</p>

                <div className='pt-10 mx-5'>
                    {language.map((post) => (
                        <div key={post.id} className='space-x-5 space-y-4 mb-4'>
                            <div className='flex space-x-3'>
                                <p className='text-xl text-primary'>{post.id}.</p>
                                <h2 className='text-xl text-primary font-bold'>{post.title}</h2>
                            </div>
                            <div className='mx-3 space-y-2 mt-3'>
                              <p className='font-normal text-dark'>{post.text1}</p>
                              <p className='font-normal text-dark'>{post.text2}</p>
                              <p className='font-normal text-dark'>{post.text3}</p>
                            </div>
                              <p className='font-medium text-dark mx-1'>💡 Tip: {post.tip}</p>
                        </div>
                    ))}
                </div>

                <div className='pt-20 flex flex-col justify-center ite,s-center'>
                    <div className='flex flex-col justify-center'>
                    <h1 className='mt-5 text-primary text-2xl font-medium'>Additional Considerations</h1>
                    <div className='flex space-x-2 mb-2 mt-2'>
                        <h3 className='text-lg font-medium'>Visa Extensions & Renewals - </h3>
                        <p className='font-normal text-md'>Understand renewal procedures and deadlines.</p>
                    </div>
                    <div className='flex space-x-2 mb-2'>
                        <h3 className='text-lg font-medium'>Dependent & Spouse Visas  - </h3>
                        <p className='font-normal text-md'>If relocating with family, check their visa requirements.</p>
                    </div>
                    <div className='flex space-x-2 mb-2'>
                        <h3 className='text-lg font-medium'>Pathway to Permanent Residency  - </h3>
                        <p className='font-normal text-md'>If planning a long-term stay, research eligibility for residency or citizenship.</p>
                    </div>
                    </div>
                    <h1 className='mt-10 text-primary text-2xl font-medium'>Final Thoughts</h1>
                    <p className='font-normal text-lg text-dark mt-4'>Every country has <span className='font-bold'>unique immigration laws and visa processing timelines.</span>Staying informed and organized will make the process much smoother. If you’re unsure about any step, consider consulting an <span className='font-bold'>immigration lawyer or relocation specialist </span>for expert advice.</p>
                   
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

export default NewLanguage