import React, { useEffect, useState } from 'react';
import { adminInstance } from '../axios_instance/AdminInstance';
import { FaHeartbeat, FaUserAlt, FaPills, FaFlask } from 'react-icons/fa';
import SideBar from '../components/Sidebar';

const PatientList = () => {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const response = await adminInstance.get('/api/patients');
                console.log(response);

                if (response.data && Array.isArray(response.data.data)) {
                    setPatients(response.data.data);
                } else {
                    setError('Invalid data structure received');
                }

                setLoading(false);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch patient details');
                setLoading(false);
            }
        };

        fetchPatients();
    }, []);

    if (loading) {
        return <div className="text-center mt-10 text-lg text-purple-700">Loading...</div>;
    }

    if (error) {
        return <div className="text-center mt-10 text-lg text-red-500">{error}</div>;
    }

    return (
        <>
            <SideBar />
            <div className="p-8 bg-purple-50 min-h-screen font-sans flex items-center justify-center">
                <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-lg p-8 w-full">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {patients.length > 0 ? (
                            patients.map((patient) => (
                                <li key={patient._id} className="p-6 bg-white border border-purple-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col justify-center items-center text-center">
                                    <div className="flex flex-col items-center">
                                        <h2 className="text-xl font-semibold text-purple-900 flex items-center mb-2">
                                            <FaUserAlt className="mr-2 text-purple-600" /> {patient.name}
                                        </h2>
                                        <span className="text-sm text-gray-500">Age: {patient.age}</span>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-gray-600 flex items-center justify-center">
                                            <FaHeartbeat className="mr-2 text-purple-500" /> <strong>Condition:</strong> {patient.condition}
                                        </p>
                                        <p className="text-gray-600 flex items-center justify-center mt-2">
                                            <FaPills className="mr-2 text-purple-500" /> <strong>Medication:</strong> {patient.medication}
                                        </p>
                                        <p className="text-gray-600 flex items-center justify-center mt-2">
                                            <FaFlask className="mr-2 text-purple-500" /> <strong>Lab Results:</strong> {patient.labResults}
                                        </p>
                                        <p className="text-gray-600 flex items-center justify-center mt-2">
                                            <FaHeartbeat className="mr-2 text-purple-500" /> <strong>Treatment Result:</strong> {patient.treatmentResult}
                                        </p>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <p className="text-center text-lg text-gray-700 col-span-full">No patient details available.</p>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default PatientList;
