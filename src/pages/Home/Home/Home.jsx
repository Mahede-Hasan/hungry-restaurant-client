import React from 'react';
import Banner from '../Banner/Banner';
import PopularItems from '../PopularItems/PopularItems';
import ChefService from '../ChefService/ChefService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularItems></PopularItems>
            <ChefService></ChefService>
        </div>
    );
};

export default Home;