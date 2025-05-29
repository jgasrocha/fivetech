import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ image, title, subtitle }) => {
    return (
        <div className="service-card">
            <img
                src={image}
                alt={title}
                className="service-image"
            />
            <div className="service-content">
                <h3 className="service-title">{title}</h3>
                <p className="service-subtitle">{subtitle}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
