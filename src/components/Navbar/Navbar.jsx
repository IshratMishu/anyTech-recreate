'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { IoIosArrowForward, IoMdClose } from "react-icons/io";
import { TfiMenuAlt } from "react-icons/tfi";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);


    return (
        <div className='font-inter absolute z-[999] left-0 right-0 lg:bg-transparent bg-[var(--blue)]'>
            <div className="max-w-screen-xl mx-auto md:px-16 md:py-6 py-2 px-2 flex justify-between items-center">

                <Image height={200} width={200} src={'/assets/logo1.png'} alt='logo' className='h-8 w-40 object-cover'></Image>

                <div onClick={() => setOpen(!open)} className="lg:hidden text-2xl text-white z-50">
                    {
                        open ? <IoMdClose /> : <TfiMenuAlt />
                    }
                </div>

                <ul className='hidden lg:flex items-center'>
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

                <button className='hidden lg:flex items-center gap-1 border bg-transparent hover:bg-white border-white transition-all duration-500 px-5 py-3 rounded-sm group hover:text-[var(--blue)] text-white font-semibold'>Contact Us <IoIosArrowForward className='transition-transform group-hover:translate-x-2' /></button>
            </div>


            {/* mobile and tablet view */}
            <ul className={`lg:hidden bg-[#1974dc] fixed md:top-20 top-12 w-full h-auto py-4 px-6 space-y-2 duration-500 ${open ? 'left-0' : '-left-full'}`}>

                <li onClick={() => setDropdown2(!dropdown2)}
                    className="relative cursor-pointer px-6 py-3">
                    <span className="flex items-center gap-2 text-white">
                        Solutions <FaChevronDown className="text-xs" />
                    </span>
                    {/* Dropdown Menu */}
                    {dropdown2 && (
                        <div className="w-[240px] text-white">
                            <ul className="flex flex-col">
                                <li className="px-4 py-3">AnyCaaS</li>
                                <li className="px-4 py-3">AnyBaaS</li>
                                <li className="px-4 py-3">AnyPaaS</li>
                            </ul>
                        </div>
                    )}
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
                    <span className="flex items-center gap-1 border border-white rounded-3xl px-4 py-2 text-white lg:w-auto w-28 mx-auto"> <MdLanguage /> EN <FaChevronDown className={`${dropdown ? '-rotate-180' : 'rotate-0'} duration-300 text-xs`} /></span>

                    {/* Dropdown Menu */}
                    {
                        dropdown && <div className="mx-auto w-[240px] bg-transparent text-white">
                            <ul className="flex flex-col">
                                <li className="px-4 py-3">EN
                                    (English)</li>
                                <li className="px-4 py-3">TH
                                    (Thai)</li>
                                <li className="px-4 py-3">ID
                                    (Bahasa Indonesia)</li>
                                <li className="px-4 py-3">TW
                                    (Traditional Chinese)
                                </li>
                            </ul>
                        </div>
                    }
                </li>

                <button className='flex items-center gap-1 border bg-transparent hover:bg-white border-white transition-all duration-500 py-3 rounded-sm group hover:text-[var(--blue)] text-white font-semibold w-full justify-center mt-10'>Contact Us <IoIosArrowForward className='transition-transform group-hover:translate-x-2' /></button>
            </ul>

        </div>
    );
};

export default Navbar;