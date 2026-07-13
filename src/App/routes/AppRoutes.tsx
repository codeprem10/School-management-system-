
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../modules/Dashboard/Dashboard';
import Students from '../modules/Students/Students';
import Teachers from '../modules/Teachers/Teachers';
import Attendance from '../modules/Attendance/Attendance';
import MainLayout from '../components/layout/MainLayout';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/students" element={<Students />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/attendance" element={<Attendance />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes