# AI Context - School Management System

# Rules for Any AI

Before making changes:

- Preserve the existing folder structure.
- Follow feature-based architecture.
- Use TypeScript.
- Use Material UI v9 syntax (`sx={{}}`).
- Explain the concept first, then provide code.
- Keep explanations brief unless asked for details.
- Prefer reusable components over large page components.
- Do not refactor unrelated code while implementing a feature.

## Project Overview

This project is a learning-oriented School Management System built to simulate an enterprise React application similar to the developer's internship project.

The objective is not just to build features, but to understand professional project architecture, React best practices, Redux Toolkit, API design, and reusable component development.

---

# Tech Stack

## Frontend

- React 19
- TypeScript
- Vite
- React Router DOM
- Material UI v9
- Material UI DataGrid

## State Management

- Redux Toolkit
- createAsyncThunk

## API

- Axios
- JSON Server (Local REST API)

## Database

- db.json

---

# Project Architecture

Feature-based architecture is followed.

src
│
├── api
│   ├── axios.ts
│   └── endpoints.ts
│
├── models
│   ├── StudentModel.ts
│   ├── TeacherModel.ts
│   ├── AttendanceModel.ts
│   └── DashboardModel.ts
│
├── App
│   ├── components
│   ├── modules
│   │
│   ├── Dashboard
│   ├── Students
│   ├── Teachers
│   └── Attendance
│
│   ├── routes
│   └── store

---

# Students Module Structure

Students

├── api
├── redux
├── Students.tsx
│
└── components
    ├── StudentHeader.tsx
    ├── StudentSearch.tsx
    ├── StudentDataGrid.tsx
    ├── StudentActionsCell.tsx
    └── StudentDialog.tsx

---

# Current Features Completed

## Project

- React Setup
- TypeScript
- Material UI
- React Router
- GitHub Repository

## Layout

- Sidebar
- Navbar
- Main Layout
- Outlet Routing

## Dashboard

- Dashboard Cards
- Responsive Layout

## API

- Shared Axios Instance
- API Endpoints
- Modular API Layer

## Models

- Student
- Teacher
- Attendance
- Dashboard

## Redux Toolkit

- Store
- Provider
- Student Slice
- createAsyncThunk
- extraReducers
- Typed Hooks
- Redux Flow

## Student Module

- Student DataGrid
- Avatar + Name Column
- Email
- Phone
- Gender Chip
- Age
- Search
- Actions Column
- Student Header
- Student Dialog UI

---

# Current API

The project no longer uses DummyJSON.

Current backend

JSON Server

Base URL

http://localhost:3001

Current endpoint

/students

Future endpoints

/teachers

/attendance

---

# Redux Flow

Students.tsx

↓

dispatch(fetchStudents())

↓

studentThunk.ts

↓

studentApi.ts

↓

Axios

↓

JSON Server

↓

extraReducers

↓

Redux Store

↓

useAppSelector()

↓

Students.tsx Re-render

---

# Concepts Learned

- React Router
- Nested Routing
- Layout Components
- Feature-based Architecture
- Shared Models
- Shared Axios Instance
- Redux Toolkit
- Slice
- Async Thunk
- Extra Reducers
- Typed Hooks
- DataGrid
- renderCell
- Parent-Child Communication
- Lifting State Up
- Component Reusability

---

# Current Progress

Overall Progress

Approximately 85%

Completed

- Project Setup
- Layout
- Dashboard
- Models
- API Layer
- Redux Toolkit
- Student Module UI
- Search
- DataGrid
- Dialog UI

Remaining

- Seed JSON Server with student data
- Add Student (POST)
- Edit Student (PUT)
- Delete Student (DELETE)
- Teacher Module
- Attendance Module
- Dashboard Improvements
- Loading UI
- Error UI
- Final Refactoring

---

# Important Architectural Decisions

- Shared models outside App
- Feature-based architecture
- Shared Axios instance
- Typed Redux Hooks
- Material UI DataGrid
- Parent controls dialogs
- Child components remain reusable
- JSON Server replaces DummyJSON for CRUD

---

# Development Philosophy

While building this project:

- Explain concepts before writing code.
- Keep explanations concise.
- Follow enterprise architecture.
- Prefer reusable components.
- Separate UI from business logic.
- Avoid putting large amounts of code inside page components.

---

# Immediate Next Task

1. Seed JSON Server with student data.
2. Connect Students API to JSON Server.
3. Implement Add Student (POST).
4. Implement Edit Student (PUT).
5. Implement Delete Student (DELETE).

---

# Final Goal

Complete a production-style School Management System that demonstrates:

- Enterprise React Architecture
- Redux Toolkit
- Material UI
- DataGrid
- CRUD Operations
- REST APIs
- Component Reusability

This project should closely resemble the architecture used in the developer's internship project so that concepts can be transferred directly.