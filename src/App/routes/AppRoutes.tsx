import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../modules/Dashboard/Dashboard';
import Students from '../modules/Students/students';
import Teachers from '../modules/Teachers/teachers';
import Attendence from '../modules/Attendence/Attendence';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/students" element={<Students />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/attendence" element={<Attendence />} />
    </Routes>
  )
}

export default AppRoutes