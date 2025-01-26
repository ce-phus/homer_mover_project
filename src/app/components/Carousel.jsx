import React from 'react'
import { hero1, hero2, hero3, hero4, hero5, hero6 } from '@/assets';
import Slider from 'react-slick';

const HeroData = [
    {
      id: 1,
      img: hero1,
      
    },
    {
      id: 2,
      img: hero2,
      
    },
    {
      id: 3,
      img: hero3,
      
    },
    {
        id: 4,
        img: hero4,
        
    },
    {
        id: 5,
        img: hero5,
        
    },
    {
        id: 6,
        img: hero6,
        
    },
  ];

const Carousel = () => {
  return (
    <div className='flex flex-row sm:flex-col md:flex-col mx-3'>
        <div>

        </div>
        <div className='bg-grade h-full'>
            <div className='space-y-4'>

            </div>
        </div>
    </div>
  )
}

export default Carousel