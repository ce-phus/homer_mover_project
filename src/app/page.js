"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Head from "next/head";
import { herobg, herobg2, herobg3, section2  } from "@/assets";
import { FaPhoneVolume } from "react-icons/fa6";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import { FaArrowCircleRight } from "react-icons/fa";
import { MovingSteps, Moving, Detail, Admin, Packing, Logistics, Quiz } from "./components";

const HeroData = [
  {
    id: 1,
    img: herobg,
    title: "Simplified Global Relocation",
    title2: "Experience Hassle-Free Relocation with Atlas Path",
    subtitle: "All In One",
  },
  {
    id: 2,
    img: herobg2,
    title: "Effortless Worldwide Moving",
    title2: "Relocate with Ease Thanks to Atlas Path",
    subtitle: "All In One",
  },
  {
    id: 3,
    img: herobg3,
    title: "Easy Global Moving Solutions",
    title2: "Savor a Smooth Moving Experience with Atlas Path",
    subtitle: "All In One",
  },
];

export default function Home() {
 const [currentIndex, setCurrentIndex] = useState(0);
 const [isHoveed, setIsHoveed] = useState(false);
 const prevSlide =() => {
    setCurrentIndex(currentIndex === 0 ? HeroData.length - 1 : currentIndex - 1);
 }

 const nextSlide =() => {
    setCurrentIndex(currentIndex === HeroData.length - 1 ? 0 : currentIndex + 1);
 }

 useEffect(()=> {
  if (!isHoveed) {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex === HeroData.length - 1 ? 0 : currentIndex + 1);
    }, 8000);
    return () => clearInterval(interval);
  }
 }, [currentIndex, isHoveed]);

 const handleMouseOver = () => {
  setIsHoveed(true)
 }
 const handleMouseLeave = () => {
  setIsHoveed(false)
 }

 const handleRoute = () => {
  router.push('/quote');
};

 
  return (
    <>
    <Head>
      <title>Home</title>
      <meta name="description" content="Atlas Path" />
      <link rel="icon" href="/logo.svg" />
    </Head>
    <div className="relative w-full mt-20">
      <div className="relative h-screen sm:h-[600px] w-full overflow-hidden"
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeave}>
        <Image src={HeroData[currentIndex].img} alt="hero" layout="fill" objectFit="cover" className="transition-all duration-500 ease-in-out cursor-pointer"/>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center mt-10">
          <div className="text-white text-center space-y-10 transition-all mt-20 pt-10 duration-500 ease-in-out mx-5">
            <h1 className="text-8xl sm:text-5xl font-bold">{HeroData[currentIndex].title}</h1>
            <h1 className="text-4xl font-medium">{HeroData[currentIndex].title2}</h1>
            
          </div>
          <p className="mt-20 mb-[100px] p-4 rounded-lg text-white black-gradient text-lg font-medium flex w-[200px] items-center justify-center">
              <span className="flex space-x-5"><FaPhoneVolume className="mr-2 mt-1"/> +2540112989429</span>
            </p>
            
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between">
          <button onClick={prevSlide} className="absolute left-0 bg-black bg-opacity-50 text-white p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={nextSlide} className="absolute right-0 bg-black bg-opacity-50 text-white p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <motion.div
      variants={fadeIn("down", "spring", 0.75)}
      initial="hidden"
      animate="show"
      className="mt-20 flex items-center justify-center w-full text-white relative">
        
        <form
        options={{
          max:45,
          scale:1,
          speed:0.5,
        }}
        className="w-1/ md:w-3/4 md:flex md:flex-col  flex gap-5 z-10">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-xl text-center font-medium">Moving From</label>
            <input type="text" name="name" id="name" className="p-5 mt-2 rounded-lg font-medium radial-gradient h-full place-holder-gray-700"
            placeholder="Moving From ...."/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-xl text-center font-medium">Moving To</label>
            <input type="email" name="email" id="email" className="p-5 mt-2 rounded-lg font-medium radial-gradient place-holder-gray-700"
            placeholder="Moving To ...."/>
          </div>
          
          <motion.button
            onClick={handleRoute}
            className='p-5 h-1/2 mt-9 w-[300px] rounded-xl relative radial-gradient flex text-center'
            initial={{ "--x": "100%", scale: 1 }}
            animate={{ "--x": "-100%" }}
            whileTap={{ scale: 0.97 }}
            transition={{
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 1,
                type: "spring",
                stiffness: 20,
                damping: 15,
                mass: 2,
                scale: {
                    type: "spring",
                    stiffness: 10,
                    damping: 5,
                    mass: 0.1,
                },
            }}
        >
            <span className='text-neutral-100 font-medium tracking-wide  w-[200px] text-center block relative linear-mask flex'>Get Quote <FaArrowCircleRight className="ml-3"/></span>
            <span className='block absolute inset-0 rounded-xl p-px linear-overlay'/>
        </motion.button>
        </form>
      </motion.div>
      <div className="max-w-[1600px] mx-auto">
        <MovingSteps />
        <Moving />
        <Detail />
        <Admin />
        <Packing />
        <Logistics />
      </div>
      <div className="bg-tertiary/50">
        <div className="flex items-center justify-center text-center">
            <Quiz />
        </div>
      </div>
      <div className="sm:hidden block absolute left-[1700px] top-[1000px] overflow-x-hidden">
        <Image
        src={section2}
        className="w-[550px] h-full object-contain overflow-x-hidden"
        alt="section"/>
      </div>
    </div>
    
  </>
  );
}
