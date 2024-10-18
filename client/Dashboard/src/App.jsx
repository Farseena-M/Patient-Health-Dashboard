import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage.jsx';
import AuthPage from './pages/AuthPage.jsx';
import PatientDetails from './pages/PatientDetails.jsx';
import Login from './pages/Login.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/patients" element={<DashboardPage />} />
      <Route path="/patients/:id" element={<PatientDetails />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
};

export default App;
