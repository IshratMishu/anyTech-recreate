'use client'
import React, { useEffect } from 'react';
import { CountUp } from 'countup.js';


const Section5 = () => {
    useEffect(() => {
        const counters = [
            { id: 'experience', end: 20, prefix: '>' },
            { id: 'financial', end: 40, suffix: '+' },
            { id: 'customers', end: 200, prefix: '>', suffix: 'm' },
        ];

        counters.forEach(({ id, end, prefix = '', suffix = '' }) => {
            const countUp = new CountUp(id, end, {
                duration: 2,
                prefix,
                suffix,
                enableScrollSpy: true,
                scrollSpyOnce: true
            });

            if (!countUp.error) {
                countUp.start();
            }
        });
    }, []);


    return (
        <div>
            <h1 className='text-center text-[var(--blue)] font-montserrat font-bold tracking-widest pb-10'>TRUSTED BY THE BEST</h1>
            {/* countup */}
            <div className="flex justify-around items-center">
                <div className="text-center">
                    <h4 id="experience" className="font-montserrat text-6xl lg:text-8xl tracking-[-0.02em] font-semibold leading-none bg-gradient-to-b from-[var(--blue)] to-[#0057BB] text-transparent bg-clip-text">0</h4>
                    <p className='font-inter text-lg'>Years of Experience</p>
                </div>
                <div className="text-center">
                    <h4 id="financial" className="font-montserrat text-6xl lg:text-8xl tracking-[-0.02em] font-semibold leading-none bg-gradient-to-b from-[var(--blue)] to-[#0057BB] text-transparent bg-clip-text">0</h4>
                    <p className='font-inter text-lg'>Financial Institutions</p>
                </div>
                <div className="text-center">
                    <h4 id="customers" className="font-montserrat text-6xl lg:text-8xl tracking-[-0.02em] font-semibold leading-none bg-gradient-to-b from-[var(--blue)] to-[#0057BB] text-transparent bg-clip-text">0m</h4>
                    <p className='font-inter text-lg'>Customers Each</p>
                </div>
            </div>
        </div>
    );
};

export default Section5;