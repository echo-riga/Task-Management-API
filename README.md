Task Management API
A production-ready Task Management API built with Node.js, Express, and TypeScript, featuring dual persistence options for flexibility in development and deployment.

Table of Contents
Technology Stack

Features

API Endpoints

Data Models

Architecture

Setup and Installation

Running the Application

Database Operations

Project Structure

Configuration

Technology Stack
Runtime: Node.js

Framework: Express.js

Language: TypeScript (strict mode)

Database: PostgreSQL

ORM/Query Builder: Knex.js

Persistence Options: PostgreSQL or Local JSON file

Features
Complete CRUD operations for task management

Configurable data source (PostgreSQL or JSON file)

Type-safe development with strict TypeScript configuration

Database migrations and seeding

RESTful API design

Scalable service-repository architecture

API Endpoints
Method	Endpoint	Description
GET	/tasks	Retrieve all tasks
GET	/tasks/:id	Retrieve a specific task
POST	/tasks	Create a new task
PUT	/tasks/:id	Update an existing task
DELETE	/tasks/:id	Delete a task
Data Models
Task Entity
typescript
interface Task {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}
Data Transfer Objects
Task Creation DTO
typescript
interface TaskCreateDto {
  userId: number;
  title: string;
  completed?: boolean;  // Optional, defaults to false
}
Task Update DTO
typescript
interface TaskUpdateDto {
  title?: string;
  completed?: boolean;
}
Architecture
The application follows a layered architecture pattern:

text
Controller → Service → Repository → Data Source
Controller: Handles HTTP requests, validation, and response formatting

Service: Contains business logic and use cases

Repository: Manages data persistence operations

Factory Pattern: Dynamically selects JSON or PostgreSQL repository based on configuration

Setup and Installation
Prerequisites
Node.js (v14 or higher)

PostgreSQL (optional, if using database)

npm or yarn package manager

Installation Steps
Clone and install dependencies

bash
npm install
Configure environment variables
Create a .env file in the project root:

env
PORT=3000
DATASOURCE=postgres  # or 'json' for local file storage

# PostgreSQL configuration (required if DATASOURCE=postgres)
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=tasks_db
Database setup (if using PostgreSQL)

bash
# Create the database
createdb tasks_db
Running the Application
Development Mode
bash
npm run dev
Production Mode
bash
npm start
The application will be available at http://localhost:3000 (or your configured port).

Database Operations
Migrations
Run database migrations to create necessary tables:

bash
npm run migrate
Rollback migrations if needed:

bash
npm run migrate:rollback
Seeding
Populate the database with sample data from a public API:

bash
npm run seed
The seed script fetches 10 sample tasks from https://jsonplaceholder.typicode.com/todos and only runs if the selected data source is empty.

Project Structure
text
src/
├── controllers/     # HTTP request handlers
├── services/       # Business logic layer
├── repositories/   # Data access layer
├── models/         # TypeScript interfaces and types
├── data/           # JSON file storage (if used)
├── migrations/     # Database schema migrations
├── seeds/         # Database seed files
└── config/        # Configuration and factory patterns
Configuration
Data Source Selection
The application supports two persistence options, selected via the DATASOURCE environment variable:

PostgreSQL (DATASOURCE=postgres)

Full database capabilities

ACID compliance

Suitable for production

Local JSON file (DATASOURCE=json)

File-based storage in data/tasks.json

Data persists across application restarts

Identical API behavior to PostgreSQL

Ideal for development and testing

Important Notes
The JSON and PostgreSQL data sources are not automatically synchronized

The application uses only the data source specified in the environment configuration

Switching data sources requires appropriate configuration and data migration

All TypeScript files are compiled with strict type checking enabled
