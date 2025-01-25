import React from 'react'
import { nationalmoving } from '../constants'
import { fadeIn, textVariant } from '../../../variants'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import Image from 'next/image'
import Link from 'next/link'

const MovingCard = ({ index, title, icon, img, link }) => (
    <div
    className='flex flex-col relative'>
        <div className='overflow-hidden rounded-2xl mb-2'>
            <Image
            src={img}
            alt='moving'
            className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500'/>
        </div>
        <Link href={link}>
            <div className='space-y-2'>
                <h3 className='text-white font-bold text-2xl'>{title}</h3>
                <div className='flex justify-end'>
                    <Image 
                    src={icon}
                    alt='icon'
                    className='w-9 h-9'/>
                </div>
            </div>
        </Link>
        
    </div>
)

const Moving = () => {
  return (
    <>
      {/* <div className='absolute pink__gradient w-1/4 h-1/4 left-2 top-[1500px]'/> */}
      <div className='absolute white__gradient w-1/4 h-1/2 left-2 top-[1500px]'/>
      <div className='absolute blue__gradient w-1/4 h-1/4 left-2 top-[1500px]'/>

    <div
    className='mt-20 mx-3'>
        <h2 className={styles.sectionHeadText}>International Moving Made Simple</h2>
    </div>
    <div className='mt-20 grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mx-3'>
        {nationalmoving.map((moving, index)=> (
            <MovingCard key={index} icon={moving.icon} img={moving.img} link={moving.link} title={moving.title}/>
        ))}
    </div>
    </>
  )
}

export default Moving