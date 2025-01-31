import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

const Footer1 = () => {
    return (
        <div className='font-montserrat bg-[var(--blue)] text-white py-10 border-b border-[#00E9EA]'>
            <div className="max-w-screen-xl mx-auto md:p-8 p-2 space-y-6">
                <h1 className='text-6xl font-semibold'>Legacy no longer</h1>
                <p className='text-lg font-inter'>Talk to us to find out how we can transform your organisation for the future</p>
                <button className='flex items-center gap-1 bg-[var(--orange)] duration-500 px-6 py-2 rounded-sm group font-semibold'>
                    <span className="transition-transform duration-500 group-hover:-translate-x-1">Contact Us</span>
                    <IoIosArrowForward className='transition-transform duration-500 group-hover:translate-x-1 text-xs' /></button>
            </div>
        </div>
    );
};

export default Footer1;