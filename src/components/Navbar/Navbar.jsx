'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    return (
        <div className='bg-[var(--blue)] font-inter'>
            <div className="max-w-screen-xl mx-auto md:p-8 p-2 flex justify-between items-center">

                <Image height={200} width={200} src={'/assets/logo1.png'} alt='logo' className='h-8 w-40 object-cover'></Image>

                <ul className='flex items-center'>
                    <li className="relative group cursor-pointer px-6 py-3">
                        <span className="flex items-center gap-2 text-white">Solutions <FaChevronDown className='text-xs' /></span>

                        {/* Dropdown Menu */}
                        <div className="absolute left-6 top-full hidden w-[240px] bg-white rounded-sm shadow-md group-hover:block">
                            <ul className="flex flex-col">
                                <li className="px-4 py-3 hover:text-[var(--blue)] border-b border-gray-200">AnyCaaS</li>
                                <li className="px-4 py-3 hover:text-[var(--blue)] border-b border-gray-200">AnyBaaS</li>
                                <li className="px-4 py-3 hover:text-[var(--blue)]">AnyPaaS</li>
                            </ul>
                        </div>
                    </li>

                    <li className="relative group cursor-pointer px-6 py-3 text-white">
                        Services
                        <span className="absolute bottom-0 left-0 w-0 border-b border-white transition-all duration-500 ease-in-out group-hover:w-full"></span>
                    </li>

                    <li className="relative group cursor-pointer px-6 py-3 text-white">
                        About Us
                        <span className="absolute bottom-0 left-0 w-0 border-b border-white transition-all duration-500 ease-in-out group-hover:w-full"></span>
                    </li>

                    <li onClick={() => setDropdown(!dropdown)} className="relative cursor-pointer px-6 py-3">
                        <span className="flex items-center gap-1 border border-white rounded-3xl px-4 py-2 text-white"> <MdLanguage /> EN <FaChevronDown className={`${dropdown ? '-rotate-180' : 'rotate-0'} duration-300 text-xs`} /></span>

                        {/* Dropdown Menu */}
                        {
                            dropdown && <div className="absolute left-6 top-full w-[240px] bg-white rounded-sm shadow-md">
                                <ul className="flex flex-col">
                                    <li className="px-4 py-3 hover:text-[var(--blue)] border-b border-gray-200">EN
                                        (English)</li>
                                    <li className="px-4 py-3 hover:text-[var(--blue)] border-b border-gray-200">TH
                                        (Thai)</li>
                                    <li className="px-4 py-3 hover:text-[var(--blue)] border-b border-gray-200">ID
                                        (Bahasa Indonesia)</li>
                                    <li className="px-4 py-3 hover:text-[var(--blue)]">TW
                                        (Traditional Chinese)
                                    </li>
                                </ul>
                            </div>
                        }
                    </li>
                </ul>

                <button className='flex items-center gap-1 border bg-transparent hover:bg-white border-white transition-all duration-500 px-5 py-3 rounded-sm group hover:text-[var(--blue)] text-white font-semibold'>Contact Us <IoIosArrowForward className='transition-transform group-hover:translate-x-2' /></button>

            </div>
        </div>
    );
};

export default Navbar;