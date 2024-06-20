// src/components/ContactForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css'; // Import custom CSS for ContactForm

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submitting, setSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);

        axios.post('/api/contacts', formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            console.log(response.data);
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
            setErrorMessage('');
        })
        .catch(error => {
            console.error('Error sending message:', error);
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                setErrorMessage(error.response.data.message || 'Failed to send message. Please try again later.');
            } else if (error.request) {
                console.error('No response received:', error.request);
                setErrorMessage('No response received. Please check your internet connection.');
            } else {
                console.error('Error setting up request:', error.message);
                setErrorMessage('An unexpected error occurred. Please try again.');
            }
        })
        .finally(() => {
            setSubmitting(false);
        });
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Message:</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required />
            </div>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <button type="submit" disabled={submitting}>Send Message</button>
        </form>
    );
};

export default ContactForm;
