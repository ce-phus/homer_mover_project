"use client";
import React from 'react'
import { hero7, globe, guildford, woking, farnham, esher, reigate, download } from '@/assets'
import { styles } from '../styles';
import { motion } from "framer-motion"
import Image from 'next/image'
import { fadeIn } from '../../../variants'
import { locations } from '../constants';
import Slider from 'react-slick';

const KeyAreas = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  
  return (
    <>
    <div className='flex flex-row lg:flex-col sm:flex-col pt-10'>
        <div className='w-1/2 lg:w-full sm:w-full'>
            <Image 
            src={hero7}
            alt='md1'
            className='w-full h-full'/>
        </div>   
        <div className='bg-gray-100 sm:w-full w-1/2 lg:w-full'>
            <div className='flex justify-center items-center flex-col mt-20 mb-20 sm:mt-20 space-y-10'>
            <motion.h1
                variants={fadeIn("down", "spring", 0.75)} 
                initial='hidden' animate='show' 
                className='text-xl font-normal text-primary tracking-wide mt-0 uppercase'>Key Areas</motion.h1>
                <motion.h1
                variants={fadeIn("down", "spring", 0.75)} 
                initial='hidden' animate='show' 
                className='text-lg font-normal text-primary tracking-wide mt-0 uppercase'>Relocating to Surrey, London, and Across England with Atlas Path</motion.h1>
                
                <Image
                src={download}
                className='w-[150px]'
                alt=''/>
                <motion.p variants={fadeIn("right", "spring", 0.75)} 
                initial='hidden' animate='show' className='text-normal text-dark tracking-wide mx-5'>At Atlas Path, we specialize in seamless relocations across Surrey, London, and the rest of England. Whether you’re moving for work, family, or a fresh start, we offer expert guidance and tailored support to ensure a stress-free transition.</motion.p>
            </div>
        </div>          
    </div>

    <div className="flex pt-10 pb-20 flex-col items-center justify-center space-y-10">
        <Image 
        src={globe}
        alt="globe"
        className="w-[100px] h-"/>
        <h1 className="text-primary text-center text-xl font-normal italic tracking-wide w-full">Relocating to Surrey with Atlas Path</h1>
        <h1 className="text-primary text-center text-xl font-normal italic tracking-wide w-full">Why Move to Surrey?</h1>
        <p className="text-center w-[800px] sm:w-full sm:mx-2 font-normal text-md text-dark">Surrey is one of England’s most sought-after locations, offering the perfect blend of scenic countryside, excellent transport links, and outstanding quality of life. Whether you're a professional seeking proximity to London, a family looking for top-rated schools, or someone who enjoys a balance of city access and peaceful surroundings, Surrey has something for everyone.</p>
    </div>

    <h1 className='text-2xl font-medium tracking-wide text-primary flex items-center justify-center pt-20'>Popular Areas in Surrey for Relocation</h1>
    <div className='pt-20'>
        <div className='grid grid-cols-2 lg:grid-cols-1 gap-5 bg-gray-100'>
          <div className='mt-10 space-y-7 mx-3 text-center pt-20'>
            <h1 className={styles.heroHeadText}>Guildford</h1>
            <p className={`${styles.paragraph}`}>Vibrant town with excellent schools, shopping, and transport links.</p>
          </div>

          <Image 
          src={guildford}
          className='w-full h-[600px] sm:h-full md:h-full'
          alt="hero7"/>
        </div>
    </div>
    <div className='grid grid-cols-2 lg:grid-cols-1 gap-5'>
        <Image 
          src={woking}
          className='w-full h-[600px] sm:h-full md:h-full'
          alt="hero7"/>
          <div className='mt-10 space-y-7 mx-3 text-center pt-20'>
            <h1 className={styles.heroHeadText}>Woking </h1>
            <p className={`${styles.paragraph}`}>A fast-developing commuter town with fantastic London connections.</p>
          </div>
    </div>

    <div className='bg-gray-100'>
        <div className='grid grid-cols-2 lg:grid-cols-1 gap-5'>
          <div className='mt-10 space-y-7 mx-3 text-center pt-20'>
            <h1 className={styles.heroHeadText}>Farnham </h1>
            <p className={`${styles.paragraph}`}>Historic market town with countryside charm.</p>
          </div>

          <Image 
          src={farnham}
          className='w-full h-[600px] sm:h-full md:h-full'
          alt="hero7"/>
        </div>
    </div>

    <div className=''>
        <div className='grid grid-cols-2 lg:grid-cols-1 gap-5'>
            <Image 
            src={esher}
            className='w-full h-[600px] sm:h-full md:h-full'
            alt="hero7"/>
          <div className='mt-10 space-y-7 mx-3 text-center pt-20'>
            <h1 className={styles.heroHeadText}>Esher & Cobham </h1>
            <p className={`${styles.paragraph}`}>Exclusive areas with a mix of luxury living and family appeal.</p>
          </div>
        </div>
    </div>

    <div className='bg-gray-100'>
        <div className='grid grid-cols-2 lg:grid-cols-1 gap-5'> 
          <div className='mt-10 space-y-7 mx-3 text-center pt-20'>
            <h1 className={styles.heroHeadText}>Reigate & Dorking </h1>
            <p className={`${styles.paragraph}`}>Picturesque locations offering both countryside and convenience.</p>
          </div>
          <Image 
            src={reigate}
            className='w-full h-[600px] sm:h-full md:h-full'
            alt="hero7"/>
        </div>
    </div>

    <div className='pt-20'>
        <h1 className='flex items-center justify-center text-2xl font-medium text-primary'>Relocating to London with Atlas Path</h1>

        <div className='max-w-[1600px] mx-auto mx-4 flex flex-row gap-[50px] lg:flex-col pt-20'>
            <div className='text-center pt-20'>
                <h1 className='text-xl font-bold tracking-wide text-dark mb-10'>Why Move to London?</h1>
                <p className='text-lg font-medium text-dark'>As one of the world’s most dynamic cities, London offers<span className='font-bold'>unmatched career opportunities, rich cultural experiences, and diverse neighborhoods </span>to suit every lifestyle. Whether you're relocating for work, study, or a fresh start, London provides an exciting and vibrant place to call home.</p>
            </div>
            <div className='flex flex-col items-center justify-center space-y-7'>
                <h1 className='text-xl font-bold tracking-wide text-dark'>Best Areas in London for Relocation</h1>
                <p className='text-lg font-medium text-dark'>London is made up of <span className='font-bold'>32 boroughs,</span>each offering a unique living experience. Some of the most popular areas include:</p>
                <ul className='space-y-2 mb-20 mx-5'>
                    <li className='space-x-2 flex'>
                        <p className='text-lg font-medium'>Central London (Zones 1 & 2): <span className='text-lg font-normal'>Ideal for professionals wanting to be close to work, nightlife, and cultural landmarks (Mayfair, Kensington, Westminster).</span></p>
                    </li>

                    <li className='space-x-2 flex'>
                        <p className='text-lg font-medium'>West London: <span className='text-lg font-normal'>A mix of luxury and suburban charm, great for families (Notting Hill, Chiswick, Richmond).</span></p>
                    </li>

                    <li className='space-x-2 flex'>
                        <p className='text-lg font-medium'>North London: <span className='text-lg font-normal'>Leafy neighborhoods with excellent schools and community feel (Hampstead, Islington, Highgate).</span></p>
                    </li>

                    <li className='space-x-2 flex mb-20'>
                        <p className='text-lg font-medium'>East London: <span className='text-lg font-normal'>A creative, trendy hub with modern developments and great connectivity (Shoreditch, Canary Wharf, Hackney).</span></p>
                    </li>

                    <li className='space-x-2 flex mb-20'>
                        <p className='text-lg font-medium'>South London: <span className='text-lg font-normal'>Family-friendly with good schools and parks (Clapham, Wimbledon, Dulwich)..</span></p>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <h1 className='flex items-center justify-center text-xl font-medium text-dark pt-20 mb-5'>What We Offer:</h1>
    <h1 className='flex items-center justify-center text-2xl font-medium text-primary mb-10'>Top Locations for Relocation Across England</h1>

    <div className="w-full max-w-[1600px] mx-auto overflow-hidden">
      <Slider {...sliderSettings}>
        {locations.map((location, index) => (
          <div key={index} className="p-4">
            <Image src={location.img} alt={location.title1} className="w-[500px] h-[300px] object-cover mb-4" />
            <h3 className="text-center text-xl font-medium text-primary mb-4">{location.title1}</h3>

            <h3 className="text-center font-normal">{location.title2}</h3>
          </div>
        ))}
      </Slider>
    </div>

    </>
  )
}

export default KeyAreas