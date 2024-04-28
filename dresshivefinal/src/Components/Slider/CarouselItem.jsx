// CarouselItem.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function CarouselItem({ image, author, title, topic, description }) {
    return (
        <>
            <div className="slider-item">
                <div className='slider-item-image-container'></div>
                <div className='silder-item-image'>
                    <img src={image} alt={title} />
                </div>

                <div className="slider-content">
                    <div className="slider-author">{author}</div>
                    <div className="slider-title">{title}</div>
                    <div className="slider-topic">{topic}</div>
                    <div className="slider-des">{description}</div>
                    <div className="slider-buttons">
                        <button><Link
                            to="/showcase"
                        >
                            See Showcase
                        </Link></button>
                    </div>
                </div>
                <div className='slider-try'></div>
            </div>
        </>
    );
}

export default CarouselItem;
