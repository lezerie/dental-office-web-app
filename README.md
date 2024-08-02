# Dental Office Scheduling System

This is a full-stack web application designed for dental office online scheduling system. The application includes user authentication, appointment booking, and a user dashboard for managing appointments. The backend is built with Node.js and MySQL, while the frontend is developed using React.js and Material-UI (MUI) for styling.

## Table of Contents

1. [Folder Structure](#folder-structure)
2. [Technologies Used](#technologies-used)
3. [Database Schema](#database-schema)
4. [Environment Variables](#environment-variables)
5. [Setup and Installation](#setup-and-installation)
6. [Running the Application](#running-the-application)

## Folder Structure

### Backend

- **config**: Contains configuration files, such as the database configuration.
- **controllers**: Handles the request logic for different routes.
  - `auth.controller.js`: Manages authentication-related logic.
  - `booking.controller.js`: Handles booking operations.
  - `home.controller.js`: Manages home page-related logic.
  - `user.controller.js`: Handles user-related operations.
- **models**: Defines the database schemas for the application.
  - `appointment.model.js`: Schema for appointments.
  - `client.model.js`: Schema for clients.
  - `doctor.model.js`: Schema for doctors.
  - `schedule.model.js`: Schema for schedules.
  - `service.model.js`: Schema for services.
- **routes**: Defines the application routes.
  - `auth.route.js`: Routes for authentication.
  - `booking.route.js`: Routes for booking operations.
  - `home.route.js`: Routes for home page operations.
  - `user.route.js`: Routes for user operations.
- **services**: Contains business logic, such as authentication services.
  - `auth.service.js`: Handles authentication logic.
- **index.js**: Entry point for the backend application.
- **package.json**: Contains backend dependencies and scripts.

### Frontend

- **public**: Static files such as images.
- **src**: Source code for the frontend application.
  - **components**: Contains React components organized by feature.
    - `book-appointment`: Booking appointment component.
    - `dashboard`: User dashboard component.
    - `footer`: Footer component.
    - `home`: Home page component.
    - `login`: Login component.
    - `navbar`: Navigation bar component.
    - `register`: Registration component.
  - **constants**: Defines constant values used across the application.
  - **interfaces**: TypeScript interfaces for type definitions.
  - **routes**: Defines application routes and route protection.
  - **states**: Redux slices and store configuration for state management.
  - **utils**: Utility functions and helper methods.
- **index.css**: Global CSS styles.
- **main.tsx**: Entry point for the frontend application.
- **index.html**: Main HTML file for the frontend.
- **package.json**: Contains frontend dependencies and scripts.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: React.js, Vite, TypeScript, Material-UI (MUI)
- **Database**: MySQL
- **State Management**: Redux Toolkit
- **Styling**: CSS

## Database Schema

- **Client**

  - id
  - full_name
  - phone
  - email
  - password

- **Doctor**

  - id
  - full_name
  - email
  - phone

- **Service**

  - id
  - name
  - value
  - description
  - image_src

- **Schedule**

  - id
  - doctore_id : Doctor(id)
  - schedule_day
  - schedule_time

- **Appointment**
  - id
  - schedule_id : Schedule(id)
  - client_id : Client(id)
  - service_id : Service(id)
  - appointment_date
  - status
  - remarks

## Environment Variables

### Frontend

- `VITE_APP_BASE_URL`: The base URL for the backend API.

### Backend

- `DB_HOST`: Database host.
- `DB_USER`: Database user.
- `DB_PASSWORD`: Database password.
- `DB_DATABASE`: Database name.
- `JWT_SECRET`: Secret key for JWT authentication.

## Setup and Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Project
   ```
2. **Set up the Backend:**
   - Navigate to the `backend` directory:
     ```bash
     git clone <repository-url>
     cd Project
     ```
   - Install the dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `backend` directory and add the required environment variables
   ```makefile
    DB_HOST=your_db_host
    DB_USER=your_db_user
    DB_PASSWORD=your_db_password
    DB_DATABASE=your_db_name
    JWT_SECRET=your_jwt_secret
   ```
3. **Set up the Frontend:**
   - Navigate to the `frontend` directory:
     ```bash
     cd ../frontend
     ```
   - Install the dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `backend` directory and add the required environment variables
   ```makefile
    VITE_APP_BASE_URL=your_backend_api_url
   ```

## Running the Application

1. **Start the Backend:**

- From the `backend` directory, run:
  ```bash
  npm start
  ```

2. **Start the Frontend:**

   - From the `backend` directory, run:
     ```bash
     npm run dev
     ```

3. **Access the Application:**

- Open your browser and navigate to the frontend URL (typically `http://localhost:5173`)
