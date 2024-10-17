import React from 'react';
import { Link } from 'react-router-dom';

const PatientList = ({ patients }) => {
    return (
        <div className="mx-auto p-6 bg-white shadow-md rounded-lg">
            <div className="overflow-y-auto h-96">
                <ul className="space-y-4">
                    {patients.map((patient) => (
                        <li
                            key={patient._id}
                            className="flex items-center justify-between p-4 bg-gray-100 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-200 cursor-pointer"
                        >
                            <Link
                                to={`/patients/${patient._id}`}
                                className="flex-1 text-lg font-semibold hover:text-blue-800 transition duration-200"
                            >
                                <span className="font-normal">{patient.name}</span>
                            </Link>
                            <span className="text-gray-600 font-medium mx-4 text-center w-24">
                                Age: {patient.age}
                            </span>
                            <span className="text-gray-600 font-medium text-right w-48">
                                {patient.condition}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PatientList;
