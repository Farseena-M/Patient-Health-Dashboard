import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { adminInstance } from '../axios_instance/AdminInstance';

const PatientDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [patient, setPatient] = useState(null);
    const [loading, setLoading] = useState(true);
    const [nextLoading, setNextLoading] = useState(false);

    useEffect(() => {
        const fetchPatient = async () => {
            try {
                const res = await adminInstance.get(`/api/patient/${id}`);
                setPatient(res.data.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching patient details:", error);
                setLoading(false);
            }
        };

        fetchPatient();
    }, [id]);

    const handleNextClick = () => {
        setNextLoading(true);
        setTimeout(() => {
            navigate('/auth');
        }, 1000);
    };

    if (loading) {
        return (
            <div className="bg-gray-100 min-h-screen flex items-center justify-center">
                <Spinner />
            </div>
        );
    }

    if (!patient) {
        return (
            <div className="bg-gray-100 min-h-screen flex items-center justify-center">
                <div className="text-lg font-semibold">No patient found.</div>
            </div>
        );
    }

    return (
        <div className="bg-gray-100 min-h-screen p-6 flex items-center justify-center">
            <div className="container mx-auto bg-white rounded-lg border border-gray-300 shadow-md p-6 max-w-md">
                <h1 className="text-3xl font-extrabold text-purple-800 text-center mb-4">{patient.name}</h1>
                <div className="flex justify-center mb-4">
                    <p className="text-lg font-medium border-b-2 border-purple-800 inline-block">
                        Patient Details
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    <div className="text-md text-gray-700 text-center">
                        <strong>Age:</strong> {patient.age}
                    </div>
                    <div className="text-md text-gray-700 text-center">
                        <strong>Condition:</strong> {patient.condition}
                    </div>
                    <div className="text-md text-gray-700 text-center">
                        <strong> Treatment Result:</strong> {patient.treatmentResult}
                    </div>
                    <div className="text-md text-gray-700 text-center">
                        <strong> Medication:</strong> {patient.medication}
                    </div>
                    <div className="text-md text-gray-700 text-center">
                        <strong> Lab Results:</strong> {patient.labResults}
                    </div>
                </div>
                <div className="flex justify-center mt-6">
                    <button
                        className={`bg-purple-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-purple-700 transition duration-200 ${nextLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={handleNextClick}
                        disabled={nextLoading}
                    >
                        {nextLoading ? 'Loading...' : 'Next ->'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PatientDetails;
