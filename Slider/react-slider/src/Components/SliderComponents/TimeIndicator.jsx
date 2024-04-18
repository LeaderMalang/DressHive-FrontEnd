// TimeIndicator.jsx
import React, { useEffect, useState } from 'react';
import Thumbnail from './Thumbnail';
import Carousel from './Carousel';
import ThumbnailItem from './ThumbnailItem';
import CarouselItem from './CarouselItem';

function TimeIndicator() {
    const [width, setWidth] = useState('100%');

    useEffect(() => {
        const totalTime = 7000; // Total duration in milliseconds
        const startTime = Date.now();

        const updateWidth = () => {
            const elapsedTime = Date.now() - startTime;
            const remainingTime = Math.max(totalTime - elapsedTime, 0);
            const remainingWidth = (remainingTime / totalTime) * 100;
            setWidth(`${remainingWidth}%`);

            if (remainingTime > 0) {
                setTimeout(updateWidth, 100); // Update width every 100 milliseconds
            }
        };

        updateWidth(); // Start the animation

        return () => {}; // Cleanup function not needed for setTimeout
    }, [Thumbnail, Carousel, ThumbnailItem, CarouselItem]);

    return <div className="time" style={{ width, backgroundColor: '#f1683a' }}></div>;
}

export default TimeIndicator;
