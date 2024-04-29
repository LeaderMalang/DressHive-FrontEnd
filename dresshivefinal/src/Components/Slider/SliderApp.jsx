import React, { useState, useEffect } from 'react';
import Arrows from './Arrows';
import Carousel from './Carousel';

function SliderApp() {
    // Example data for carousel and thumbnail items
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselItems = [
        { image: 'Images/mnz-ToLMORRb97Q-unsplash.jpg', author: 'DressHive', title: 'Fed up with buying formal wear for a single occasion?', topic: 'We Have A Solution', description: 'Rent it. Our mission is to revolutionize the way you approach your wardrobe. Fed up with the clutter of formal wear gathering dust in your closet? We hear you. That is why we offer a smarter solution: renting. With our service, you can enjoy the perfect outfit for every occasion without breaking the bank or adding to your closet chaos. Say goodbye to buyer remorse and hello to a more sustainable, stylish way of dressing.' },
        { image: 'Images/keagan-henman-xPJYL0l5Ii8-unsplash.jpg', author: 'DressHive', title: 'Sick of splurging on outfits you will only wear once?', topic: 'We Have A Solution', description: 'Rent it. Our mission is to revolutionize the way you approach your wardrobe. Fed up with the clutter of formal wear gathering dust in your closet? We hear you. That is why we offer a smarter solution: renting. With our service, you can enjoy the perfect outfit for every occasion without breaking the bank or adding to your closet chaos. Say goodbye to buyer remorse and hello to a more sustainable, stylish way of dressing.' },
        { image: 'Images/marcus-loke-xXJ6utyoSw0-unsplash.jpg', author: 'DressHive', title: 'Tired of emptying your wallet for one-time wear?', topic: 'We Have A Solution', description: 'Rent it. Our mission is to revolutionize the way you approach your wardrobe. Fed up with the clutter of formal wear gathering dust in your closet? We hear you. That is why we offer a smarter solution: renting. With our service, you can enjoy the perfect outfit for every occasion without breaking the bank or adding to your closet chaos. Say goodbye to buyer remorse and hello to a more sustainable, stylish way of dressing.' },
        { image: 'Images/alex-haigh-fEt6Wd4t4j0-unsplash.jpg', author: 'DressHive', title: 'Frustrated with the one-time outfit investment?', topic: 'We Have A Solution', description: 'Rent it. Our mission is to revolutionize the way you approach your wardrobe. Fed up with the clutter of formal wear gathering dust in your closet? We hear you. That is why we offer a smarter solution: renting. With our service, you can enjoy the perfect outfit for every occasion without breaking the bank or adding to your closet chaos. Say goodbye to buyer remorse and hello to a more sustainable, stylish way of dressing.' },
        // Add more carousel items as needed
    ];


    useEffect(() => {
        const timer = setTimeout(() => {
            const nextIndex = (currentIndex + 1) % carouselItems.length;
            setCurrentIndex(nextIndex);
        }, 7000); // Change the time interval as needed

        return () => clearTimeout(timer);
    }, [currentIndex, carouselItems.length]);

    const onNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1));
    };

    const onPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1));
    };

    return (
        <div>
            <Carousel carouselItems={carouselItems} currentIndex={currentIndex} />
            <Arrows onNext={onNext} onPrev={onPrev} />
        </div>
    );
}

export default SliderApp;
