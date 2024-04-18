// App.jsx
import React, { useState, useEffect } from 'react';
import Header from './Components/SliderComponents/Header';
import Carousel from './Components/SliderComponents/Carousel';
import Thumbnail from './Components/SliderComponents/Thumbnail'
import Arrows from './Components/SliderComponents/Arrows';

function App() {
    // Example data for carousel and thumbnail items
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselItems = [
        { image: 'image/img1.jpg', author: 'LUNDEV', title: 'DESIGN SLIDER', topic: 'ANIMAL', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?' },
        { image: 'image/img2.jpg', author: 'LUNDEV', title: 'DESIGN SLIDER', topic: 'ANIMAL', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?' },
        { image: 'image/img3.jpg', author: 'LUNDEV', title: 'DESIGN SLIDER', topic: 'ANIMAL', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?' },
        { image: 'image/img4.jpg', author: 'LUNDEV', title: 'DESIGN SLIDER', topic: 'ANIMAL', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?' },
        // Add more carousel items as needed
    ];

    const thumbnailItems = [
        { image: 'image/img1.jpg', title: 'Name Slider', description: 'Description' },
        { image: 'image/img2.jpg', title: 'Name Slider', description: 'Description' },
        { image: 'image/img3.jpg', title: 'Name Slider', description: 'Description' },
        { image: 'image/img4.jpg', title: 'Name Slider', description: 'Description' },
        // Add more thumbnail items as needed
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
            <Header />
            <Carousel carouselItems={carouselItems} currentIndex={currentIndex} />
            <Thumbnail thumbnailItems={thumbnailItems} />
            <Arrows onNext={onNext} onPrev={onPrev} />
        </div>
    );
}

export default App;
