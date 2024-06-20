// src/components/Card.js
import React, { useRef } from 'react';
import './Card.css'; // Import custom CSS for Card

const Card = ({ title, description, imageUrl, projectUrl }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const cardWidth = rect.width;
        const cardHeight = rect.height;
        const centerX = cardWidth / 2;
        const centerY = cardHeight / 2;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const maxRotate = 20; // Reduce max rotation angle to make it smoother
        const rotateX = ((centerY - mouseY) / centerY) * maxRotate;
        const rotateY = ((mouseX - centerX) / centerX) * maxRotate;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };

    return (
        <div
            className="card"
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="card-image-wrapper">
                <img src={imageUrl} alt={title} className="card-image" />
            </div>
            <div className="card-content">
                <div className="card-text">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-description">{description}</p>
                </div>
                <a href={projectUrl} className="card-button" target="_blank" rel="noopener noreferrer">
                    Github
                </a>
            </div>
        </div>
    );
};

export default Card;
