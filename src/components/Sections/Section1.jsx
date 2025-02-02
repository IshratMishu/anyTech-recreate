'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from "motion/react"


const Section1 = () => {
    return (
        <div className='flex justify-between'>
            <div className='lg:w-1/2 md:w-auto w-full'>
                <h1 className='text-[var(--blue)] font-montserrat font-bold tracking-widest pb-8 text-center md:text-start'>POWERING THE FUTURE OF FINANCE</h1>
                <h4 className='lg:text-6xl md:text-3xl text-2xl text-[#0B305B] font-semibold font-montserrat md:pb-8 pb-16 lg:leading-16 leading-8 text-center md:text-start'>Uncovering new ways to delight customers</h4>

                {/* image section for mobile view design */}
                <div className='relative md:hidden block'>
                    <Image
                        width={400}
                        height={400}
                        src={'/assets/backgrounds/power.svg'}
                        alt='future of finance'
                        className='w-80 h-[400px] object-cover relative -top-10 right-0'
                    ></Image>
                    <Image
                        width={400}
                        height={400}
                        src={'/assets/section1.avif'}
                        alt='future of finance'
                        className='w-64 h-80 object-cover absolute top-0 left-6'
                    ></Image>
                    <Image
                        width={200}
                        height={200}
                        src={'/assets/section1small.svg'}
                        alt='future of finance'
                        className='w-12 h-12 object-cover absolute top-16 left-3'
                    ></Image>
                    <Image
                        width={200}
                        height={200}
                        src={'/assets/section1small1.svg'}
                        alt='future of finance'
                        className='w-16 h-16 object-cover absolute top-32 left-10'
                    ></Image>
                    <Image
                        width={200}
                        height={200}
                        src={'/assets/section1small2.svg'}
                        alt='future of finance'
                        className='w-20 h-20 absolute top-8 right-0'
                    ></Image>
                </div>

                <p className='text-[#164377] font-inter md:px-0 px-4'>
                    <strong>AnyTech is revolutionising financial technology by introducing innovative and real-time transaction account processing capabilities, specifically designed for retail financial services.</strong>
                </p>
                <p className='font-inter pt-4 md:px-0 px-4'>
                    Our modern approach surpasses traditional banking and card processing systems, empowering you with the most advanced technology for lasting success.
                </p>
            </div>

            {/* image section for large device view design */}
            <div className='relative md:block hidden'>
                <motion.div
                    className="lg:w-[500px] md:w-96 h-[580px] object-cover relative -top-20 right-8"
                    animate={{
                        y: [-10, 10],
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "mirror",
                        type: "spring",
                        stiffness: 20,
                        damping: 30,
                    }}
                >
                    <Image
                        width={400}
                        height={400}
                        src={'/assets/backgrounds/power.svg'}
                        alt='future of finance'
                        className='w-[500px] h-[580px]'
                    ></Image>
                </motion.div>

                <Image
                    width={400}
                    height={400}
                    src={'/assets/section1.avif'}
                    alt='future of finance'
                    className='lg:w-[400px] w-80 h-[480px] object-cover absolute top-0 left-0'
                ></Image>

                <motion.div
                    className="w-16 h-16 object-cover absolute top-16 -left-6"
                    animate={{
                        y: [-5, 5],
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "mirror",
                        type: "spring",
                        stiffness: 20,
                        damping: 30,
                    }}
                >
                    <Image
                        width={200}
                        height={200}
                        src={'/assets/section1small.svg'}
                        alt='future of finance'
                        className='w-16 h-16'
                    ></Image>
                </motion.div>

                <motion.div
                    className="w-20 h-20 object-cover absolute top-44 left-10"
                    animate={{
                        y: [-6, 6],
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "mirror",
                        type: "spring",
                        stiffness: 20,
                        damping: 30,
                    }}
                >
                    <Image
                        width={200}
                        height={200}
                        src={'/assets/section1small1.svg'}
                        alt='future of finance'
                        className='w-20 h-20'
                    ></Image>
                </motion.div>

                <motion.div
                    className="w-24 h-24 absolute top-8 right-12"
                    animate={{
                        y: [-8, 8],
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "mirror",
                        type: "spring",
                        stiffness: 20,
                        damping: 30,
                    }}
                >
                    <Image
                        width={200}
                        height={200}
                        src={'/assets/section1small2.svg'}
                        alt='future of finance'
                        className='w-24 h-24'
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Section1;