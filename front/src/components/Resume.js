import React from 'react';
import './Resume.css'; // Import custom CSS for Resume

const Resume = () => {

    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = '/doc/Akram.pdf'; // Path to your resume PDF file
        link.setAttribute('download', 'Akram.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="resume-container">
            <h2 className="resume-title">My Resume</h2>
            <div className="resume-download">
                <button className="download-button" onClick={downloadResume}>Download</button>
            </div>
        </div>
    );
};

export default Resume;
