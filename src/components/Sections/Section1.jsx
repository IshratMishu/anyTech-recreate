import React from 'react';
import Image from 'next/image';

const Section1 = () => {
    return (
        <div className='flex justify-between'>
            <div className='w-1/2'>
                <h1 className='text-[var(--blue)] font-montserrat font-bold tracking-widest pb-8'>POWERING THE FUTURE OF FINANCE</h1>
                <h4 className='lg:text-6xl text-3xl text-[#0B305B] font-semibold font-montserrat pb-8 lg:leading-16 leading-8'>Uncovering new ways to delight customers</h4>
                <p className='text-[#164377] font-inter'>
                    <strong>AnyTech is revolutionising financial technology by introducing innovative and real-time transaction account processing capabilities, specifically designed for retail financial services.</strong>
                </p>
                <p className='font-inter pt-4'>
                    Our modern approach surpasses traditional banking and card processing systems, empowering you with the most advanced technology for lasting success.
                </p>
            </div>
            <div className='relative'>
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