import Image from 'next/image';
import React from 'react';


const Section6 = () => {

    return (
        <div className='md:grid lg:grid-cols-5 md:grid-cols-3 flex overflow-y-auto gap-14 mx-auto items-center md:mt-32 mt-20 mb-10'>
            {/* brands image */}
            <Image
                height={200}
                width={200}
                src={'/assets/chengde.png'}
                alt='brand'></Image>

            <Image
                height={200}
                width={200}
                src={'/assets/bankofchina.png'}
                alt='brand'></Image>

            <Image
                height={200}
                width={200}
                src={'/assets/shanghai.png'}
                alt='brand'></Image>

            <Image
                height={200}
                width={200}
                src={'/assets/cgb.png'}
                alt='brand'></Image>

            <Image
                height={200}
                width={200}
                src={'/assets/china.png'}
                alt='brand'></Image>

            <Image
                height={200}
                width={200}
                src={'/assets/onebank.png'}
                alt='brand'></Image>

            <Image
                height={200}
                width={200}
                src={'/assets/ping.png'}
                alt='brand'></Image>

            <Image
                height={200}
                width={200}
                src={'/assets/postal.png'}
                alt='brand'></Image>

            <Image
                height={200}
                width={200}
                src={'/assets/sea.png'}
                alt='brand'></Image>

            <Image
                height={200}
                width={200}
                src={'/assets/shandong.png'}
                alt='brand'></Image>

            <Image
                height={200}
                width={200}
                src={'/assets/vipfubon.png'}
                alt='brand'></Image>

            <Image
                height={200}
                width={200}
                src={'/assets/xiamen.png'}
                alt='brand'></Image>

            <Image
                height={200}
                width={200}
                src={'/assets/xw.webp'}
                alt='brand'></Image>

            <Image
                height={200}
                width={200}
                src={'/assets/spd bank.png'}
                alt='brand'></Image>

            <Image
                height={200}
                width={200}
                src={'/assets/cardcentre.png'}
                alt='brand'
                className='object-cover'></Image>
        </div>
    );
};

export default Section6;