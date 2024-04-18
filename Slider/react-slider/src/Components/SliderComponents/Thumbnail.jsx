// Thumbnail.jsx
import React from 'react';
import ThumbnailItem from './ThumbnailItem';

function Thumbnail({ thumbnailItems }) {
    return (
        <div className="thumbnail">
            {thumbnailItems.map((item, index) => (
                <ThumbnailItem
                    key={index}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </div>
    );
}

export default Thumbnail;
