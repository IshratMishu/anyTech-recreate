'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from 'swiper/modules';
import SectionTitle from '../ReUsableStyle/SectionTitle';
import SwiperTexts from '../ReUsableStyle/SwiperTexts';

const Section4 = () => {
    const swiperRef = useRef(null);
    const [activeTab, setActiveTab] = useState(0);
    const tabOptions = ["Customer focused", "Agile and adaptable", "Compliance ready", "Secure and safe"];

    const handleTabClick = (index) => {
        setActiveTab(index);
        if (swiperRef.current) {
            swiperRef.current.slideTo(index);
        }
    };

    return (
        <div className='mt-32'>
            <SectionTitle heading={'TECHNOLOGY BUILT FOR YOU'}
                subHeading={'The future of finance'}>
            </SectionTitle>


            <div className="">
                {/* Tab Navigation */}
                <div className="flex justify-between mt-8 lg:px-10 px-4">
                    {tabOptions.map((tab, index) => (
                        <button
                            key={index}
                            className={`lg:text-lg text-base py-2 lg:px-10 px-4 font-inter rounded-3xl font-semibold text-[var(--blue)] transition-all duration-300
                ${activeTab === index
                                    ? "bg-[#B9D9FF]"
                                    : "hover:bg-[#F5FAFF]"
                                }`}
                            onClick={() => handleTabClick(index)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Swiper Component */}
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => setActiveTab(swiper.activeIndex)}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    speed={1000}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper mt-12 shadow-sm"
                >
                    <SwiperSlide >
                        <SwiperTexts
                            heading={'CUSTOMER FOCUSED'}
                            subHeading={'Purpose-built financial services'}
                            p1={'Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.'}
                            p2={' Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.'}
                            image={'/assets/customerFocused.png'}>
                        </SwiperTexts>
                    </SwiperSlide>

                    <SwiperSlide>
                        <SwiperTexts
                            heading={'AGILE AND ADAPTABLE'}
                            subHeading={'Agile and adaptable for growth'}
                            p1={'Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.'}
                            p2={'Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.'}
                            image={'/assets/agileandAdaptable.png'}>
                        </SwiperTexts>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperTexts
                            heading={'COMPLIANCE READY'}
                            subHeading={'Manage compliance with ease'}
                            p1={'Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.'}
                            p2={'Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.'}
                            image={'/assets/compliance.png'}>
                        </SwiperTexts>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperTexts
                            heading={'SECURE AND SAFE'}
                            subHeading={'Highly secure and safe'}
                            p1={'Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.'}
                            p2={'Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.'}
                            image={'/assets/secureandsafe.png'}>
                        </SwiperTexts>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div >
    );
};

export default Section4;