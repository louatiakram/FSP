// src/components/BackToTopButton.js

import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';
import './BackToTopButton.css';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when user scrolls down 20px
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 20) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            {isVisible && (
                <button className="back-to-top" onClick={scrollToTop}>
                    <FontAwesomeIcon icon={faArrowUp}/>
                </button>
            )}
        </div>
    );
};

export default BackToTopButton;
