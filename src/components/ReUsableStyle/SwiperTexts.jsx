import Image from 'next/image';
import React from 'react';

const SwiperTexts = ({ heading, subHeading, p1, p2, image }) => {
    return (
        <div className='flex px-20 py-12 justify-between'>
            <div className='w-1/2'>
                <h1 className='text-[var(--blue)] font-montserrat font-bold tracking-widest pb-8'>{heading}</h1>
                <h4 className='text-4xl text-[#0B305B] font-semibold font-montserrat pb-8'>{subHeading}</h4>
                <p className='text-[#164377] font-inter'>
                    <strong>{p1}</strong>
                </p>
                <p className='font-inter pt-4'>
                    {p2}
                </p>
            </div>
            <Image
                height={400}
                width={400}
                src={image}
                alt='customer focused'
                className='h-[420px] w-[45%] object-cover rounded-2xl'></Image>
        </div>
    );
};

export default SwiperTexts;