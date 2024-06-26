# Event Management Platform

## Description

This is a basic Event Management Platform (EMP) designed for an event-organizing company. The platform supports adding, updating, deleting, retrieving, and listing events.

## Data Structure

The `Event` object has the following structure:

```json
{
  "id": "string",
  "eventName": "string",
  "eventDate": "Date",
  "organizer": "string",
  "email": "string",
  "phone": "string",
  "location": {
    "street": "string",
    "city": "string",
    "state": "string",
    "zip": "string"
  },
  "createdAt": "Date",
  "updatedAt": "Date"
}

```

## Instructions to Run the Program

### Clone the repository:
git clone <repository-url>
cd event-management-platform

### Install dependencies:

npm install


### Start the application:
npm start

The application will run on `http://localhost:3000`


## API Endpoints
- POST /api/events: Add a new event.
- PUT /api/events/
: Update an existing event.
- DELETE /api/events/
: Delete an event.
- GET /api/events/
: Retrieve an event by its ID.
- GET /api/events: List all events with optional filters.
