# Taskly

This repository contains the source code for a full-stack application named "Taskly". The frontend is built using modern web technologies, while the backend is developed with Node.js. Below you will find detailed instructions on setting up and running both parts of the application.

## Table of Contents

- [Technologies Used](#technologies-used)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
    - [Frontend](#frontend-1)
    - [Backend](#backend-1)
- [Author](#author)

## Technologies Used

### Frontend

The frontend is built with the following major libraries and tools:

- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: For state management.
- **Ant Design (antd)**: For UI components.
- **TailwindCSS**: For styling.
- **React Query**: For data fetching and caching.
- **TypeScript**: For static type checking.
- **Vite**: For development and build tooling.
- **ESLint**: For linting and code quality.
- **React-big-calendar**: For tracking todos in the calendar.

### Backend

The backend is developed using Node.js and includes the following major libraries:

- **Express**: A web application framework for Node.js.
- **Mongoose**: For MongoDB object modeling.
- **JSON Web Token (jsonwebtoken)**: For authentication.
- **Bcrypt**: For password hashing.
- **Cloudinary**: For image and video management.
- **Multer**: For handling multipart/form-data.

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (v16 or later)
- npm (v8 or later)
- MongoDB (for backend)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Sushant696/To-dos.git
   cd todos-app
   ```

```bash
cd frontend
npm install
```

Install backend dependencies:
```bash
cd ../backend
npm install
```

Running the Application
Frontend
Start the development server:

```bash
cd frontend
npm run dev
```

The frontend development server will be available at http://localhost:5173.

Backend
Start the backend server:

```bash
cd backend
npm run dev
```

The backend server will be running on http://localhost:5500.

Made with ❤️ by Sushant Babu Prasai
Feel free to contribute to the project or raise issues if you find any bugs or have suggestions for improvements.
