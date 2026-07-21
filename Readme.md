# School Management System

A React + TypeScript based School Management System built to practice real-world frontend architecture and state management patterns used in the IT industry.

## Overview

This project was created to bridge the gap between learning React through tutorials and understanding how React applications are actually developed in professional environments.

While the UI is intentionally simple, the focus of this project is on implementing industry-standard architecture, state management, API handling, and CRUD operations.

---

## Features

### Student Module
- View Students
- Search Students
- Add Student
- Edit Student
- Delete Student
- Redux Managed State

### Dashboard
- Dashboard Layout
- Statistics Cards
- Modular Component Structure

### Common Features
- Material UI Components
- Reusable Dialogs
- Reusable DataGrid Components
- API Layer Separation
- Redux Toolkit Architecture
- TypeScript Support

---

## Tech Stack

### Frontend
- React.js
- TypeScript
- Material UI (MUI)

### State Management
- Redux Toolkit
- createSlice
- createAsyncThunk
- Typed Redux Hooks

### API Layer
- Axios

### Mock Backend
- JSON Server

### Development Tools
- Vite
- Git
- GitHub

---

## Project Architecture

```text
src
│
├── components
│
├── modules
│   ├── Dashboard
│   ├── Students
│   ├── Teachers
│   └── Attendance
│
├── models
│
├── store
│   ├── store.ts
│   └── hooks.ts
│
├── services
│
└── layouts
```

---

## CRUD Flow

### Fetch Students

```text
Students Page
    ↓
dispatch(fetchStudents())
    ↓
Thunk
    ↓
API Layer
    ↓
JSON Server
    ↓
Redux Store
    ↓
DataGrid
```

### Add Student

```text
Dialog
    ↓
onSave()
    ↓
Thunk
    ↓
API
    ↓
POST Request
    ↓
Redux Store
    ↓
DataGrid Update
```

### Edit Student

```text
Edit Button
    ↓
Selected Student
    ↓
Dialog Prefill
    ↓
PUT Request
    ↓
Redux Store Update
    ↓
DataGrid Update
```

### Delete Student

```text
Delete Button
    ↓
Thunk
    ↓
DELETE Request
    ↓
Redux Store Update
    ↓
DataGrid Update
```

---

## Concepts Practiced

### React
- Component Architecture
- Props
- State Management
- Controlled Forms
- Reusable Components

### Advanced React Hooks
- useEffect
- useMemo
- useCallback

### Redux Toolkit
- Store Configuration
- Slices
- Async Thunks
- Redux Flow
- Typed Hooks

### API Management
- Axios Instance
- Endpoint Management
- Async Requests
- Error Handling

### TypeScript
- Interfaces
- Type Safety
- Component Props Typing

---

## What I Learned

This project helped me understand the difference between tutorial-based React development and real-world industry development.

Key learnings include:

- Structuring large React applications
- Managing global state using Redux Toolkit
- Implementing CRUD operations using async thunks
- Separating UI, business logic, API layer, and state management
- Building reusable and scalable components
- Working with TypeScript in a production-like environment

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Run React App:

```bash
npm run dev
```

Run JSON Server:

```bash
npx json-server --watch db.json --port 3001
```

---

## Future Improvements

- Teacher Module
- Attendance Module
- Authentication
- Form Validation
- Pagination
- Sorting
- RTK Query
- Unit Testing
- Role-Based Access

---

## Contributing

Students and developers are welcome to fork this repository and use it as a learning resource for:

- React.js
- TypeScript
- Redux Toolkit
- CRUD Operations
- Frontend Architecture

If this project helps you learn something new, feel free to give it a ⭐.
