import Image from 'next/image';
import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import Navbar from '../Navbar/Navbar';

const Banner = () => {
    return (
        <div className='lg:h-[max(620px,_calc(92vh-49px))] h-[1050px] relative w-full overflow-hidden' style={{
            clipPath: "polygon(0 0, 100% 0%, 100% 87%, 0% 100%)"
        }}>
            <Navbar></Navbar>
            <div className='lg:block hidden'>
                <div className='bg-gradient-to-t from-[#1F80F0] to-[#0d5ab1] h-full w-[82%] absolute z-10' style={{
                    clipPath: "polygon(0 0, 100% 0, 46% 100%, 0 100%)"
                }}>
                </div>

                <div
                    className="absolute inset-0 bg-cover bg-center z-20"
                    style={{ backgroundImage: "url('/assets/backgrounds/WaveLinesDesktop1.svg')" }}
                ></div>

                <div
                    className="absolute inset-0 bg-cover bg-center z-20"
                    style={{ backgroundImage: "url('/assets/backgrounds/WaveLinesDesktop2.svg')" }}
                ></div>

                <div
                    className="absolute inset-0 bg-cover bg-center z-20"
                    style={{ backgroundImage: "url('/assets/backgrounds/WaveLinesDesktop3.svg')" }}
                ></div>

                {/* 
            <div
                className="absolute inset-0 bg-cover bg-center z-20"
                style={{ backgroundImage: "url('/assets/backgrounds/WaveLinesDesktop4.svg')" }}
            ></div> */}

                <div className='max-w-screen-xl mx-auto px-16'>
                    <div className='absolute z-50 pt-[12%] space-y-7 text-white'>
                        <h1 className='text-[80px] font-semibold font-montserrat w-[700px] leading-20'>Embrace the future of finance</h1>
                        <h5 className='font-montserrat font-semibold w-[650px]'> Reimagine financial services with AnyTech’s open platform, distributed banking solution that powers transformation</h5>

                        <button className='text-lg font-bold bg-[var(--orange)] px-10 py-3 flex items-center gap-1 duration-500 rounded-sm group'>
                            <span className="transition-transform duration-500 group-hover:-translate-x-1">Reach Out to Us</span>
                            <IoIosArrowForward className='transition-transform duration-500 group-hover:translate-x-1 text-xs' /></button>
                    </div>
                </div>

                <div
                    className="absolute left-[12%] w-full h-full -z-10"
                    style={{
                        clipPath: "polygon(60% 0, 100% 0, 100% 87%, 5% 100%)",
                    }}>
                    <Image
                        width={1500}
                        height={1500}
                        src={'/assets/banner-image.jpg'}
                        alt='corporate'
                        className='h-full w-full object-cover'></Image>
                </div>
            </div>

            {/* mobile and tablet view */}
            <div className='block lg:hidden'>

                <div className='bg-gradient-to-t from-[#1F80F0] to-[#0d5ab1] h-[750px]' style={{
                    clipPath: "polygon(100% 0, 100% 73%, 0 85%, 0 0)"
                }}
                ></div>

                <div className="absolute inset-0 bg-cover bg-center z-10 h-[700px]"
                    style={{ backgroundImage: "url('/assets/backgrounds/WaveLinesDesktop1.svg')" }}></div>

                <div className="absolute inset-0 bg-cover bg-center z-10 h-[600px]"
                    style={{ backgroundImage: "url('/assets/backgrounds/WaveLinesDesktop2.svg')" }}
                ></div>

                <div className='absolute inset-0 md:pt-[30%] pt-[35%] z-50 md:px-20 px-10 space-y-4 text-white'>
                    <h1 className='text-[50px] font-semibold font-montserrat leading-12'>Embrace the future of finance</h1>
                    <h5 className='font-montserrat font-semibold'> Reimagine financial services with AnyTech’s open platform, distributed banking solution that powers transformation</h5>
                    <button className='text-lg font-bold bg-[var(--orange)] px-10 py-3 flex items-center gap-1 duration-500 rounded-sm group w-full justify-center'>
                        <span className="transition-transform duration-500 group-hover:-translate-x-1">Reach Out to Us</span>
                        <IoIosArrowForward className='transition-transform duration-500 group-hover:translate-x-1 text-xs' /></button>
                </div>

                <div className="relative bottom-72 h-[550px] overflow-hidden"
                    style={{ clipPath: "polygon(100% 14%, 100% 75%, 0 91%, 0 30%)" }}>

                    <Image
                        width={500}
                        height={500}
                        src={'/assets/banner-image.jpg'}
                        alt='corporate'
                        className='w-full h-full object-cover'
                    />
                </div>
            </div>

        </div>
    );
};

export default Banner;