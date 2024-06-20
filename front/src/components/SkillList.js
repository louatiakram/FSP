import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SkillList.css'; // Import custom CSS for SkillList

const SkillList = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        axios.get('/api/skills')
            .then(response => {
                setSkills(response.data['hydra:member']);
            })
            .catch(error => console.error('Error fetching skills:', error));
    }, []);

    return (
        <div className="skill-list-container">
            <h2 className="skill-list-title">Skills</h2>
            <ul className="skill-list">
                {skills.map(skill => (
                    <li key={skill.id} className="skill-item">
                        <h3>{skill.name}</h3>
                        <div className="skill-bar">
                            <div className="skill-bar-level" style={{ width: `${skill.level}%` }}></div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillList;
