import React from 'react'
import { nationalmoving } from '../constants'
import { fadeIn, textVariant } from '../../../variants'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import Image from 'next/image'
import Link from 'next/link'

const MovingCard = ({ index, title, icon, img, link }) => (
    <motion.div
    initial="hidden"
    animate="show"
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
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
        
    </motion.div>
)

const Moving = () => {
  return (
    <>
    <motion.div
    initial="hidden"
    animate="show"
    variants={textVariant(0.5)}
    className='mt-20'>
        <h2 className={styles.sectionHeadText}>International Moving Made Simple</h2>
    </motion.div>
    <div className='mt-20 grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
        {nationalmoving.map((moving, index)=> (
            <MovingCard key={index} icon={moving.icon} img={moving.img} link={moving.link} title={moving.title}/>
        ))}
    </div>
    </>
  )
}

export default Moving