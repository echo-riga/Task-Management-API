# Task Management API

## Overview
A production-ready Task Management API built with Node.js, Express, and TypeScript, featuring dual persistence options for flexibility in development and deployment environments.

---

## Features
- Complete CRUD operations for task management
- Configurable data sources (PostgreSQL or JSON file)
- Strict TypeScript typing across entire codebase
- Database migrations with Knex.js
- Seed data from public APIs
- RESTful API design

---

## Technology Stack
| Component | Technology |
|-----------|------------|
| Backend | Node.js, Express |
| Language | TypeScript (strict mode) |
| Database | PostgreSQL |
| Query Builder | Knex.js |
| Persistence | PostgreSQL or JSON file |

---

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/tasks` | Retrieve all tasks |
| GET | `/tasks/:id` | Retrieve specific task |
| POST | `/tasks` | Create new task |
| PUT | `/tasks/:id` | Update existing task |
| DELETE | `/tasks/:id` | Delete task |

---

## Data Models

### Task Entity
```typescript
type Task = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}
```

### Task Creation DTO
```typescript
type TaskCreateDto = {
  userId: number;
  title: string;
  completed?: boolean;
}
```

### Task Update DTO
```typescript
type TaskUpdateDto = {
  title?: string;
  completed?: boolean;
}
```

---

## Quick Start

### 1. Installation
```bash
npm install
```

### 2. Configuration
Create a `.env` file:
```env
PORT=3000
DATASOURCE=postgres  # or 'json'

# PostgreSQL Configuration
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=tasks_db
```

### 3. Run Application
```bash
npm start
```

---

## Database Operations

### Migrations
```bash
# Run migrations
npm run migrate

# Rollback migrations
npm run migrate:rollback
```

### Seeding
```bash
# Seed database with sample data
npm run seed
```
*Seed data is fetched from: https://jsonplaceholder.typicode.com/todos*

---

## Architecture
```
Controller → Service → Repository → Data Source
```

- **Controller**: HTTP request handling and validation
- **Service**: Business logic layer
- **Repository**: Data persistence operations
- **Data Source**: PostgreSQL or JSON file (selected via DATASOURCE)

---

## Configuration Notes
- Data source selection is controlled by the `DATASOURCE` environment variable
- PostgreSQL and JSON data sources are not automatically synchronized
- The application uses only the configured data source
- Strict TypeScript validation is enforced throughout the codebase

---

## Development
```bash
# Development mode with hot reload
npm run dev

# Build TypeScript
npm run build

# Production start
npm start
```

---

## Project Structure
```
src/
├── controllers/
├── services/
├── repositories/
├── models/
├── data/
├── migrations/
├── seeds/
└── config/
```
