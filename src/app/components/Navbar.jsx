"use client";
import React, { useEffect, useState } from 'react';
import { logo3, menu, close } from '@/assets';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhoneVolume } from "react-icons/fa6";
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { navLinks } from '../constants';

const Navbar = () => {
    const router = useRouter();
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState("");
    const [scrolled, setScrolled] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleRoute = () => {
        router.push('/quote');
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`w-full  border fixed z-30 top-0 border-transparent p-2 text-white transition-all duration-300 ${scrolled ? "bg-opacity-50 bg-[#301934]" : "bg-[#301934]"}`}
            >
                <div className='max-w-6xl mx-auto flex justify-between'>
                    <div className='flex space-x-3 mt-2'>
                        <Link href='/personal'>
                            <h2 className='font-medium text-lg tracking-wide text-white'>Personal</h2>
                        </Link>
                        <Link href='/company'>
                            <h2 className='font-medium text-lg tracking-wide text-white'>Company</h2>
                        </Link>
                        <Link href='/partners'>
                            <h2 className='font-medium text-lg tracking-wide text-white'>Partners</h2>
                        </Link>
                    </div>

                    <div className='flex space-x-5'>
                        <div className='flex space-x-2 mt-2 sm:hidden'>
                            <FaPhoneVolume className='text-white mt-1' />
                            <p className='text-white font-medium'>+234 703 123 4567</p>
                        </div>
                        <motion.button
                            onClick={handleRoute}
                            className='px-3 py-2 rounded-xl relative radial-gradient'
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
                            <span className='text-neutral-100 font-medium tracking-wide h-full w-full block relative linear-mask'>Get Quote</span>
                            <span className='block absolute inset-0 rounded-xl p-px linear-overlay'/>
                        </motion.button>
                    </div>
                </div>
            </nav>
        <nav className={`w-full text-white fixed z-20 top-[49px] ${scrolled ? "bg-opacity-20 bg-black" : "bg-primary "}`}>
                <div className='flex max-w-7xl mx-auto justify-between'>
                    <Link href={'/'} onClick={() => { setActive(""); window.scrollTo(0, 0) }} className=''>
                        <Image src={logo3} alt='logo' className='w-[120px] h-[120px] contain mt-2'/>
                    </Link>
                    
                    <ul className='flex space-x-10 mt-[50px] sm:mt-3 sm:hidden'>
                        {navLinks.map((link, index) => (
                            <div key={index} className="relative"
                                 onMouseEnter={() => setHoveredIndex(index)}
                                 onMouseLeave={() => setHoveredIndex(null)}> 
                                <Link href={link.href}>
                                    <p className={`font-bold text-xl tracking-wide ${active === link.title ? "text-primaryDark" : "text-white"} hover:text-accent duration-300 ease-in-out hover:scale-105`}
                                        onClick={() => { setActive(link.title); window.scrollTo(0, 0); }}>
                                        {link.title}
                                    </p>
                                </Link>
                                {link.dropdownItems && link.dropdownItems.length > 0 && (
                                    <div className={`absolute left-0 mt-2 black-gradient w-[300px] text-black rounded-xl shadow-lg transition-opacity duration-200 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                        {link.dropdownItems.map(item => (
                                            <Link href={item.href} key={item.id}>
                                                <p className="px-4 py-2 hover:text-gray-300 text-white font-medium text-lg duration-300 ease-in-out hover:scale-105">{item.title}</p>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </ul>

                    <div className='hidden md:block flex flex-1 absolute right-2 mt-2 items-center mx-3'>
                        <Image 
                            src={toggle ? close : menu}
                            alt='menu'
                            className='w-[28px] h-[28px] object-contain'
                            onClick={() => setToggle(!toggle)}/>
                            <AnimatePresence>
                              <motion.div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-[120px] right-0 mx-4 min-w-[400px] box z-10 rounded-xl`}
                              exit={{ opacity: 0, scale: 1.1 }}
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}>
                                <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                                  {navLinks.map((link, index) => (
                                    <div key={index} className="relative"
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}> 
                                        <Link href={link.href}>
                                            <p className={`font-medium text-lg tracking-wide ${active === link.title ? "text-accent" : "text-white"} hover:text-accent duration-300 ease-in-out hover:scale-105`}
                                                onClick={() => { setActive(link.title); window.scrollTo(0, 0); }}>
                                                {link.title}
                                            </p>
                                        </Link>
                                        {link.dropdownItems && link.dropdownItems.length > 0 && (
                                            <div className={`absolute left-0 mt-2 black-gradient w-[300px] text-black rounded-xl shadow-lg transition-opacity duration-200 z-20 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                                {link.dropdownItems.map(item => (
                                                    <Link href={item.href} key={item.id}>
                                                        <p className="px-4 py-2 hover:text-gray-300 text-white font-medium text-lg">{item.title}</p>
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                  ))}
                                  </ul>
                              </motion.div>
                            </AnimatePresence>
                    </div>
                </div>
            </nav>
        </>
    );
};


export default Navbar;
