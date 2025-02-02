import React from 'react';
import SectionTitle from '../ReUsableStyle/SectionTitle';
import Image from 'next/image';

const Section2 = () => {
    return (
        <div className='lg:mt-32 md:mt-0 mt-20'>
            <SectionTitle heading={'OUR PHILOSOPHY'}
                subHeading={'Human-centred innovation'}>
            </SectionTitle>

            <Image
                width={950}
                height={200}
                src={'/assets/philosofy.avif'}
                alt='philosophy'
                className='w-full h-[340px] rounded-3xl mt-10 mb-10 md:block hidden'></Image>

<Image
                width={950}
                height={200}
                src={'/assets/mobileHuman.avif'}
                alt='philosophy'
                className='w-full h-[340px] rounded-3xl mt-10 mb-10 md:hidden block'></Image>
        </div>
    );
};

export default Section2;