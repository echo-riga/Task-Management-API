Task Management API

A simple Task Management API built with Node.js, Express, TypeScript, PostgreSQL, and Knex.
The project supports two storage options: a local JSON file or PostgreSQL. The active datasource is selected through an environment variable.

Table of Contents

Features

API Endpoints

Data Model

Data Sources

Environment Setup

Running the Application

Database Migrations

Seeding Data

Architecture

Notes

Features

CRUD API for tasks

Dual persistence layer:

Local JSON file

PostgreSQL via Knex

Strict TypeScript typing (models, DTOs, repository interfaces)

Knex migrations for database schema

Seed data from a public API

API Endpoints
Method Endpoint Description
GET /tasks Get all tasks
GET /tasks/:id Get a task by id
POST /tasks Create a new task
PUT /tasks/:id Update a task
DELETE /tasks/:id Delete a task
Data Model
Task
type Task = {
id: number;
userId: number;
title: string;
completed: boolean;
}

DTOs
type TaskCreateDto = {
userId: number;
title: string;
completed?: boolean;
}

type TaskUpdateDto = {
title?: string;
completed?: boolean;
}

Data Sources
JSON (Local File)

Saves data to data/tasks.json

Persists across server restarts

Matches behavior of PostgreSQL implementation

PostgreSQL (Database)

Uses Knex for all queries

Requires migration to create schema

Configured through environment variables

Environment Setup

Create your own .env file (no .env.example included intentionally):

PORT=3000
DATASOURCE=postgres

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_NAME=tasks_db

DATASOURCE values:

json

postgres

Running the Application

Install dependencies:

npm install

Start server:

npm start

Database Migrations

Run migrations (Postgres):

npm run migrate

Rollback:

npm run migrate:rollback

Seeding Data

The seed script fetches 10 tasks from the public API:

https://jsonplaceholder.typicode.com/todos

Run:

npm run seed

Note: Seed will only run if the datasource is empty.

Architecture
Controller → Service → Repository → Data Source

Controllers handle HTTP requests and validation

Services contain business logic

Repositories handle persistence

Factory selects the correct repository based on DATASOURCE

Notes

JSON and PostgreSQL data are not automatically synced.
The system only uses the selected datasource.

Seed is designed to run only once (when datasource is empty).
