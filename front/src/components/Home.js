import React, {useEffect, useState} from 'react';
import './Home.css';

const Home = () => {
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingText, setTypingText] = useState('');
    const typingSpeed = 120; // Adjust typing speed as needed

    useEffect(() => {
        const phrases = ["Game Developer.", "Web Developer."]; // Moved inside useEffect

        const type = () => {
            const currentPhrase = phrases[textIndex];
            let newText = typingText;
            let nextIndex = typingText.length + (isDeleting ? -1 : 1);

            if (!isDeleting) {
                // Typing phase
                if (nextIndex <= currentPhrase.length) {
                    newText = currentPhrase.substring(0, nextIndex);
                } else {
                    setIsDeleting(true);
                }
            } else {
                // Deleting phase
                if (nextIndex >= 0) {
                    newText = currentPhrase.substring(0, nextIndex);
                } else {
                    setIsDeleting(false);
                    setTextIndex((textIndex + 1) % phrases.length);
                }
            }

            setTypingText(newText);
        };

        const interval = setTimeout(type, typingSpeed);
        return () => clearTimeout(interval);
    }, [textIndex, isDeleting, typingText, typingSpeed]); // Removed 'phrases' from the dependency array

    return (
        <section id="home" className="home">
            <div className="left-content">
                <div className="home-content">
                    <h1>Hey, My name is Akram</h1>
                    <p>I'm a {typingText}<span className="cursor"/></p>
                </div>
            </div>
            <div className="image-container">
                <img src="/img/ME.png" alt="Me"/>
            </div>
        </section>
    );
}

export default Home;
