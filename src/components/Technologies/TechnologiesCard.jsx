import React from 'react';
import './Technologies.css';

const TechnologiesCard = ({ image, title }) => {
    return (
        <div className="technologies-card">
            <img
                src={image}
                alt={title}
                className="technologies-image"
                loading="lazy"
            />
            <h4 className="technologies-title">{title}</h4>
        </div>
    );
}

export default TechnologiesCard;