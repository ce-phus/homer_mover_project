"use client";
import React from 'react'
import { guildford, woking, cobham, esher, reigate, download, reigate1, dorking, woking1 } from '@/assets'
import { styles } from '../styles';
import { motion } from "framer-motion"
import Image from 'next/image'
import { fadeIn } from '../../../variants'
import { surrey } from '../constants';

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

    <div className='pt-20'>
      <motion.h1 variants={fadeIn("down", "spring", 0.75)} 
        initial='hidden' animate='show'  className='flex justify-center text-xl font-normal text-primary tracking-wide mt-0 uppercase'>Why Choose Surrey?</motion.h1>
        <div className='grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-20 xl:gap-[60px] mx-4 pt-10'>
            {surrey.map((post)=> (
                <div key={post.id} className='flex flex-col items-center space-y-3 duration-300 ease-in-out hover:scale-105'>
                    
                    <Image 
                    src={post.img}
                    alt={post.title1}
                    className='w-[600px] lg:h-[400px] xl:w-[400px] xl:h-[350px] lg:w-[400px] h-[450px] mb-5'/>
                    <h1 className='text-xl font-medium text-primary mb-5'>{post.title1}</h1>
                    <p className='text-dark font-medium'>{post.text}</p>
            
                </div>
            ))}
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
      <div>
        <Image 
          src={woking}
          className='w-full h-full sm:h-full md:h-full'
          alt="hero7"/>
      </div>
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
          <div className='mx-5 pt-20'>
            <h1 className={`${styles.heroHeadText} mb-4`}>Esher & Cobham – Exclusive Living in Surrey</h1>
            <h1 className={`${styles.heroSubText} mb-4`}>Esher – A Prestigious Surrey Enclave</h1>
            <p className={`${styles.paragraph}`}>Esher is one of Surrey’s most desirable locations, offering a blend of luxury living, excellent amenities, and easy London access. Known for its exclusive homes, green spaces, and thriving high street, Esher is popular among professionals, families, and celebrities.Exclusive areas with a mix of luxury living and family appeal.</p>
            <ul className='space-y-3 mx-3 mt-2'>
                <li className='font-medium'>Prime Residential Areas: <span className='font-normal'>{'Stunning period homes, gated estates, and contemporary apartments.'}</span></li>
                <li className='font-medium'>Fast London Commute: <span className='font-normal'>{'Trains to Waterloo in under 30 minutes.'}</span></li>
                <li className='font-medium'>Outstanding Schools: <span className='font-normal'>{'Claremont Fan Court School, Esher Church School, and Esher Sixth Form College.'}</span></li>
                <li className='font-medium'>Vibrant High Street: <span className='font-normal'>{'Boutique shopping, cafés, and fine dining, including The Good Earth and Giggling Squid.'}</span></li>
                <li className='font-medium'>Leisure & Recreation: <span className='font-normal'>{'Sandown Park Racecourse, Claremont Landscape Garden, and Esher Commons for outdoor activities.'}</span></li>
              </ul>
              <p className={`${styles.paragraph} my-4`}>Esher is perfect for those seeking a mix of exclusivity, convenience, and countryside charm.</p>
              <div className='mx-5 pt-20'>
            <h1 className={`${styles.heroSubText} mb-4`}>Cobham – Luxury, Lifestyle, and Football Legacy</h1>
            <p className={`${styles.paragraph}`}>Cobham is one of Surrey’s most prestigious villages, known for its high-end properties, excellent schools, and strong community feel. Home to Chelsea FC’s training ground, it has become a hotspot for footballers, executives, and families looking for a premium lifestyle..</p>
            <ul className='space-y-3 mx-3 mt-2'>
                <li className='font-medium'>Chelsea Training Ground: <span className='font-normal'>{'Home to Chelsea FC’s world-class facilities, adding to Cobham’s prestige.'}</span></li>
                <li className='font-medium'>Luxury Properties: <span className='font-normal'>{'Expansive country estates, modern mansions, and stylish townhouses.'}</span></li>
                <li className='font-medium'>London in 35 Minutes: <span className='font-normal'>{'Regular trains to Waterloo.'}</span></li>
                <li className='font-medium'>Renowned Schools: <span className='font-normal'>{'Boutique shopping, cafés, and fine dining, including The Good Earth and Giggling Squid.'}</span></li>
                <li className='font-medium'>Fine Dining & Shopping: <span className='font-normal'>{'The Ivy Cobham Brasserie, independent boutiques, and artisan food markets.'}</span></li>
                <li className='font-medium'>Green Spaces: <span className='font-normal'>{'Painshill Park, Tilt Nature Reserve, and the River Mole for outdoor enthusiasts.'}</span></li>
              </ul>
              <p className={`${styles.paragraph} my-4`}>Cobham is the epitome of luxury village living, making it a top choice for those looking for privacy, elegance, and excellent connectivity.</p>
          </div> 
          </div>   
          <div>
          <Image 
            src={esher}
            className='w-full h-[600px] sm:h-full md:h-full'
            alt="hero7"/>
            <Image 
            src={cobham}
            className='w-full h-[600px] sm:h-full md:h-full'
            alt="hero7"/>
          </div>
          
        </div>
    </div>

    <div className='bg-gray-100'>
        <div className='grid grid-cols-2 lg:grid-cols-1 gap-5'>
        <div>
          <Image 
            src={reigate1}
            className='w-full h-[600px] sm:h-full md:h-full'
            alt="hero7"/>
            <Image 
            src={dorking}
            className='w-full h-[600px] sm:h-full md:h-full'
            alt="hero7"/>
        </div>
          
          <div className='mt-10 mx-3'>
            <h1 className={`${styles.heroHeadText} mb-4`}>Reigate & Dorking – Surrey’s Hidden Gems</h1>
            <h1 className={`${styles.heroSubText} mb-4`}>Reigate – A Historic Market Town with Modern Appeal</h1>
            <p className={`${styles.paragraph}`}>Reigate is a charming and affluent market town, known for its rich history, excellent schools, and vibrant high street. Nestled at the foot of the North Downs, it offers a perfect mix of countryside beauty and modern convenience.</p>
            <ul className='space-y-3 mx-3 mt-2'>
                <li className='font-medium'>Desirable Neighborhoods: <span className='font-normal'>{'Spacious period homes, modern apartments, and family-friendly suburbs.'}</span></li>
                <li className='font-medium'>Top Schools: <span className='font-normal'>{'Reigate Grammar School, Dunottar School, and Reigate College are among the best.'}</span></li>
                <li className='font-medium'>Great Transport Links: <span className='font-normal'>{' Direct trains to London Victoria in around 40 minutes.'}</span></li>
                <li className='font-medium'>Lively Town Centre: <span className='font-normal'>{'Boutique shops, cafes, and top-rated restaurants..'}</span></li>
                <li className='font-medium'>Outdoor Lifestyle: <span className='font-normal'>{'Priory Park, Reigate Hill, and the Surrey Hills for scenic walks and cycling.'}</span></li>
              </ul>
              <p className={`${styles.paragraph} my-4`}>Perfect for families, professionals, and those seeking a balance of rural charm and city access..</p>
              <div className='mt-20 pt-20 lg:mt-5 lg:pt-2 mx-3'>
                <h1 className={`${styles.heroSubText} mb-4`}>Dorking – Scenic Countryside & Timeless Character</h1>
                <p className={`${styles.paragraph}`}>Dorking is a picturesque town in the heart of the Surrey Hills, offering a tranquil yet well-connected lifestyle. It’s a haven for nature lovers, food enthusiasts, and commuters alike.</p>
                <ul className='space-y-3 mx-3 mt-2'>
                    <li className='font-medium'>Character Properties & Country Homes: <span className='font-normal'>{'From period cottages to grand estates.'}</span></li>
                    <li className='font-medium'>London in Under an Hour: <span className='font-normal'>{'Trains to Victoria & Waterloo in 50-55 minutes.'}</span></li>
                    <li className='font-medium'>Food & Drink Scene: <span className='font-normal'>{'Home to Denbies Wine Estate and Michelin-recommended restaurants.'}</span></li>
                    <li className='font-medium'>Outdoor Adventures: <span className='font-normal'>{'Box Hill, Ranmore Common, and the Mole Valley for hiking and cycling.'}</span></li>
                    <li className='font-medium'>Cultural Charm: <span className='font-normal'>{'Dorking Halls theatre, antique shops, and independent boutiques'}</span></li>
                  </ul>
                  <p className={`${styles.paragraph} my-4`}>Dorking is ideal for those who love a peaceful lifestyle but want easy access to London and Surrey’s wider attractions.</p>
              </div>
          </div>
          
        </div>
    </div>

    </>
  )
}

export default Surrey