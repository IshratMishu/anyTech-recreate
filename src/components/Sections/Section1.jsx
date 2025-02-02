import React from 'react';
import Image from 'next/image';

const Section1 = () => {
    return (
        <div className='flex justify-between'>
            <div className='md:w-1/2 w-full'>
                <h1 className='text-[var(--blue)] font-montserrat font-bold tracking-widest pb-8 text-center md:text-start'>POWERING THE FUTURE OF FINANCE</h1>
                <h4 className='lg:text-6xl md:text-3xl text-2xl text-[#0B305B] font-semibold font-montserrat md:pb-8 pb-16 lg:leading-16 leading-8 text-center md:text-start'>Uncovering new ways to delight customers</h4>


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

            <div className='relative md:block hidden'>
                <Image
                    width={400}
                    height={400}
                    src={'/assets/backgrounds/power.svg'}
                    alt='future of finance'
                    className='lg:w-[500px] w-80 h-[580px] object-cover relative -top-20 right-8'
                ></Image>
                <Image
                    width={400}
                    height={400}
                    src={'/assets/section1.avif'}
                    alt='future of finance'
                    className='lg:w-[400px] w-72 lg:h-[480px] h-96 object-cover absolute top-0 left-0'
                ></Image>
                <Image
                    width={200}
                    height={200}
                    src={'/assets/section1small.svg'}
                    alt='future of finance'
                    className='w-16 h-16 object-cover absolute top-16 -left-6'
                ></Image>
                <Image
                    width={200}
                    height={200}
                    src={'/assets/section1small1.svg'}
                    alt='future of finance'
                    className='w-20 h-20 object-cover absolute lg:top-44 top-32 left-10'
                ></Image>
                <Image
                    width={200}
                    height={200}
                    src={'/assets/section1small2.svg'}
                    alt='future of finance'
                    className='w-24 h-24 absolute top-8 lg:right-12 right-0'
                ></Image>
            </div>
        </div>
    );
};

export default Section1;