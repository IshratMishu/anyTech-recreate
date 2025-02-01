import React from 'react';
import Image from 'next/image';

const Section1 = () => {
    return (
        <div className='flex justify-between'>
            <div className='w-1/2'>
                <h1 className='text-[var(--blue)] font-montserrat font-bold tracking-widest pb-8'>POWERING THE FUTURE OF FINANCE</h1>
                <h4 className='text-6xl text-[#0B305B] font-semibold font-montserrat pb-8 leading-16'>Uncovering new ways to delight customers</h4>
                <p className='text-[#164377] font-inter'>
                    <strong>AnyTech is revolutionising financial technology by introducing innovative and real-time transaction account processing capabilities, specifically designed for retail financial services.</strong>
                </p>
                <p className='font-inter pt-4'>
                    Our modern approach surpasses traditional banking and card processing systems, empowering you with the most advanced technology for lasting success.
                </p>
            </div>
            <div>
                <Image
                    width={200}
                    height={200}
                    src={'/assets/section1.avif'}
                    alt='future of finance'
                    className='w-96 h-[460px] object-cover'
                ></Image>
            </div>
        </div>
    );
};

export default Section1;