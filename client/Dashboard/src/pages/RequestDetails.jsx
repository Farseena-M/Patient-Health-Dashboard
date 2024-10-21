import React, { useEffect, useState } from 'react';
import { adminInstance } from '../axios_instance/AdminInstance';
import SideBar from '../components/Sidebar';
import { FaUser, FaBriefcaseMedical, FaFileMedicalAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';

const RequestDetails = () => {
    const [authRequests, setAuthRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAuthRequests = async () => {
            try {
                const response = await adminInstance.get('/api/authRequest/all-requests');
                setAuthRequests(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch data');
                setLoading(false);
            }
        };

        fetchAuthRequests();
    }, []);

    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-600">{error}</div>;
    }

    return (
        <>
            <SideBar />
            <div className="p-4 md:p-8 bg-purple-50 min-h-screen font-sans">
                <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-4 md:p-8">
                    <ul className="space-y-6">
                        {authRequests.length > 0 ? (
                            authRequests.map((request) => (
                                <li
                                    key={request._id}
                                    className="p-4 md:p-6 bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col md:flex-row items-start"
                                >
                                    <div className="flex-shrink-0 mb-4 md:mb-0">
                                        <FaFileMedicalAlt className="text-3xl text-purple-600" />
                                    </div>
                                    <div className="ml-0 md:ml-4 w-full">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-sm font-semibold text-gray-800">
                                                    <FaUser className="inline-block mr-1" />
                                                    <strong>Patient Name:</strong> {request.patientId ? request.patientId.name : 'Unknown Patient'}
                                                </p>
                                                <p className="text-sm font-semibold text-gray-700">
                                                    <FaBriefcaseMedical className="inline-block mr-1" />
                                                    <strong>Treatment Type:</strong> {request.treatmentType}
                                                </p>
                                                <p className="text-sm text-gray-600">
                                                    <strong>Insurance Plan:</strong> {request.insurancePlan}
                                                </p>
                                                <p className="text-sm text-gray-600">
                                                    <strong>Diagnosis Code:</strong> {request.diagnosisCode}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600">
                                                    <FaCalendarAlt className="inline-block mr-1" />
                                                    <strong>Date of Service:</strong> {new Date(request.dateOfService).toLocaleDateString()}
                                                </p>
                                                <p className="text-sm text-gray-600">
                                                    <FaClock className="inline-block mr-1" />
                                                    <strong>Requested on:</strong> {new Date(request.createdAt).toLocaleDateString()}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <p className="text-center text-lg text-gray-700">No authorization requests available.</p>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default RequestDetails;
