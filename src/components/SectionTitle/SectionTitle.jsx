import React from 'react';

const SectionTitle = ({subHeading,heading}) => {
    return (
        <div className='text-center my-10 w-1/2 md:w-1/3 lg:w-1/5 mx-auto'>
             <p className='text-orange-400 pb-2'>--- {subHeading} ---</p>
             <h3 className='text-3xl border-t-2 border-b-2 py-2 uppercase font-semibold'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;