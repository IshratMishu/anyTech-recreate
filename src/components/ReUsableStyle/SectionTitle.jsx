import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div>
            <h1 className='text-center text-[var(--blue)] font-montserrat font-bold tracking-widest pb-5'>{heading}</h1>
            <h4 className='text-[56px] text-[#0B305B] font-semibold font-montserrat text-center'>{subHeading}</h4>
        </div>
    );
};

export default SectionTitle;