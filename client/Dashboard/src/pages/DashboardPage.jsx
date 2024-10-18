import React, { useState, useEffect } from 'react';
import PatientList from '../components/PatientList';
import { adminInstance } from '../axios_instance/AdminInstance';

const DashboardPage = () => {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const res = await adminInstance.get('/api/patients');
        setPatients(res.data.data);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };
    fetchPatients();
  }, []);

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen p-6 flex items-center justify-center">
      <div className="container mx-auto bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-extrabold text-purple-800">Patients Dashboard</h1>
        </div>
        <div className="flex justify-center mb-4">
          <input
            type="text"
            placeholder="Search patients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-96 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="overflow-y-auto h-96 mt-4 hidden-scrollbar">
          <PatientList patients={filteredPatients} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
