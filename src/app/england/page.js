"use client";
import React from 'react'
import Image from 'next/image'
import { styles } from '../styles'
import { motion } from "framer-motion"
import { fadeIn } from '../../../variants';
import { manchester, brighton, bristol, birmingham, oxford, cotswolds, download, cambridge, checklistpic, lake } from '@/assets'

const England = () => {
  return (
    <>
    <div className='flex flex-row lg:flex-col sm:flex-col pt-10'>
        <div className='w-full xl:w-[1850px] h-[750px] lg:w-full xl:h-[950px] lg:h-full sm:w-full'>
            <Image 
            src={checklistpic}
            alt='md1'
            className='w-full h-full'/>
        </div>   
        <div className='bg-gray-100 sm:w-full w-full lg:w-full'>
            <div className='flex justify-center items-center flex-col mt-20 mb-10 sm:mt-20 space-y-5'>
            <motion.h1
                variants={fadeIn("down", "spring", 0.75)} 
                initial='hidden' animate='show' 
                className='text-[20px] uppercase font-normal text-primary tracking-wide mt-0 uppercase'>Relocating Across England with Atlas Path</motion.h1>
                <Image
                src={download}
                className='w-[150px]'
                alt=''/>
                <motion.p variants={fadeIn("right", "spring", 0.75)} 
                initial='hidden' animate='show' className='text-normal text-dark tracking-wide mx-5'>England’s regions beyond Surrey and London represent a vibrant tapestry of opportunities waiting to be explored. In the bustling metropolises of Manchester, Birmingham, Liverpool, and Bristol, dynamic business hubs and cultural centers offer thriving career prospects, innovative industries, and an energetic urban lifestyle. These cities pulse with creativity, modern infrastructure, and diverse communities that drive economic growth and professional advancement.</motion.p>
                <motion.p variants={fadeIn("right", "spring", 0.75)} 
                initial='hidden' animate='show' className='text-normal text-dark tracking-wide mx-5'>Conversely, England’s charming countryside retreats and historic market towns offer a peaceful, community-centered alternative. Picture quaint villages with centuries-old traditions, scenic landscapes, and a relaxed pace of life that emphasizes quality living. Whether it’s the rolling hills of the Cotswolds, the timeless allure of the Yorkshire Dales, or the picturesque coastal towns along the Channel, these areas provide a refreshing counterbalance to the urban experience.</motion.p>
                <motion.p variants={fadeIn("right", "spring", 0.75)} 
                initial='hidden' animate='show' className='text-normal text-dark tracking-wide mx-5'>At Atlas Path, we understand that relocating isn’t just about changing addresses—it’s about embracing a new way of life. Whether you’re moving for work, family, or a lifestyle change, our tailored relocation services are designed to ensure a seamless transition. We guide you through every step of the process—from navigating local property markets and legal requirements to connecting you with community resources—so that you can confidently embark on your new chapter in one of England’s diverse and inspiring regions</motion.p>
            </div>
        </div>          
    </div>z

    <div className="flex pt-10 pb-20 flex-col items-center justify-center space-y-10">
        
        <h1 className="text-primary text-center text-[20px] uppercase font-normal italic tracking-wide w-full">Why Choose Atlas Path for Your Move?</h1>
        <Image 
        src={download}
        alt="globe"
        className="w-[100px] h-"/>
        <p className="text-center w-[800px] sm:w-full sm:mx-2 font-normal text-md text-dark">We provide tailored relocation support, whether you’re moving to a fast-growing city like Manchester, a historic townlike Oxford, or a coastal retreat like Brighton. Our expertise spans the entire country, offering you in-depth knowledge and personalized assistance.</p>
    </div>

    <h1 className='flex items-center justify-center text-[20px] uppercase font-medium text-dark pt-20 mb-5'>What We Offer:</h1>
    <h1 className='flex items-center justify-center text-[20px] uppercase font-medium text-primary mb-10'>Top Locations for Relocation Across England</h1>

    <div className='pt-10'>
        <div className='grid grid-cols-2 lg:grid-cols-1 gap-5 bg-gray-100'>
          <div className='mt-10 mx-3 flex flex-col mx-5 pt-10'>
            <h1 className={styles.heroHeadText}>Manchester </h1>
            <p className={`font-medium text-xl mb-2 mt-3`}>A Thriving Hub of Business, Culture, and Connectivity.</p>
            <p className={`font-normal text-lg`}>Manchester is one of the UK’s fastest-growing cities, known for its strong economy, excellent transport links, and vibrant cultural scene. Whether you're relocating for work, study, or a fresh start, Manchester offers an exciting mix of urban energy, affordability, and opportunity.</p>
            <div className='mt-2'>
              <p className='text-lg font-medium'>Where to live in Manchester</p>
              <p className='font-medium mt-3 mb-2'>City Centre: <span className='font-normal'>Perfect for professionals and young couples, with high-rise apartments and a cosmopolitan feel.</span></p>
              <p className='font-medium mt-3 mb-2'>Didsbury & Chorlton: <span className='font-normal'>Leafy suburbs with independent cafés, parks, and family-friendly vibes.</span></p>
              <p className='font-medium mt-3 mb-2'>Salford Quays & MediaCityUK: <span className='font-normal'>A modern waterfront area, home to BBC, ITV, and tech companies.</span></p>
              <p className='font-medium mt-3 mb-2'>Altrincham & Wilmslow: <span className='font-normal'>Upscale areas with excellent schools, larger homes, and a strong community feel.</span></p>
              <p className='font-medium mt-3 mb-2'>Northern Quarter: <span className='font-normal'>A trendy district known for its creative scene, nightlife, and independent shops</span></p>
            </div>
          </div>

          <Image 
          src={manchester}
          className='w-full h-[600px] xl:h-[650px] lg:h-full sm:h-full md:h-full'
          alt="hero7"/>
        </div>
    </div>
    <div className='grid grid-cols-2 lg:grid-cols-1 gap-5'>
        <Image 
          src={birmingham}
          className='w-full h-[600px] xl:h-[650px] lg:h-full sm:h-full md:h-full lg:order-2'
          alt="hero7"/>
          <div className='mt-10 mx-3 flex flex-col mx-5 pt-10'>
            <h1 className={styles.heroHeadText}>Birmingham</h1>
            <p className={`font-medium text-xl mb-2 mt-3`}>The Heart of the UK</p>
            <p className={`font-normal text-lg`}>Birmingham is the UK’s second-largest city, offering a thriving business hub, excellent transport links, and a rich cultural scene. Known for its affordability compared to London, Birmingham attracts professionals, students, and families alike.</p>
            <div className='mt-2'>
              <p className='font-medium mt-3 mb-2'>Strong Economy: <span className='font-normal'>Home to major industries in finance, manufacturing, and tech, with companies like HSBC, Jaguar Land Rover, and PwC based here.</span></p>
              <p className='font-medium mt-3 mb-2'>Excellent Transport Links: <span className='font-normal'>Fast train connections to London (under 90 minutes), an extensive metro system, and Birmingham Airport for international travel.</span></p>
              <p className='font-medium mt-3 mb-2'>Education & Schools: <span className='font-normal'>Prestigious universities like University of Birmingham and top-rated primary and secondary schools.</span></p>
              <p className='font-medium mt-3 mb-2'>Cultural Scene: <span className='font-normal'>Iconic attractions like the Birmingham Symphony Hall, Bullring Shopping Centre, and Cadbury World.</span></p>
              <p className='font-medium mt-3 mb-2'>Diverse & Affordable Housing: <span className='font-normal'>From city-center apartments to family-friendly suburbs like Edgbaston and Harborne</span></p>
            </div>
          </div>
    </div>

    <div className='bg-gray-100'>
        <div className='grid grid-cols-2 lg:grid-cols-1 gap-5'>
          <div className='mt-10 mx-3 flex flex-col mx-5 pt-10'>
            <h1 className={styles.heroHeadText}>Oxford</h1>
            <p className={`font-medium text-xl mb-2 mt-3`}>The City of Dreaming Spires</p>
            <p className={`font-normal text-lg`}>Oxford is a historic and prestigious city, known for its world-class university, stunning architecture, and thriving economy. Whether you're relocating for work, education, or lifestyle, Oxford offers a perfect balance of tradition and modernity.</p>
            <div className='mt-2'>
              <p className='font-medium mt-3 mb-2'>Education & Research Hub: <span className='font-normal'>Home to the University of Oxford, one of the world’s most prestigious institutions.</span></p>
              <p className='font-medium mt-3 mb-2'>Booming Economy: <span className='font-normal'>Strong sectors in tech, publishing, healthcare, and research, with major employers like BMW Mini, Oxford University Press, and Oxford Science Park.</span></p>
              <p className='font-medium mt-3 mb-2'>Excellent Transport Links: <span className='font-normal'>Just one hour from London by train, easy access to the M40, and close to Heathrow.</span></p>
              <p className='font-medium mt-3 mb-2'>Cultural & Outdoor Lifestyle: <span className='font-normal'>Museums, historic colleges, punting on the River Thames, and green spaces like Port Meadow.</span></p>
              <p className='font-medium mt-3 mb-2'>Desirable Places to Live: <span className='font-normal'>Jericho, Summertown, and Headington offer a mix of city and suburban living with excellent schools.</span></p>
            </div>
          </div>

          <Image 
          src={oxford}
          className='w-full h-[600px] sm:h-full md:h-full'
          alt="hero7"/>
        </div>
    </div>

    <div className='bg-gray-100'>
        <div className='grid grid-cols-2 lg:grid-cols-1 gap-5'>
          <Image 
          src={cambridge}
          className='w-full h-[600px] xl:h-[650px] lg:h-full sm:h-full md:h-full lg:order-2'
          alt="hero7"/>
          <div className='mt-10 mx-3 flex flex-col mx-5 pt-10'>
            <h1 className={styles.heroHeadText}>Cambridge</h1>
            <p className={`font-medium text-xl mb-2 mt-3`}>Innovation Meets History</p>
            <p className={`font-normal text-lg`}>Cambridge is a world-leading city for education, technology, and research, combining historic charm with a modern innovation hub. The city is home to cutting-edge industries and a thriving international community.</p>
            <div className='mt-2'>
              <p className='font-medium mt-3 mb-2'>World-Class Education: <span className='font-normal'>The University of Cambridge attracts students, academics, and researchers from around the globe.</span></p>
              <p className='font-medium mt-3 mb-2'>Thriving Tech & Science Industry: <span className='font-normal'>Known as “Silicon Fen”, Cambridge is a major hub for AI, biotech, and software development, hosting companies like AstraZeneca and ARM Holdings</span></p>
              <p className='font-medium mt-3 mb-2'>Great Connectivity: <span className='font-normal'>50 minutes to London by train, close to Stansted Airport, and well-connected by road and cycling infrastructure.</span></p>
              <p className='font-medium mt-3 mb-2'>Beautiful & Vibrant Lifestyle: <span className='font-normal'>Historic colleges, punting on the River Cam, green spaces like Jesus Green, and a strong café culture.</span></p>
              <p className='font-medium mt-3 mb-2'>Best Places to Live: <span className='font-normal'>Newnham, Trumpington, and Chesterton are popular choices for professionals and families, offering excellent schools and a high quality of life.</span></p>
            </div>
          </div>
        </div>
    </div>



    <div className=''>
        <div className='grid grid-cols-2 lg:grid-cols-1 gap-5'>        
            <div className='mt-10 mx-3 flex flex-col mx-5 pt-10'>
              <h1 className={styles.heroHeadText}>Bristol</h1>
              <p className={`font-medium text-xl mb-2 mt-3`}>A Vibrant City of Innovation and Culture</p>
              <p className={`font-normal text-lg`}>Bristol is one of the UK’s most exciting cities, known for its creative industries, thriving economy, and waterfront charm. Offering a mix of history, innovation, and a relaxed lifestyle, it’s a top choice for professionals, families, and students alike.</p>
              <div className='mt-2'>
                <p className='font-medium mt-3 mb-2'>Strong Economy & Job Market: <span className='font-normal'>A hub for aerospace, tech, finance, and creative industries, with major employers like Airbus, Rolls-Royce, and BBC Bristol.</span></p>
                <p className='font-medium mt-3 mb-2'>Excellent Transport Links: <span className='font-normal'>Direct trains to London in under 1.5 hours, an international airport, and great road connections.</span></p>
                <p className='font-medium mt-3 mb-2'>Top Universities & Schools: <span className='font-normal'>Home to the University of Bristol and UWE, plus excellent primary and secondary schools</span></p>
                <p className='font-medium mt-3 mb-2'>Cultural & Social Scene: <span className='font-normal'>Street art, music festivals, and attractions like SS Great Britain and Clifton Suspension Bridge.</span></p>
                <p className='font-medium mt-3 mb-2'>Diverse Neighborhoods: <span className='font-normal'>Clifton, Redland, and Southville offer everything from period townhouses to modern apartments</span></p>
              </div>
          </div>
          <Image 
            src={bristol}
            className='w-full h-[600px] xl:h-[650px] sm:h-full md:h-full'
            alt="hero7"/>
        </div>
    </div>

    <div className='bg-gray-100'>
        <div className='grid grid-cols-2 lg:grid-cols-1 gap-5'>
          <Image 
            src={brighton}
            className='w-full h-[600px] sm:h-full md:h-full lg:order-2'
            alt="hero7"/>
          <div className='mt-10 mx-3 flex flex-col mx-5 pt-10'>
            <h1 className={styles.heroHeadText}>Brighton</h1>
            <p className={`font-medium text-xl mb-2 mt-3`}>The Seaside City with a Vibrant Lifestyle</p>
            <p className={`font-normal text-lg`}>Brighton is one of the UK’s most desirable coastal cities, known for its creative culture, strong economy, and relaxed seaside living. Whether you're moving for work, education, or a lifestyle change, Brighton offers a unique blend of city energy and coastal charm.</p>
            <div className='mt-2'>
              <p className='font-medium mt-3 mb-2'>Thriving Economy & Job Opportunities: <span className='font-normal'>A hub for digital media, tourism, and finance, with growing sectors in tech and education.</span></p>
              <p className='font-medium mt-3 mb-2'>Excellent Transport Links: <span className='font-normal'>Just 1 hour to London by train, easy access to Gatwick Airport, and well-connected by road.</span></p>
              <p className='font-medium mt-3 mb-2'>Top Universities & Schools: <span className='font-normal'>Home to University of Sussex and University of Brighton, plus great primary and secondary schools</span></p>
              <p className='font-medium mt-3 mb-2'>Lively Cultural Scene: <span className='font-normal'>Famous for the Brighton Festival, The Lanes shopping district, and the iconic Brighton Pier.</span></p>
              <p className='font-medium mt-3 mb-2'>Diverse Neighborhoods: <span className='font-normal'>Hove, Kemptown, and Seven Dials offer a mix of modern apartments, period homes, and seaside living.</span></p>
            </div>
          </div>
        </div>
    </div>

    <div className=''>
        <div className='grid grid-cols-2 lg:grid-cols-1 gap-5'>
        <div className='mt-10 mx-3 flex flex-col mx-5 pt-10'>
            <h1 className={styles.heroHeadText}>The Cotswolds</h1>
            <p className={`font-medium text-xl mb-2 mt-3`}>Timeless Charm & Idyllic Countryside Living</p>
            <p className={`font-normal text-lg`}>The Cotswolds is one of England’s most picturesque and desirable regions, offering a perfect blend of countryside beauty, historic charm, and modern convenience. Known for its golden-stone cottages, rolling green hills, and vibrant market towns, the Cotswolds is an ideal destination for families, professionals, and retirees looking for a high-quality rural lifestyle.</p>
            <div className='mt-2'>
              <p className='text-lg font-medium'>Why Move to the Cotswolds?</p>
              <p className='font-medium mt-3 mb-2'>Unmatched Natural Beauty: <span className='font-normal'>Home to some of the UK’s most beautiful villages.</span></p>
              <p className='font-medium mt-3 mb-2'>Charming Market Towns & Villages: <span className='font-normal'>Leafy suburbs with independent cafés, parks, and family-friendly vibes.</span></p>
              <p className='font-medium mt-3 mb-2'>Excellent Transport Links: <span className='font-normal'>Despite its rural charm, the Cotswolds offers great connectivity.</span></p>
              <p className='font-medium mt-3 mb-2'>Top-Rated Schools: <span className='font-normal'>The Cotswolds is home to excellent state and independent schools.</span></p>
              <p className='font-medium mt-3 mb-2'>Luxury & Lifestyle: <span className='font-normal'>The region is known for; Michelin-starred restaurants and traditional country pubs, Boutique shopping, farm shops, and artisan markets, Historic estates, cultural festivals, and equestrian events.</span></p>
              <p className='font-medium mt-3 mb-2'>A Slower, Peaceful Pace of Life: <span className='font-normal'>Perfect for those looking to escape city stress while still having access to modern amenities.</span></p>
            </div>
          </div>
          <Image 
            src={cotswolds}
            className='w-full h-[600px] xl:h-[790px] sm:h-full md:h-full'
            alt="hero7"/> 
        </div>
    </div>

    <div className='bg-gray-100'>
        <div className='grid grid-cols-2 lg:grid-cols-1 gap-5'>
          <Image 
            src={lake}
            className='w-full h-[600px] xl:h-[790px] sm:h-full md:h-full lg:order-2'
            alt="hero7"/>
          <div className='mt-10 mx-3 flex flex-col mx-5 pt-10'>
            <h1 className={styles.heroHeadText}>The Lake District</h1>
            <p className={`font-medium text-xl mb-2 mt-3`}>Breathtaking Scenery & Tranquil Living</p>
            <p className={`font-normal text-lg`}>The Lake District National Park is one of the UK’s most stunning and peaceful destinations, offering a slower pace of life, outdoor adventures, and a strong sense of community. Whether you’re looking for a rural retreat, a second home, or a permanent move, the Lake District provides natural beauty, historic charm, and excellent quality of life.</p>
            <div className='mt-2'>
              <p className='font-medium mt-3 mb-2'>Unparalleled Natural Beauty: <span className='font-normal'>Home to England’s largest lakes and highest peaks, perfect for hiking, sailing, and outdoor activities.</span></p>
              <p className='font-medium mt-3 mb-2'>Charming Towns & Villages: <span className='font-normal'>Live in Windermere, Ambleside, Keswick, or Grasmere, all offering a mix of traditional cottages, modern homes, and lakeside properties.</span></p>
              <p className='font-medium mt-3 mb-2'>Quality of Life: <span className='font-normal'>A relaxed, community-focused lifestyle, ideal for families, retirees, and remote workers.</span></p>
              <p className='font-medium mt-3 mb-2'>Strong Tourism & Hospitality Industry: <span className='font-normal'>A hub for boutique hotels, local businesses, and hospitality professionals.</span></p>
              <p className='font-medium mt-3 mb-2'>Historic & Cultural Heritage: <span className='font-normal'>The home of Beatrix Potter and William Wordsworth, with a thriving arts and literary scene</span></p>
              <p className='font-medium mt-3 mb-2'>Good Transport Links: <span className='font-normal'>Direct trains to Manchester, London, and Scotland, plus road access via the M6 motorway.</span></p>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default England