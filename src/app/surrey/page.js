"use client";
import React from 'react'
import { guildford, woking, farnham, esher, reigate, download, reigate1 } from '@/assets'
import { styles } from '../styles';
import { motion } from "framer-motion"
import Image from 'next/image'
import { fadeIn } from '../../../variants'
import { locations } from '../constants';
import Slider from 'react-slick';

const Surrey = () => {
  return (
    <>
    <div className='flex flex-row lg:flex-col sm:flex-col pt-10'>
        <div className='w-1/2 lg:w-full sm:w-full'>
            <Image 
            src={reigate}
            alt='md1'
            className='w-full h-full'/>
        </div>   
        <div className='bg-gray-100 sm:w-full w-1/2 lg:w-full'>
            <div className='flex justify-center items-center flex-col mt-20 mb-20 sm:mt-20 space-y-10'>
            <motion.h1
                variants={fadeIn("down", "spring", 0.75)} 
                initial='hidden' animate='show' 
                className='text-xl font-normal text-primary tracking-wide mt-0 uppercase'>The Perfect Blend of Countryside and Connectivity</motion.h1>
                <motion.h1
                variants={fadeIn("down", "spring", 0.75)} 
                initial='hidden' animate='show' 
                className='text-lg font-normal text-primary tracking-wide mt-0 uppercase'>Why Move to Surrey?</motion.h1>
                
                <Image
                src={download}
                className='w-[150px]'
                alt=''/>
                <motion.p variants={fadeIn("right", "spring", 0.75)} 
                initial='hidden' animate='show' className='text-normal text-dark tracking-wide mx-5'>Surrey is one of England’s most sought-after locations, offering the ideal mix of scenic countryside, excellent transport links, and an outstanding quality of life. With its picturesque villages, thriving market towns, and proximity to London, Surrey attracts professionals, families, and retirees alike.</motion.p>
            </div>
        </div>          
    </div>

    <div className='max-w-[1800px] mx-auto flex lg:flex-col gap-5 pt-20'>
      <div className='flex flex-col items-center mt-5 w-full'>
        <h1 className='text-xl text-primary'>Why Choose Surrey?</h1>
        <div className='mb-2 mt-5'>
          <p className='font-medium tracking-wide text-lg w-full'>A Place to Call Home: <span className='font-normal text-lg'>Surrey boasts a diverse property market, from charming period cottages to modern executive homes, catering to a range of lifestyles and budgets. Whether you're looking for a family-friendly suburb, a peaceful rural retreat, or a town with vibrant amenities, Surrey has the perfect home for you.</span></p>
        </div>
        <div className='mb-2'>
          <p className='font-medium tracking-wide text-lg w-full'>Excellent Transport Links: <span className='font-normal text-lg'>Many of Surrey’s towns, including Guildford, Woking, Epsom, and Reigate, offer fast and frequent train services to London, making it an ideal location for commuters. Major motorways such as the M25, M3, and A3 provide easy access to Heathrow and Gatwick airports, making travel seamless for both business and leisure</span></p>
        </div>
        <div className='mb-2'>
          <p className='font-medium tracking-wide text-lg w-full'>Top-Rated Schools  </p>
          <p className='font-normal text-lg'>Surrey is home to some of the UK’s best schools, including renowned private institutions such as Charterhouse, Epsom College, and Royal Grammar School, Guildford, as well as outstanding state schools. Families moving to Surrey benefit from exceptional education options at all levels.</p>
        </div>
        <div className='mb-2'>
          <p className='font-medium tracking-wide text-lg w-full'>Green Spaces & Outdoor Lifestyle: </p>
          <p className='font-normal text-lg'>From the rolling hills of the Surrey Hills Area of Outstanding Natural Beauty (AONB) to beautiful parks and nature reserves, Surrey is a paradise for outdoor enthusiasts. Whether you enjoy hiking, cycling, horse riding, or golf, there are countless opportunities to explore nature.</p>
        </div>
        <div className='mb-2'>
          <p className='font-medium tracking-wide text-lg w-full'>Vibrant Towns & Villages: </p>
          <p className='font-normal text-lg'>Surrey offers a mix of bustling towns with excellent shopping, dining, and cultural attractions, as well as charming villages with a close-knit community feel. Towns such as Guildford, Farnham, and Dorking offer a blend of modern amenities with historical charm</p>
        </div>
        <div className='mb-2'>
          <p className='font-medium tracking-wide text-lg w-full'>Dining, Leisure & Entertainment: </p>
          <p className='font-normal text-lg'>From Michelin-starred restaurants to cosy country pubs, Surrey has a thriving food scene. You’ll also find a wealth of theatres, arts venues, shopping centres, and sports facilities, ensuring there’s always something to do. </p>
        </div>
      </div>

      <div className='flex flex-col text-center pt-20 w-full'>
        <h1 className='text-xl text-primary tracking-wide'>Who is Surrey Ideal For?</h1>
        <div className='mb-2'>
          <p className='font-medium tracking-wide text-lg mt-5'>Commuters: </p>
          <p className='font-normal text-lg'>Live in a peaceful setting while staying connected to London. </p>
        </div>
        <div className='mb-2'>
          <p className='font-medium tracking-wide text-lg'>Families: </p>
          <p className='font-normal text-lg'>Access to top-rated schools and family-friendly communities. </p>
        </div>
        <div className='mb-2'>
          <p className='font-medium tracking-wide text-lg'>Retirees: </p>
          <p className='font-normal text-lg'>A relaxed lifestyle with great amenities and healthcare.</p>
        </div>
        <div className='mb-2'>
          <p className='font-medium tracking-wide text-lg'>Businesses & Expats: </p>
          <p className='font-normal text-lg'>Strong local economy and international connectivity.</p>
        </div>
      </div>
    </div>

    <h1 className='text-2xl font-medium tracking-wide text-primary flex items-center justify-center pt-20'>Popular Areas in Surrey for Relocation</h1>
    <div className='pt-20'>
        <div className='grid grid-cols-2 lg:grid-cols-1 gap-5 bg-gray-100'>
          <div className='mt-10 mx-5 pt-20'>
            <h1 className={`${styles.heroHeadText} mb-4`}>Guildford – The Heart of Surrey</h1>
            <p className={`${styles.paragraph} mb-4`}>Guildford is one of Surrey’s most desirable towns, combining historic charm, modern amenities, and excellent transport links. Whether you're relocating for work, family life, or a fresh start, Guildford offers a perfect balance of urban convenience and countryside tranquility.</p>
            <h2 className='text-xl font-bold mb-4'>Why Move to Guildford?</h2>
            <div className='mb-2'>
              <p className='font-medium tracking-wide text-lg'>Exceptional Housing Options: </p>
              <p className='font-normal text-lg'>From picturesque period homes in the town centre to modern family houses and luxury apartments, Guildford’s property market caters to diverse needs and lifestyles. Popular areas include Merrow, Burpham, Shalford, and Stoughton, each offering its unique appeal.</p>
            </div>
            <div className='mb-2'>
              <p className='font-medium tracking-wide text-lg'>Outstanding Connectivity: </p>
              <p className='font-normal text-lg'>With direct train services to London Waterloo in just 35 minutes, Guildford is a top choice for commuters. The A3 and M25 motorways provide easy access to Heathrow, Gatwick, and the South Coast.</p>
            </div>
            <div className='mb-2'>
              <p className='font-medium tracking-wide text-lg'>Renowned Schools & Education </p>
              <p className='font-normal text-lg'>Guildford is home to some of the UK’s best schools, including:</p>
              <ul className='space-y-3 mx-3 mt-2'>
                <li className='font-medium'>Guildford High School<span className='font-normal'>{'(Independent, Girls)'}</span></li>
                <li className='font-medium'>Royal Grammar School<span className='font-normal'>{'(Independent, Boys)'}</span></li>
                <li className='font-medium'>Tormead School<span className='font-normal'>{'(Independent, Girls)'}</span></li>
                <li className='font-medium'>George Abbot School<span className='font-normal'>{'(Outstanding-rated state secondary)'}</span></li>
              </ul>
            </div>
            <p className={`${styles.paragraph} mb-4`}>Additionally, the University of Surrey provides world-class higher education and research facilities, making Guildford a thriving hub for students and professionals.</p>
            <div className='mb-2'>
              <p className='font-medium tracking-wide text-lg'>Green Spaces & Outdoor Lifestyle: </p>
              <p className='font-normal text-lg'>Enjoy the stunning landscapes of the Surrey Hills AONB, ideal for walking, cycling, and outdoor pursuits. Popular spots include Pewley Down, St. Martha’s Hill, and Newlands Corner. The River Wey also offers scenic walks and waterside dining</p>
            </div>
            <div className='mb-2'>
              <p className='font-medium tracking-wide text-lg'>A Thriving Town Centre </p>
              <p className='font-normal text-lg'>Guildford boasts a vibrant high street with upscale shopping, independent boutiques, and premium brands. The town is home to the Yvonne Arnaud Theatre, G Live entertainment venue, and a diverse selection of restaurants, pubs, and cafés.</p>
            </div>
            <div className='mb-2'>
              <p className='font-medium tracking-wide text-lg'>Excellent Healthcare Facilities: </p>
              <p className='font-normal text-lg'>Royal Surrey County Hospital provides outstanding healthcare services, along with private medical centres and GP practices catering to residents' needs.</p>
            </div>
          </div>

          <Image 
          src={guildford}
          className='w-full  sm:h-full md:h-full'
          alt="hero7"/>
        </div>
    </div>
    <div className='grid grid-cols-2 lg:grid-cols-1 gap-5'>
        <Image 
          src={woking}
          className='w-full h-full sm:h-full md:h-full'
          alt="hero7"/>
          <div className='mx-3 mt-5'>
            <h1 className={`${styles.heroHeadText} mb-3`}>Woking</h1>
            <div className='mb-2'>
              <p className='font-medium tracking-wide text-lg'>Unrivalled Connectivity" </p>
              <p className='font-normal text-lg'>Woking is one of the best-connected towns in Surrey:</p>
            </div>
              <ul className='space-y-3 mx-3 mt-2'>
                <li className='font-medium'>London Waterloo in just 24 minutes by train.</li>
                <li className='font-medium'>Easy access to the M25, M3, and A3, making Heathrow and Gatwick airports highly accessible.</li>
                <li className='font-medium'>A major transport hub with frequent bus and rail services across Surrey.</li>
              </ul>
            <div className='mb-2'>
              <p className='font-medium tracking-wide text-lg mt-4'>Diverse Housing Market: </p>
              <p className='font-normal text-lg'>Whether you're looking for modern apartments, Victorian terraces, or spacious family homes, Woking offers a range of housing options in sought-after areas like</p>
              <ul className='space-y-3 mx-3 mt-2'>
                <li className='font-medium'>Hook Heath: <span className='font-normal'>{'Exclusive and leafy with stunning detached homes.'}</span></li>
                <li className='font-medium'>Pyrford: <span className='font-normal'>{'A peaceful village setting with excellent schools.'}</span></li>
                <li className='font-medium'>Horsell: <span className='font-normal'>{'A charming area with a mix of period and contemporary homes.'}</span></li>
                <li className='font-medium'>Goldsworth Park: <span className='font-normal'>{'Great for families, with green spaces and local amenities.'}</span></li>
              </ul>
            </div>

            <div className='mb-10'>
              <p className='font-medium tracking-wide text-lg mt-4'>Top-Rated Schools & Education: </p>
              <p className='font-normal text-lg'>Woking is home to some of Surrey’s best schools, including:</p>
              <ul className='space-y-3 mx-3 mt-2'>
                <li className='font-medium'>St. John the Baptist School (SJB) <span className='font-normal'>{'One of the top-performing secondary schools in Surrey, known for its excellent academic results and strong community ethos.'}</span></li>
                <li className='font-medium'>Halstead Preparatory School: <span className='font-normal'>{'(Independent, Girls)'}</span></li>
                <li className='font-medium'>St. Andrew’s School: <span className='font-normal'>{'(Independent, Co-Ed)'}</span></li>
                <li className='font-medium'>Hoe Bridge School: <span className='font-normal'>{'(Independent, Co-Ed)'}</span></li>
              </ul>
            </div>
            <div className='mb-10'>
              <p className='font-medium tracking-wide text-lg mt-4'>Green Spaces & Outdoor Living </p>
              <p className='font-normal text-lg'>Woking is surrounded by stunning countryside, parks, and nature reserves, making it perfect for outdoor enthusiasts. Popular spots include:</p>
              <ul className='space-y-3 mx-3 mt-2'>
                <li className='font-medium'>Horsell Common <span className='font-normal'>{'One of the world’s most renowned gardens, just a short drive away.'}</span></li>
                <li className='font-medium'>RHS Garden Wisley: <span className='font-normal'>{'One of the world’s most renowned gardens, just a short drive away.'}</span></li>
                <li className='font-medium'>Goldsworth Park Lake <span className='font-normal'>{'A great spot for jogging, cycling, and picnics.'}</span></li>
              </ul>
            </div>
            <p className='font-medium text-lg mb-5'>Excellent Healthcare Facilities:<span className='font-normal'>Woking has several GP practices and private clinics and is close to St. Peter’s Hospital and Royal Surrey County Hospital, ensuring high-quality healthcare services.</span></p>
          </div>
    </div>

    <div className='flex pt-10 text-center flex-col'>
      <h1 className='text-primary text-xl font-medium'>Who is Woking Ideal For?</h1>
      <div className='mb-2'>
          <p className='font-medium tracking-wide text-lg mt-5'>Commuters: </p>
          <p className='font-normal text-lg'>Super-fast trains to London and excellent road links. </p>
        </div>
        <div className='mb-2'>
          <p className='font-medium tracking-wide text-lg'>Families: </p>
          <p className='font-normal text-lg'>Top-tier schools, parks, and a safe environment. </p>
        </div>
        <div className='mb-2'>
          <p className='font-medium tracking-wide text-lg'>Retirees: </p>
          <p className='font-normal text-lg'>A growing business hub with modern amenities.</p>
        </div>
        <div className='mb-2'>
          <p className='font-medium tracking-wide text-lg'>Businesses & Expats: </p>
          <p className='font-normal text-lg'>A peaceful yet well-connected town with great healthcare.</p>
        </div>
    </div>

    <div className='pt-20'>
        <div className='grid grid-cols-2 lg:grid-cols-1 gap-5'>
          <div className='mt-10 space-y-7 mx-3 text-center pt-20'>
            <h1 className={styles.heroHeadText}>Esher & Cobham </h1>
            <p className={`${styles.paragraph}`}>Exclusive areas with a mix of luxury living and family appeal.</p>
          </div>       
          <Image 
            src={esher}
            className='w-full h-[600px] sm:h-full md:h-full'
            alt="hero7"/>
        </div>
    </div>

    <div className='bg-gray-100'>
        <div className='grid grid-cols-2 lg:grid-cols-1 gap-5'> 
        <Image 
            src={reigate1}
            className='w-full h-[600px] sm:h-full md:h-full'
            alt="hero7"/>
          <div className='mt-10 space-y-7 mx-3 text-center pt-20'>
            <h1 className={styles.heroHeadText}>Reigate & Dorking </h1>
            <p className={`${styles.paragraph}`}>Picturesque locations offering both countryside and convenience.</p>
          </div>
        </div>
    </div>

    </>
  )
}

export default Surrey