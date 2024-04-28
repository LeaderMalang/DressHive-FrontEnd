// Arrows.jsx
import React from 'react';

function Arrows({ onNext, onPrev }) {
    return (
        <div className="slider-arrows">
            <button id="prev" onClick={onPrev}>{'<'}</button>
            <button id="next" onClick={onNext}>{'>'}</button>
        </div>
    );
}

export default Arrows;
