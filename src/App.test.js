import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import theme from './utils/theme';

// Admin Routes
import AdminDashboard from './pages/admin/Dashboard';
import UserManagement from './pages/admin/UserManagement';
import CourseManagement from './pages/admin/CourseManagement';

// Student Routes
import StudentDashboard from './pages/student/Dashboard';
import CourseView from './pages/student/CourseView';
import Profile from './pages/student/Profile';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<UserManagement />} />
          <Route path="/admin/courses" element={<CourseManagement />} />

          {/* Student Routes */}
          <Route path="/dashboard" element={<StudentDashboard />} />
          <Route path="/course/:id" element={<CourseView />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
