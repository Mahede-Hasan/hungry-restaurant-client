import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import axios from 'axios';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import ViewAllButton from '../../../components/ViewAllButton/ViewAllButton';

const OurMenu = () => {
    const [menu, setMenu] = useState([])
    console.log(menu)
    useEffect(() => {
        axios.get('./menu.json')
            .then(res => {
                const menus = res.data;
                const popularMenu = menus.filter(menu => menu.category === 'popular')
                setMenu(popularMenu)
            })
    }, [])
    return (
        <div className='max-w-6xl mx-auto pt-2 md:pb-8 pb-4'>
            <SectionTitle
                heading="from our menu"
                subHeading="Check it out"
            ></SectionTitle>

            <div className='grid md:grid-cols-2 grid-cols-1 gap-10 lg:mx-0 md:mx-20 mx-10'>
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }

            </div>
            <ViewAllButton buttonText="view full menu"></ViewAllButton>
        </div>
    );
};

export default OurMenu;