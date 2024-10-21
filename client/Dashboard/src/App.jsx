import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage.jsx';
import AuthPage from './pages/AuthPage.jsx';
import Login from './pages/Login.jsx';
import RequestDetails from './pages/RequestDetails.jsx';
import PatientDetails from './pages/PatientDetails.jsx';
import PatientList from './pages/PatientsList.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/patients" element={<DashboardPage />} />
      <Route path="/patientdetails" element={<PatientList />} />
      <Route path="/patients/:id" element={<PatientDetails />} />
      <Route path="/auth/:id" element={<AuthPage />} />
      <Route path="/requestdetails" element={<RequestDetails />} />
    </Routes>
  );
};

export default App;
