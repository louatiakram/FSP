import React from 'react';
import './SocialMedia.css';

const socialMediaLinks = [
    {
        href: "https://linkedin.com/in/louatiakram",
        src: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg",
        alt: "LinkedIn",
        width: "40",
        height: "30"
    },
    {
        href: "https://fb.com/louatakram",
        src: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg",
        alt: "Facebook",
        width: "40",
        height: "30"
    },
    {
        href: "https://instagram.com/louati.akram",
        src: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg",
        alt: "Instagram",
        width: "40",
        height: "30"
    },
    {
        href: "https://www.youtube.com/@louatiakram",
        src: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg",
        alt: "YouTube",
        width: "40",
        height: "30"
    }
];

const SocialMedia = () => {
    return (
        <div className="social-media">
            <p align="left">
                {socialMediaLinks.map((link, index) => (
                    <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                        <img className="social-media-icon" align="center" src={link.src} alt={link.alt}
                             width={link.width} height={link.height}/>
                    </a>
                ))}
            </p>
        </div>
    );
}

export default SocialMedia;
