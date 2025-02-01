import React from 'react';
import SectionTitle from '../ReUsableStyle/SectionTitle';
import Image from 'next/image';

const Section2 = () => {
    return (
        <div className='mt-32'>
            <SectionTitle heading={'OUR PHILOSOPHY'}
                subHeading={'Human-centred innovation'}>
            </SectionTitle>

            <Image
                width={950}
                height={200}
                src={'/assets/philosofy.avif'}
                alt='philosophy'
                className='w-full h-[340px] rounded-3xl mt-10 mb-10'></Image>
        </div>
    );
};

export default Section2;