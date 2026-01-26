Task Management API

A Task Management API built using:

Node.js

Express

TypeScript (strict mode)

PostgreSQL

Knex.js

It supports two storage options:

Local JSON file

PostgreSQL database

The active datasource is selected using an environment variable.

Table of Contents

Features

API Endpoints

Data Model

Data Sources

Setup

Running the App

Migrations

Seeding

Architecture

Notes

Features

CRUD operations for tasks

Dual persistence (JSON or PostgreSQL)

Strict TypeScript typing across the entire codebase

Knex migrations for PostgreSQL schema

Seed data from a public API

API Endpoints
GET     /tasks
GET     /tasks/:id
POST    /tasks
PUT     /tasks/:id
DELETE  /tasks/:id

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
JSON (Local file)

Data saved in data/tasks.json

Data persists across restarts

Behavior matches PostgreSQL implementation

PostgreSQL (Database)

Uses Knex for all queries

Requires migration to create tables

Setup

Install dependencies

npm install


Create your own .env file

Example:

PORT=3000
DATASOURCE=postgres

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_NAME=tasks_db


.env.example is not included intentionally. You can set your own values.

Running the App
npm start

Migrations (Postgres)

Run migrations:

npm run migrate


Rollback:

npm run migrate:rollback

Seeding Data

Seed fetches 10 tasks from:

https://jsonplaceholder.typicode.com/todos

Run:

npm run seed


The seed script only runs if the datasource is empty.

Architecture
Controller -> Service -> Repository -> Data Source


Controller: handles HTTP requests and validation

Service: business logic

Repository: data persistence

Factory: selects JSON or Postgres repository based on DATASOURCE

Notes

JSON and PostgreSQL are not synced automatically.

The app only uses the datasource selected in .env.
