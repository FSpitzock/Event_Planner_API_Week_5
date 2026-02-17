# Event_Planner_API_Week_5
Event Planner API - Capstone Project

# Event Planner API

A RESTful API for managing events built with **Express**, **MongoDB**, **Mongoose**, and **TypeScript**.

This application allows users to create, retrieve, update, delete, and filter events such as meetings, conferences, workshops, and personal schedules.

It demonstrates real-world backend architecture including:

- MVC pattern
- Schema validation
- Date-based filtering
- Environment configuration
- Proper error handling
- TypeScript integration

---

## Tech Stack

- Node.js
- Express
- MongoDB
- Mongoose
- TypeScript
- dotenv

---

## Project Structure

event-planner-api/
├── src/
│ ├── config/
│ │ └── db.ts
│ ├── models/
│ │ ├── index.ts
│ │ └── Event.ts
│ ├── controllers/
│ │ └── eventController.ts
│ ├── routes/
│ │ └── eventRoutes.ts
│ └── app.ts
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md



---

## Features

- Create events
- Retrieve all events
- Filter events by category
- Filter events by date (on or after)
- Retrieve event by ID
- Update event
- Delete event
- Schema validation with Mongoose
- MongoDB ObjectId validation
- Automatic timestamps (createdAt, updatedAt)

---

## Event Model

| Field        | Type      | Description |
|--------------|-----------|-------------|
| title        | String    | Required, trimmed |
| description  | String    | Optional |
| date         | Date      | Required |
| location     | String    | Optional |
| category     | String    | Enum: Meeting, Conference, Personal, Workshop, Other |
| attendees    | String[]  | Array of emails or names |
| createdAt    | Date      | Auto-generated |
| updatedAt    | Date      | Auto-updated |

---

## Environment Variables

Create a `.env` file in the root directory using the template below:

MONGO_URL=mongodb://localhost:27017
MONGO_DB=event_planner
PORT=3000


Make sure `.env` is included in `.gitignore`.

---

## Installation

### 1. Clone the repository

git clone <your-repo-url>
cd event-planner-api


### 2. Install dependencies

npm install


### 3. Configure environment variables

cp .env.example .env


Edit `.env` with your MongoDB configuration.

### 4. Run the development server

npm run dev


Server will start at:

http://localhost:3000


---

## API Endpoints

Base URL:

http://localhost:3000/api/events


---

### Create Event

**POST** `/api/events`

```json
{
  "title": "Node.js Workshop",
  "description": "Learn advanced Node.js concepts",
  "date": "2026-03-15T14:00:00Z",
  "location": "UCF Engineering Building",
  "category": "Workshop",
  "attendees": ["student1@ucf.edu", "student2@ucf.edu"]
}
Response: 201 Created

Get All Events

GET /api/events

Returns all events.

Filter by Category

GET

/api/events?category=Workshop

Filter by Date

Returns events on or after a specific date.

GET
/api/events?date=2026-03-01

Get Event by ID

GET
/api/events/:id
Returns single event or 404 if not found.

Update Event

PUT
/api/events/:id

Example:
{
  "location": "Online - Zoom Link",
  "attendees": [
    "student1@ucf.edu",
    "student2@ucf.edu",
    "student3@ucf.edu"
  ]
}

Delete Event

DELETE
/api/events/:id


Error Handling

The API returns appropriate HTTP status codes:

200 – Success

201 – Created

400 – Validation error / Invalid ObjectId / Invalid date

404 – Resource not found

500 – Server error

Validation includes:

Required title

Valid date format

Category enum enforcement

Valid MongoDB ObjectId

Testing

You can test the API using:

Postman

Insomnia

Thunder Client (VS Code)

Recommended tests:

Create event with valid data

Create event missing title (should return 400)

Fetch events filtered by category

Fetch events filtered by date

Use invalid ObjectId (should return 400)

Delete non-existent event (should return 404)

Future Enhancements

Pagination (page and limit)

Sorting (sort=date&order=asc)

Upcoming events route

Title search

Express-validator middleware

Recurring event support

CSV export

Author

Frank Spitzock
Backend Developer | Full-Stack Engineering Student
