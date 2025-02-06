"use client";
import React from 'react'
import { guildford, woking, cobham, esher, reigate, download, reigate1, dorking, woking1 } from '@/assets'
import { styles } from '../styles';
import { motion } from "framer-motion"
import Image from 'next/image'
import { fadeIn } from '../../../variants'
import { surrey, guildfordtexts, wokingtext } from '../constants';

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
                <Image
                src={download}
                className='w-[150px]'
                alt=''/>
                <motion.h1
                variants={fadeIn("down", "spring", 0.75)} 
                initial='hidden' animate='show' 
                className='text-lg font-normal text-primary tracking-wide mt-0 uppercase'>Why Move to Surrey?</motion.h1>
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
      
    </div>

    <h1 className='text-2xl font-medium tracking-wide text-primary flex items-center justify-center pt-20'>Popular Areas in Surrey for Relocation</h1>
    <div className='pt-20'>
        <div className='grid grid-cols-2 lg:grid-cols-1 gap-5 bg-gray-100'>
          <div className='mt-10 mx-5'>
            <h1 className={`${styles.heroHeadText} mb-4`}>Guildford – The Heart of Surrey</h1>
            <p className={`${styles.paragraph} mb-4`}>Guildford is one of Surrey’s most desirable towns, combining historic charm, modern amenities, and excellent transport links. Whether you're relocating for work, family life, or a fresh start, Guildford offers a perfect balance of urban convenience and countryside tranquility.</p>
            <div className='flex flex-col mt-5 w-full'>
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
          <Image 
          src={guildford}
          className='w-full h-[650px] sm:h-full md:h-full'
          alt="hero7"/>
        </div>
    </div>
    <div className='pt-20'>
      <motion.h1 variants={fadeIn("down", "spring", 0.75)} 
        initial='hidden' animate='show'  className='flex justify-center text-xl font-bold text-primary tracking-wide mt-0'>Why Move to Guildford?</motion.h1>
        <div className='grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-20 xl:gap-[60px] mx-4 pt-10'>
            {guildfordtexts.map((post)=> (
                <div key={post.id} className='flex flex-col items-center space-y-3 duration-300 ease-in-out hover:scale-105'>
                    
                    <Image 
                    src={post.img}
                    alt={post.title1}
                    className='w-[600px] lg:h-[400px] xl:w-[400px] xl:h-[350px] lg:w-[400px] h-[450px] mb-5'/>
                    <h1 className='text-xl font-medium text-primary mb-5'>{post.title1}</h1>
                    <p className='text-dark font-medium'>{post.text}</p>
                    {post.subtext.map((item)=> (
                      <div key={item.id} className='mx-3'>
                        <p className='text-dark font-normal mb-2'>{item.text1}</p>
                      </div>
                    ))}
                </div>
            ))}
        </div>
    </div>
    <div className='grid grid-cols-2 lg:grid-cols-1 gap-5 mt-20 bg-gray-100'>
      <div>
        <Image 
          src={woking}
          className='w-full h-full sm:h-full md:h-full'
          alt="hero7"/>
      </div>
      <div className='mx-3 mt-5'>
        <h1 className={`${styles.heroHeadText} mb-3`}>Woking</h1>
        <div className='flex flex-col pt-10 justify-center flex-col'>
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
      </div>
    </div>

    <div className='pt-20'>
      <motion.h1 variants={fadeIn("down", "spring", 0.75)} 
        initial='hidden' animate='show'  className='flex justify-center text-xl font-bold text-primary tracking-wide mt-0'>Why Move to Woking?</motion.h1>
        <div className='grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-20 xl:gap-[60px] mx-4 pt-10'>
            {wokingtext.map((post)=> (
                <div key={post.id} className='flex flex-col space-y-3 duration-300 ease-in-out hover:scale-105'>
                    
                    <Image 
                    src={post.img}
                    alt={post.title1}
                    className='w-[600px] lg:h-[400px] xl:w-[400px] xl:h-[350px] lg:w-[400px] h-[450px] mb-5'/>
                    <h1 className='text-xl font-medium text-primary mb-5'>{post.title1}</h1>
                    <p className='text-dark font-medium'>{post.text}</p>
                    {post.subtext.map((item)=> (
                      <div key={item.id} className='mx-3'>
                        <div className='space-x-2'>
                          <p className='text-dark font-medium mb-2'>{item.text1}</p>
                          <p className='text-dark font-normal mb-2'>{item.subtexts1}</p>
                        </div>
                        <div className='space-x-2'>
                          <p className='text-dark font-medium mb-2'>{item.text2}</p>
                          <p className='text-dark font-normal mb-2'>{item.subtexts2}</p>
                        </div>
                        <div className='space-x-2'>
                          <p className='text-dark font-medium mb-2'>{item.text3}</p>
                          <p className='text-dark font-normal mb-2'>{item.subtexts3}</p>
                        </div>
                        <div className='space-x-2'>
                          <p className='text-dark font-medium mb-2'>{item.text4}</p>
                          <p className='text-dark font-normal mb-2'>{item.subtexts4}</p>
                        </div>
                      </div>
                    ))}
                </div>
            ))}
        </div>
    </div>

    <div className='pt-20'>
        <div className='grid grid-cols-2 lg:grid-cols-1 gap-5'>
          <div>
            <Image 
            src={esher}
            className='w-full h-[600px] sm:h-full md:h-full'
            alt="hero7"/>
          </div>
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
          </div>   
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-1 gap-5'>
          <div className='mx-5'>
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
          </div>
        </div>
    </div>

    <div className='bg-white'>
        <div className='grid grid-cols-2 lg:grid-cols-1 gap-5'>
          <div className='mt-20 mx-3'>
            <div className=' mx-3'>
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
          <div>
              <Image 
              src={dorking}
              className='w-full h-[600px] sm:h-full md:h-full'
              alt="hero7"/>
          </div>
          
        </div>
    </div>

    </>
  )
}

export default Surrey