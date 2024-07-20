// src/LanguagesAndTools.js
import React from 'react';
import './LanguagesAndTools.css';

const languagesAndTools = [
    {href: "https://www.arduino.cc/", src: "https://cdn.worldvectorlogo.com/logos/arduino-1.svg", alt: "arduino"},
    {
        href: "https://www.gnu.org/software/bash/",
        src: "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg",
        alt: "bash"
    },
    {
        href: "https://www.blender.org/",
        src: "https://download.blender.org/branding/community/blender_community_badge_white.svg",
        alt: "blender"
    },
    {
        href: "https://www.cprogramming.com/",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
        alt: "c"
    },
    {href: "https://www.chartjs.org", src: "https://www.chartjs.org/media/logo-title.svg", alt: "chartjs"},
    {
        href: "https://www.w3schools.com/cpp/",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
        alt: "cplusplus"
    },
    {
        href: "https://www.w3schools.com/cs/",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
        alt: "csharp"
    },
    {
        href: "https://www.w3schools.com/css/",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
        alt: "css3"
    },
    {href: "https://www.figma.com/", src: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg", alt: "figma"},
    {
        href: "https://firebase.google.com/",
        src: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
        alt: "firebase"
    },
    {
        href: "https://flutter.dev",
        src: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
        alt: "flutter"
    },
    {href: "https://git-scm.com/", src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg", alt: "git"},
    {
        href: "https://www.w3.org/html/",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
        alt: "html5"
    },
    {
        href: "https://www.adobe.com/in/products/illustrator.html",
        src: "https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg",
        alt: "illustrator"
    },
    {
        href: "https://www.java.com",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
        alt: "java"
    },
    {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        alt: "javascript"
    },
    {
        href: "https://www.linux.org/",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
        alt: "linux"
    },
    {
        href: "https://www.mysql.com/",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
        alt: "mysql"
    },
    {
        href: "https://nodejs.org",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
        alt: "nodejs"
    },
    {
        href: "https://www.oracle.com/",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg",
        alt: "oracle"
    },
    {
        href: "https://www.photoshop.com/en",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg",
        alt: "photoshop"
    },
    {
        href: "https://www.php.net",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
        alt: "php"
    },
    {
        href: "https://www.python.org",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        alt: "python"
    },
    {
        href: "https://www.qt.io/",
        src: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Qt_logo_2016.svg",
        alt: "qt"
    },
    {
        href: "https://reactjs.org/",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
        alt: "react"
    },
    {href: "https://symfony.com", src: "https://symfony.com/logos/symfony_black_03.svg", alt: "symfony"},
    {href: "https://unity.com/", src: "https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg", alt: "unity"}
];

const LanguagesAndTools = () => {
    return (
        <div className="languages-and-tools">
            <h2>Languages and Tools</h2>
            <p align="left">
                {languagesAndTools.map((tool, index) => (
                    <a key={index} href={tool.href} target="_blank" rel="noreferrer">
                        <img src={tool.src} alt={tool.alt} width="80" height="80"/>
                    </a>
                ))}
            </p>
        </div>
    );
}

export default LanguagesAndTools;
