import Image from 'next/image';
import React from 'react';

const Section3 = () => {
    return (
        <div className='grid lg:grid-cols-3 grid-cols-2 gap-6'>
            <div className='space-y-6 p-8 bg-[#F8FCFF] rounded-3xl max-w-[360px] max-h-72'>
                <Image
                    width={200}
                    height={200}
                    src={'/assets/solution.svg'}
                    alt='solutions'
                    className='w-12 h-12'
                ></Image>
                <h2 className='text-2xl font-montserrat text-[#0B305B] font-semibold'>Full-suite solutions</h2>
                <p className='font-inter text-[#164377]'>Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.</p>
            </div>
            <div className='space-y-6 p-8 bg-[#F8FCFF] rounded-3xl max-w-[360px] max-h-72'>
                <Image
                    width={200}
                    height={200}
                    src={'/assets/tech.avif'}
                    alt='solutions'
                    className='w-12 h-12'
                ></Image>
                <h2 className='text-2xl font-montserrat text-[#0B305B] font-semibold'>Simplify the complex</h2>
                <p className='font-inter text-[#164377]'>Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.</p>
            </div>
            <div className='space-y-6 p-8 bg-[#F8FCFF] rounded-3xl max-w-[360px] max-h-72'>
                <Image
                    width={200}
                    height={200}
                    src={'/assets/complex.svg'}
                    alt='solutions'
                    className='w-12 h-12'
                ></Image>
                <h2 className='text-2xl font-montserrat text-[#0B305B] font-semibold'>Cutting-edge tech</h2>
                <p className='font-inter text-[#164377]'>We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.</p>
            </div>
        </div>
    );
};

export default Section3;