import Image from 'next/image';
import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";


const Footer2 = () => {
    return (
        <div className='font-inter bg-[var(--mid-dark-blue)] border-b border-[var(--blue)] py-6'>
            <div className="max-w-screen-xl mx-auto md:p-8 p-4 flex justify-between items-center">
                <Image height={200} width={200} src={'/assets/logo.png'} alt='logo' className='md:h-8 h-6 md:w-52 w-44 md:object-cover'></Image>
                <div className='lg:hidden flex md:text-3xl text-2xl md:gap-5 gap-2 text-[var(--blue)]'>
                <FaLinkedin />
                <IoCall />
                <IoMdMail />
                </div>
                <div className='text-[#00E9EA] hidden lg:flex items-center'>
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