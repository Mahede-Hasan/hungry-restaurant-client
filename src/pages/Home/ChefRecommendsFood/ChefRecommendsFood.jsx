import React from 'react';
import SectionTitle from './../../../components/SectionTitle/SectionTitle';
import pastaImg from '../../../assets/home/chef-reco (1).jpg';
import pizzaImg from '../../../assets/home/chef-reco (2).jpg';
import burgerImg from '../../../assets/home/chef-reco (3).jpg';

const ChefRecommendsFood = () => {
    const chefFoods = [
        {
          _id: 1,
          food_name: "Grilled Pasta",
          img: pastaImg,
          short_description: "A perfectly grilled salmon fillet served with a lemon butter sauce."
        },
        {
          _id: 2,
          food_name: "Classic Margherita Pizza",
          img: pizzaImg,
          short_description: "A thin-crust pizza topped with fresh tomatoes, mozzarella, and basil."
        },
        {
          _id: 3,
          food_name: "Beef Burger",
          img: burgerImg,
          short_description: "A rich Beef Burger with a gooey molten center, served with vanilla ice cream."
        }
      ];
      
    return (
        <div className='max-w-6xl mx-auto mb-20 pt-10'>
            <SectionTitle heading="chef recommends" subHeading="Should Try"></SectionTitle>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:mx-0 md:mx-20 mx-10'>
                {
                    chefFoods.map(food=>
                    <div key={food._id} className='bg-[#F3F3F3]  h-[500px] mx-auto'>
                        <img className='w-full h-[280px]' src={food.img} alt="" />
                        <div className='flex flex-col items-center justify-center mt-6'>
                            <h3 className='text-xl font-semibold'>{food.food_name}</h3>
                            <p className='text-center py-4'>{food.short_description}</p>
                            <button className='text-orange-400 uppercase text-[14px] font-semibold px-6 py-2 border-b-2 border-orange-400 rounded-xl bg-gray-100'>add to cart</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ChefRecommendsFood;