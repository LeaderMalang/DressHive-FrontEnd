import React from 'react';
import SliderApp from '../Slider/SliderApp';
import HomePageCategory from '../HomePageCategory/HomePageCategory';

export default function Home({ products }) {
    // Extract categories from the products array
    const getCategories = () => {
        const categories = {};
        products.forEach(product => {
            categories[product.category] = {
                name: product.category,
                imageSrc: product.imageSrc
            };
        });
        return Object.values(categories);
    };

    return (
        <>        
            <SliderApp/>
            <HomePageCategory categories={getCategories()} />
        </>
    );
}