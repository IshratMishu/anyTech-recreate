import React from 'react';

const Footer3 = () => {
    return (
        <div className='font-inter bg-[var(--dark-blue)]'>
            <div className="max-w-screen-xl mx-auto md:p-8 p-4 flex md:flex-row flex-col md:justify-between gap-5 items-center text-[var(--blue)] text-sm">
                <p className='md:text-start text-center'>©2023 All rights reserved. Any Technology Pte Ltd.</p>
                <a href="" className='hover:text-white transition-colors duration-300'>Privacy Policy</a>
            </div>
        </div>
    );
};

export default Footer3;