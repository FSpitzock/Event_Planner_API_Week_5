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

Postman:

Get All Events

GET 
http://localhost:3000/api/events


Filter by Category

GET
http://localhost:3000/api/events?category=Workshop


Filter by Date

GET
http://localhost:3000/api/events?date=2026-03-01

Get Event by ID

GET
http://localhost:3000/api/events/:id
Returns single event or 404 if not found.

Update Event

PUT
http://localhost:3000/api/events/:id

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
http://localhost:3000/api/events/:id


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


----- Test Database Information -----
To populate the database for testing:

1. Open Postman (or curl).
2. Send a POST request to http://localhost:3000/api/events
3. Copy/paste each JSON event from below into the body.

[
  {
    "title": "Sprint Planning Session",
    "description": "Plan tasks for upcoming development sprint",
    "date": "2026-03-10T15:00:00Z",
    "location": "Zoom",
    "category": "Meeting",
    "attendees": ["frank@example.com", "dev1@example.com", "dev2@example.com"]
  },
  {
    "title": "Advanced Node.js Workshop",
    "description": "Deep dive into Express middleware and architecture",
    "date": "2026-04-05T18:00:00Z",
    "location": "UCF Engineering Building",
    "category": "Workshop",
    "attendees": ["student1@ucf.edu", "student2@ucf.edu"]
  },
  {
    "title": "Florida Tech Conference 2026",
    "description": "Annual developer conference",
    "date": "2026-06-20T13:00:00Z",
    "location": "Orlando Convention Center",
    "category": "Conference",
    "attendees": ["speaker@example.com", "attendee@example.com"]
  },
  {
    "title": "Doctor Appointment",
    "description": "Annual physical checkup",
    "date": "2026-02-28T09:30:00Z",
    "location": "Downtown Medical Center",
    "category": "Personal",
    "attendees": []
  },
  {
    "title": "Product Launch Strategy Meeting",
    "description": "Finalize launch marketing plan",
    "date": "2026-05-12T16:00:00Z",
    "location": "Main Office Boardroom",
    "category": "Meeting",
    "attendees": ["marketing@example.com", "sales@example.com"]
  },
  {
    "title": "Mock Technical Interview",
    "description": "Practice backend system design questions",
    "date": "2026-03-22T19:00:00Z",
    "location": "Google Meet",
    "category": "Personal",
    "attendees": ["mentor@example.com"]
  },
  {
    "title": "Startup Pitch Night",
    "description": "Present MVP to investors",
    "date": "2026-07-01T17:00:00Z",
    "location": "Innovation Hub Orlando",
    "category": "Conference",
    "attendees": ["investor1@example.com", "investor2@example.com"]
  },
  {
    "title": "JavaScript Bootcamp",
    "description": "Intro to ES6+ and async programming",
    "date": "2026-04-18T14:00:00Z",
    "location": "Online - Zoom",
    "category": "Workshop",
    "attendees": ["studentA@example.com", "studentB@example.com"]
  },
  {
    "title": "Q2 Performance Review",
    "description": "Evaluate quarterly performance and KPIs",
    "date": "2026-07-15T20:00:00Z",
    "location": "Corporate HQ",
    "category": "Meeting",
    "attendees": ["manager@example.com", "frank@example.com"]
  },
  {
    "title": "Developer Networking Night",
    "description": "Meet local developers and exchange ideas",
    "date": "2026-08-10T18:30:00Z",
    "location": "Downtown Orlando Tech Bar",
    "category": "Other",
    "attendees": ["devA@example.com", "devB@example.com", "devC@example.com"]
  }
]


Author

Frank Spitzock
Backend Developer | Full-Stack Engineering Student
