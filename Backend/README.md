# Node.js Backend with PostgreSQL

This project is a simple Node.js backend API built with Express and PostgreSQL. It provides a RESTful API that connects to a PostgreSQL database, with environment variable configuration for sensitive data and `cors` enabled to allow cross-origin requests for Panda Express POS.

## Table of Contents

- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Project Locally](#running-the-project-locally)

## Project Structure
```
my-backend/
├── config/                # Configuration files (e.g., database connection)
│   └── db.js
├── controllers/           # Route handlers (business logic)
│   └── exampleController.js
├── routes/                # API route definitions
│   └── exampleRoutes.js
├── middleware/            # Custom middleware (e.g., auth, error handling)
├── .env                   # Environment variables (not included in version control)
├── .gitignore             # Specifies files ignored in version control
├── index.js               # Main server entry point
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation
```


## Prerequisites

1. **Node.js**: Ensure you have Node.js installed (version 14 or higher is recommended).
2. **PostgreSQL**: Ensure PostgreSQL is installed and running, and you have created a database for the project.

## Installation
Run:
```
npm install
```
## Environment Variables
Create a .env file in the Backend folder with the following credentials:
```
# Server configuration
PORT=5000

# PostgreSQL Database configuration
PG_HOST=localhost
PG_PORT=5432
PG_USER=your_db_username
PG_PASSWORD=your_db_password
PG_DATABASE=your_db_name
```

## Running the Project Locally
1. Make sure your PostgreSQL is running and be sure to be connected to the school Cisco VPN connection
2. Run the server locally:
```
npm run dev
```

