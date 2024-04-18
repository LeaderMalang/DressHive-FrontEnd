// ThumbnailItem.jsx
import React from 'react';

function ThumbnailItem({ image, title, description }) {
    return (
        <>
        <div className="item">
            <img src={image} alt={title} />
            <div className="content">
                <div className="title">{title}</div>
                <div className="description">{description}</div>
            </div>
        </div>
        </>
    );
}

export default ThumbnailItem;
