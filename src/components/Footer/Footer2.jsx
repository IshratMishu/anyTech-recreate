import Image from 'next/image';
import React from 'react';

const Footer2 = () => {
    return (
        <div className='font-inter bg-[var(--mid-dark-blue)] border-b border-[var(--blue)] py-6'>
            <div className="max-w-screen-xl mx-auto md:p-8 p-2 flex justify-between items-center">
                <Image height={200} width={200} src={'/assets/logo.png'} alt='logo' className='h-8 w-52 object-cover'></Image>
                <div className='text-[#00E9EA] flex items-center'>
                    <p className='border-r border-[var(--blue)] px-6 py-4 font-semibold'>Our Solutions</p>
                    <ul className='flex items-center font-semibold'>
                        <li className='px-6 transition-colors duration-300 hover:text-[var(--blue)]  cursor-pointer'>AnyCaas</li>
                        <li className='px-6 transition-colors duration-300 hover:text-[var(--blue)] cursor-pointer'>AnyBaaS</li>
                        <li className='px-6 transition-colors duration-300 hover:text-[var(--blue)] cursor-pointer'>AnyPaaS</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer2;