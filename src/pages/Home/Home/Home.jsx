import React from 'react';
import Banner from '../Banner/Banner';
import PopularItems from '../PopularItems/PopularItems';
import ChefService from '../ChefService/ChefService';
import OurMenu from '../OurMenu/OurMenu';
import ContactSection from '../ContactSection/ContactSection';
import ChefRecommendsFood from '../ChefRecommendsFood/ChefRecommendsFood';
import FromOurMenu from '../FromOurMenu/FromOurMenu';
import CustomerReview from '../CustomerReview/CustomerReview';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularItems></PopularItems>
            <ChefService></ChefService>
            <OurMenu></OurMenu>
            <ContactSection></ContactSection>
            <ChefRecommendsFood></ChefRecommendsFood>
            <FromOurMenu></FromOurMenu>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;