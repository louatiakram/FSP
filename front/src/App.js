// src/App.js

import React from 'react';
import ProjectList from './components/ProjectList';
import SkillList from './components/SkillList';
import ContactForm from './components/ContactForm';
import Resume from './components/Resume';
import './App.css';
import Home from './components/Home';
import BackToTopButton from './components/BackToTopButton';
import LanguagesAndTools from './components/LanguagesAndTools';
import SocialMedia from './components/SocialMedia';


const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <div className="header-content">
                    <Home />
                </div>
            </header>
            <main>
                <section id="projects" className="section">
                    <div className="section-content">
                        <ProjectList />
                    </div>
                </section>
                <section id="skills" className="section">
                    <div className="section-content">
                        <SkillList />
                    </div>
                </section>
                <section id="tools" className="section">
                    <div className="section-content">
                        <LanguagesAndTools />
                    </div>
                </section>
                <section id="resume" className="section">
                    <div className="section-content">
                        <Resume />
                    </div>
                </section>
                <section id="contact" className="section">
                    <div className="section-content">
                        <ContactForm />
                    </div>
                </section>
            </main>
            <footer>
            <SocialMedia />
                <p>&copy; {new Date().getFullYear()} Akram's Portfolio</p>
            </footer>
            <BackToTopButton /> {/* Add BackToTopButton component */}
        </div>
    );
};

export default App;
