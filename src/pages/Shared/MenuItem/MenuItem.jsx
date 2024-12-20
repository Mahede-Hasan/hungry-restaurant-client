import React from 'react';

const MenuItem = ({item}) => {
    const {name,recipe,image,price}= item;
    return (
        <div className='flex justify-center items-center gap-3'>
            <img className='w-[118px] h-[104px] rounded-tr-[200px] rounded-b-[200px]' src={image} alt="" />
            <div>
                <h3 className='text-xl font-semibold mb-2'>{name}----</h3>
                <p>{recipe}</p>
            </div>
            <h3 className='text-xl font-semibold'>${price}</h3>
        </div>
    );
};

export default MenuItem;