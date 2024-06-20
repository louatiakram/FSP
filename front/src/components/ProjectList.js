// src/components/ProjectList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProjectList.css'; // Import custom CSS for ProjectList
import Card from './Card'; // Import the Card component

const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('/api/projects')
            .then(response => {
                setProjects(response.data['hydra:member']);
            })
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    return (
        <div className="project-list">
            <h2>Best Projects</h2>
            <div className="card-list">
                {projects.map(project => (
                    <Card 
                        key={project.id}
                        title={project.title} 
                        description={project.description} 
                        imageUrl={`${process.env.PUBLIC_URL}/img/${project.image}`} // Directly using the image name
                        projectUrl={project.url} // Assuming the API provides project.url
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
