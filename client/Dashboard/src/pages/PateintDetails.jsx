import React, { useEffect, useState } from 'react';
import { adminInstance } from '../axios_instance/AdminInstance';

const PatientDetails = () => {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const response = await adminInstance.get('/api/patients'); 
                setPatients(response.data.data); 
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch patient details');
                setLoading(false);
            }
        };

        fetchPatients();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="p-8 bg-purple-100 min-h-screen font-sans">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-2xl font-semibold mb-4">Patient Details</h1>
                <ul className="space-y-4">
                    {patients.length > 0 ? (
                        patients.map((patient) => (
                            <li key={patient._id} className="p-6 bg-gray-50 border border-gray-200 rounded-md shadow-sm">
                                <h2 className="text-lg font-semibold text-gray-800">Name: {patient.name}</h2>
                                <p className="text-gray-600"><strong>Age:</strong> {patient.age}</p>
                                <p className="text-gray-600"><strong>Condition:</strong> {patient.condition}</p>
                                <p className="text-gray-600"><strong>Treatment Result:</strong> {patient.treatmentResult}</p>
                                <p className="text-gray-600"><strong>Medication:</strong> {patient.medication}</p>
                                <p className="text-gray-600"><strong>Lab Results:</strong> {patient.labResults}</p>
                            </li>
                        ))
                    ) : (
                        <p className="text-center text-lg text-gray-700">No patient details available.</p>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default PatientDetails;
