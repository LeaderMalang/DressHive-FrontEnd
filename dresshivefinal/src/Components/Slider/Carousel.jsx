// Carousel.jsx
import React from 'react';
import CarouselItem from './CarouselItem';

function Carousel({ carouselItems, currentIndex }) {
    return (
        <div className="slider-carousel">
            <div className="slider-list">
                {carouselItems.map((item, index) => (
                    <div key={index} style={{ display: index === currentIndex ? 'block' : 'none' }}>
                        <CarouselItem
                            image={item.image}
                            author={item.author}
                            title={item.title}
                            topic={item.topic}
                            description={item.description}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;
