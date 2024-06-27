# Full Stack Portfolio (FSP)

Welcome to the repository for my Full Stack Portfolio (FSP), showcasing my skills in web development using Symfony for the backend and React for the frontend.

## Overview

This project is designed to serve as my personal portfolio website, demonstrating proficiency in both frontend and backend development technologies. The backend is built with Symfony, a robust PHP framework, while the frontend utilizes React, a popular JavaScript library for building user interfaces.

## Technologies Used

- **Backend:**
  - **Symfony**: A PHP framework for building web applications.
  - **CORS**: Cross-Origin Resource Sharing to allow frontend requests to the backend.
  - **API**: Building and consuming APIs to communicate between frontend and backend.
  
- **Frontend:**  Preview: https://fsp24.netlify.app/
  - **React**: A JavaScript library for building user interfaces.
  - **Axios**: A promise-based HTTP client for making requests to the backend API.

## Features
- **Portfolio Display**: Showcase your projects, skills, and experiences.
- **Contact Form**: Allow visitors to contact you directly through the website with EmailJs.
- **API Integration**: Fetch data dynamically from backend API endpoints.
- **Responsive Design**: Ensure compatibility and usability across various devices.

## Getting Started

To get a local copy up and running follow these simple steps:

### Prerequisites

- Install PHP, Symfony, Node.js, and npm on your local machine.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/louatiakram/FSP.git
   ```
   
2. Backend Setup (Symfony):
   ```sh
   composer install
   symfony console doctrine:database:create
   symfony console doctrine:migrations:migrate
   symfony serve
   ```

3. Frontend Setup (React):
   ```sh
   cd front
   npm install
   npm start
   ```

4. Open your browser and visit `http://localhost:3000` to see the application running.

## API Endpoints

- `/api/projects`: Get all projects.
- `/api/skills`: Get all skills.
- `/api/contact`: Submit contact form data.

## License

Distributed under the MIT License. See `LICENSE` for more information.
