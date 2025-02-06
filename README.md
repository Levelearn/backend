# Gamified Learning App Backend

This repository contains the backend code for a gamified learning application, built using Express.js, Node.js, MySQL, and Prisma.  It provides a REST API for managing users, courses, progress, rewards, and other game-related functionalities.

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Database Schema](#database-schema)
- [Testing with Postman](#testing-with-postman)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This backend application serves as the core logic for a gamified learning platform. It handles data persistence, user authentication, authorization, and the business rules for awarding points, badges, and other rewards based on user progress.  The API is designed to be consumed by a frontend application (React for Web, and Flutter for Mobile).

## Technologies Used

- **Node.js:** JavaScript runtime environment
- **Express.js:** Web framework for Node.js
- **MySQL:** Relational database management system
- **Prisma:** ORM (Object-Relational Mapper) for database access
- **Postman:** Tool for testing API endpoints
- **NPM/Yarn:** Package manager

## Features

- User Management
- Course management
- Chapter Management
- Material Management (Included in Chapter)
- Assessment Management (Included in Chapter)
- Assignment Management (Included in Chapter)

## Installation

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/TA-2425-13/backend.git](https://github.com/TA-2425-13/backend.git)

2. **Navigate to the project directory:**

    ```bash
   cd backend

3. **Install dependencies:**

    ```bash
   npm install  # or yarn install

4. **Configure the database connection:**

    - Create a `.env` file in the root directory.
    - Create a database in MySQL named `graphci`
    - Copy this code into the `.env` file, and adjust the value with your database
        ```
        DB_HOST=localhost
        DB_USER=root
        DB_PASSWORD=root
        DB_DATABASE=graphci
        JWT_SECRET=your_secret_token

        DATABASE_URL="mysql://root:root@localhost:3306/graphci"

4. **Generate Prisma Client:**

    ```bash
   npx prisma generate

5. **Run Database Migrations:**

    ```bash
   npx prisma migrate dev --name init

## Running The Application

    ```bash
   nodemon run dev

## API Documentation

Base URL:
`http://localhost:3000/api/`

| Features  | Function  | Method    | Endpoint      | Body      |
| --------  | --------- |---------- |-------------- | --------  |
| User      | Get All Users | GET       | `/user`       | -   |
| User    | Get User by ID | GET       | `/user/:id`   | -  |
| User    | Create User | POST      | `/user`       | `{name, username, password, user_role, student_id, student_point, student_course, student_badge, instructor_id, instructor_course}` |
| User    | Update User | PUT       | `/user/:id`   | `{name, username, password, user_role, student_id, student_point, student_course, student_badge, instructor_id, instructor_course}`    |
| User    | Delete User | DELETE    | `/user/:id`   |   -     |