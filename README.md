# Task Management API

## What is this?
A task management system that lets you switch between two ways of storing data: a real database (PostgreSQL) or a simple file (JSON). Built with Node.js and TypeScript.

---

## Main Features
- **Switch storage easily** - Use a database or a simple file
- **Full task operations** - Create, read, update, delete tasks
- **Type safety** - Built with TypeScript to catch errors early
- **Ready for production** - Clean code structure that scales
- **Automatic data loading** - Start with sample tasks if needed

---

## Quick Start Guide

### 1. Install
```bash
npm install
```

### 2. Setup
Create a file called `.env` in the project folder:

**Option A: Use PostgreSQL (recommended for real use)**
```env
PORT=3000
DATASOURCE=postgres
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_NAME=tasks_db
```

**Option B: Use simple file storage (good for testing)**
```env
PORT=3000
DATASOURCE=json
```

### 3. Run
```bash
npm start
```
Your API will be ready at: `http://localhost:3000`

---

## How to Use the API

### Get all tasks
```bash
GET http://localhost:3000/tasks
```

### Get one task
```bash
GET http://localhost:3000/tasks/1
```

### Create a task
```bash
POST http://localhost:3000/tasks
Content-Type: application/json

{
  "userId": 1,
  "title": "Buy groceries",
  "completed": false
}
```

### Update a task
```bash
PUT http://localhost:3000/tasks/1
Content-Type: application/json

{
  "title": "Buy groceries and cook dinner",
  "completed": true
}
```

### Delete a task
```bash
DELETE http://localhost:3000/tasks/1
```

---

## Setting Up the Database

If you chose PostgreSQL:

### 1. Create the database
```bash
createdb tasks_db
```

### 2. Run migrations (creates the tables)
```bash
npm run migrate
```

### 3. Add sample data (optional)
```bash
npm run seed
```
*This adds 10 sample tasks to get you started*

---

## Switching Between Storage Options

### Using PostgreSQL (Database)
- Good for multiple users
- Data stays safe
- Can handle lots of tasks
- Set `DATASOURCE=postgres` in `.env`

### Using JSON File
- Simple to set up
- No database needed
- Good for testing
- Set `DATASOURCE=json` in `.env`
- Tasks are saved in `data/tasks.json`

---

## Project Structure
```
src/
├── controllers/      # Handles web requests
├── services/        # Business logic
├── repositories/    # Saves/reads data
├── models/         # Data types
├── data/          # JSON file storage
├── migrations/    # Database setup
└── seeds/        # Sample data
```

---

## Development Commands

```bash
# Run in development mode
npm run dev

# Build the project
npm run build

# Run tests
npm test

# Reset database
npm run migrate:rollback
npm run migrate
```

---

## Important Notes

1. **Choose one storage option** - Your `.env` file decides if you use database or file
2. **Data doesn't sync** - Tasks in database won't automatically appear in JSON file
3. **Start with sample data** - Use `npm run seed` to get sample tasks
4. **Switch anytime** - Change `.env` and restart to switch storage

---

## Need Help?

Check if:
- Your `.env` file is in the right place
- PostgreSQL is running (if using database)
- The port 3000 is free
- You've run `npm install` first

The API is now ready at `http://localhost:3000`
