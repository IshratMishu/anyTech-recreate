import Image from 'next/image';
import React from 'react';

const SwiperTexts = ({ heading, subHeading, p1, p2, image }) => {
    return (
        <div className='flex lg:flex-row flex-col lg:px-20 md:px-10 px-6 md:py-12 py-6 justify-between'>
            <div className='lg:w-1/2 w-full'>
                <h1 className='text-[var(--blue)] font-montserrat font-bold tracking-widest lg:pb-8 pb-4'>{heading}</h1>
                <h4 className='md:text-4xl text-2xl text-[#0B305B] font-semibold font-montserrat lg:pb-8 pb-4'>{subHeading}</h4>

                <Image
                height={400}
                width={400}
                src={image}
                alt='customer focused'
                className='h-44 w-full object-cover rounded-2xl mb-5 md:hidden block'></Image>

                <p className='text-[#164377] font-inter'>
                    <strong>{p1}</strong>
                </p>
                <p className='font-inter pt-4 lg:pb-0 pb-4'>
                    {p2}
                </p>
            </div>
            <Image
                height={400}
                width={400}
                src={image}
                alt='customer focused'
                className='h-[420px] lg:w-[45%] w-full object-cover rounded-2xl md:block hidden'></Image>
        </div>
    );
};

export default SwiperTexts;