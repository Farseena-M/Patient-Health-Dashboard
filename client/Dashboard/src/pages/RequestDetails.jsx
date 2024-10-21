import React, { useEffect, useState } from 'react';
import { adminInstance } from '../axios_instance/AdminInstance';
import SideBar from '../components/Sidebar';

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
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <SideBar />
            <div className="p-8 bg-purple-100 min-h-screen font-sans">
                {/* <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
                    <ul className="space-y-6">
                        {authRequests.length > 0 ? (
                            authRequests.map((request) => (
                                <li
                                    key={request._id}
                                    className="p-6 bg-gray-50 border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200"
                                >
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <p className="text-lg font-semibold text-gray-800">
                                                <strong>Patient Name:</strong> {request.patientId ? request.patientId.name : 'Unknown Patient'}
                                            </p>
                                            <p className="text-lg font-semibold text-gray-700"><strong>Treatment Type:</strong> {request.treatmentType}</p>
                                            <p className="text-lg text-gray-600"><strong>Insurance Plan:</strong> {request.insurancePlan}</p>
                                            <p className="text-lg text-gray-600"><strong>Diagnosis Code:</strong> {request.diagnosisCode}</p>
                                        </div>
                                        <div>
                                            <p className="text-lg text-gray-600"><strong>Status:</strong> <span className={`font-semibold ${request.status === 'Pending' ? 'text-yellow-500' : 'text-green-500'}`}>{request.status}</span></p>
                                            <p className="text-lg text-gray-600"><strong>Date of Service:</strong> {new Date(request.dateOfService).toLocaleDateString()}</p>
                                            <p className="text-lg text-gray-600"><strong>Requested on:</strong> {new Date(request.createdAt).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <p className="text-center text-lg text-gray-700">No authorization requests available.</p>
                        )}
                    </ul>
                </div> */}
            </div>
        </>
    );
};

export default RequestDetails;
