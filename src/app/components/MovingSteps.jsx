"use client";
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../../../variants'
import Image from 'next/image';
import { services } from '../constants';
import GetStarted from './GetStarted';

const StepsCard = ({index, title, icon, text}) => (
    <motion.div
    initial="hidden"
      animate="show"
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div
        options={{
            max: 45,
            scale: 1,
            speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-full text-center flex-col space-y-5'
        >
            <div className='flex justify-end'>
                <p className='text-white font-bold text-4xl bg-black bg-opacity-50 px-4 py-2 rounded-full'>{text}</p>
            </div>

            <Image
            src={icon}
            alt='steps'
            className='w-[150px] h-[150px] object-contain flex'/>
            <h3 className='text-white text-2xl font-bold mt-5'>{title}</h3>
        </div>
    </motion.div>
)
const MovingSteps = () => {
  return (
    <>
        <motion.div
        initial="hidden"
        animate="show"
        variants={textVariant(0.5)}
        className='mt-20'
        >
            <p className={styles.sectionSubText}>Simple Guides</p>
            <h2 className={styles.sectionHeadText}>Three simple steps to get you moving.</h2>
        </motion.div>
        <div className='mt-20 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mx-2'>
            {services.map((service, index) => (
                <StepsCard key={index} index={index} title={service.title} icon={service.icon} text={service.text}/>
            ))}
        </div>
        <div className='flex justify-center items-center mt-10'>
            <GetStarted/>
        </div>
    </>
  )
}

export default MovingSteps