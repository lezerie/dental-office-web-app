# Dental Office Scheduling System

## Overview

This web application allows patients to schedule and manage their dental appointments online. It consists of a frontend built with React.js, a backend using Node.js, and a MySQL database. The application is deployed on AWS.

## Tech Stack

### Frontend

- **React.js** ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- **MUI** (Material-UI) ![MUI](https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white)

### Backend

- **Node.js** ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
- **Express.js** ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

### Database

- **MySQL** ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

### Deployment

- **AWS** ![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
- **AWS EKS** (Elastic Kubernetes Service)

## Folder Structure

### Backend

- **config**: Contains configuration files, e.g., `database.js` for database connection.
- **controllers**: Handles the request logic for different routes., e.g., `auth.controller.js`, `booking.controller.js`.
- **models**: Defines the database models for entities like `appointment.model.js`, `client.model.js`, `doctor.model.js`.
- **routes**: Contains route definitions, e.g., `auth.route.js`, `booking.route.js`.
- **services**: Implements the business logic, e.g., `auth.service.js`.
- **index.js**: Entry point for the backend server.

### Frontend

- **public**: Stores public assets like images.
- **src**: Main source directory.
  - **components**: Contains React components, each having hooks and component files for different parts of the application.
    - **book-appointment**: Components and hooks for booking appointments.
    - **dashboard**: Components and hooks for the user dashboard.
    - **footer**: Footer component and hooks.
    - **home**: Home page component and hooks.
    - **login**: Login page component and hooks.
    - **navbar**: Navigation bar component and hooks.
    - **register**: Registration page component and hooks.
  - **constants**: Stores constant values used throughout the application.
  - **interfaces**: TypeScript interfaces for type definitions.
  - **routes**: Route definitions and hooks for protected routes.
  - **states**: Redux slices and store configuration.
  - **utils**: Utility functions and requests, e.g., API requests.

## Environment Variables

### Frontend

- `VITE_APP_BASE_URL`: Base URL for API requests.

### Backend

- `DB_HOST`: Database host.
- `DB_USER`: Database user.
- `DB_PASSWORD`: Database password.
- `DB_DATABASE`: Database name.
- `JWT_SECRET`: Secret key for JWT authentication.

## Database Schema

### Tables

- **Client**
  - `id`: Unique identifier.
  - `full_name`: Full name of the client.
  - `phone`: Phone number.
  - `email`: Email address.
  - `password`: Encrypted password.
- **Doctor**
  - `id`: Unique identifier.
  - `full_name`: Full name of the doctor.
  - `email`: Email address.
  - `phone`: Phone number.
- **Service**
  - `id`: Unique identifier.
  - `name`: Name of the service.
  - `value`: Value of the service.
  - `description`: Description of the service.
  - `image_src`: Image source URL.
- **Schedule**
  - `id`: Unique identifier.
  - `doctor_id`: Foreign key referencing the doctor.
  - `schedule_day`: Day of the schedule.
  - `schedule_time`: Time of the schedule.
- **Appointment**
  - `id`: Unique identifier.
  - `schedule_id`: Foreign key referencing the schedule.
  - `client_id`: Foreign key referencing the client.
  - `service_id`: Foreign key referencing the service.
  - `appointment_date`: Date of the appointment.
  - `status`: Status of the appointment.
  - `remarks`: Additional remarks.

## Features

1. **Frontend (React)**

   - **Home Page**: Displays dental office information, services, and a call to action to schedule an appointment.
   - **Booking Page**: Allows users to select a dentist, view available slots, and schedule an appointment.
   - **User Dashboard**: Users can view, reschedule, or cancel their appointments after logging in.

2. **Backend (Node.js)**

   - **User Authentication**: Registration, login, and profile management.
   - **API Endpoints**: RESTful API endpoints for CRUD operations on appointments.
   - **Error Handling**: Proper error handling with appropriate status codes and messages.

3. **Database**
   - **Schema Design**: Structured tables for clients, doctors, services, schedules, and appointments.
   - **CRUD Operations**: Full support for creating, reading, updating, and deleting records.

## Deployment Instructions

1. **Backend Setup**

   - Clone the repository.
   - Navigate to the `backend` directory.
   - Create a `.env` file with the required environment variables.
   - Run `npm install` to install dependencies.
   - Run `npm start` to start the server.

2. **Frontend Setup**

   - Navigate to the `frontend` directory.
   - Create a `.env` file with the required environment variables.
   - Run `npm install` to install dependencies.
   - Run `npm run dev` to start the development server.

3. **Database Setup**

   - Create a MySQL database using the provided schema.
   - Ensure the database credentials match the environment variables in the backend.

4. **AWS Deployment**
   - Deploy the backend and frontend using AWS services.
   - Configure AWS EKS for the backend deployment.
   - Set up necessary AWS services for the database and other infrastructure components.

## Documentation

- Detailed documentation is provided in the repository's README file, including system architecture, components, database schema, and deployment steps.

## Submission

- **GitHub Repository**: Provide the repository containing the source code.
- **Deployed Application URL**: Provide the URL of the deployed application.
- **Documentation**: Ensure detailed documentation is included in the repository.
- **Demo Video**: Record a 5-minute video walkthrough of the project and include it in the GitHub repository.

---

Feel free to explore the code and reach out if you have any questions or need further assistance!
