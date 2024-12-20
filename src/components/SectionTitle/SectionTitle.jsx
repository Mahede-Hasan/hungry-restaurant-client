import React from 'react';

const SectionTitle = ({subHeading,heading,style}) => {
    return (
        <div className='text-center my-10 w-fit mx-auto'>
             <p className='text-orange-400 pb-2'>--- {subHeading} ---</p>
             <h3 className={`text-3xl text-center border-t-2 border-b-2 py-2 uppercase font-semibold ${style}`}>{heading}</h3>
        </div>
    );
};

export default SectionTitle;