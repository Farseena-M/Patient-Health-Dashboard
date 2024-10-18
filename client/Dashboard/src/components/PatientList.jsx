import React from 'react';
import { Link } from 'react-router-dom';

const PatientList = ({ patients }) => {
    return (
        <div className="mx-auto p-6 bg-white shadow-md rounded-lg">
            <div className="overflow-y-auto h-96">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-16 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Patient Name</th>
                            <th className="px-16 py-4 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">Age</th>
                            <th className="px-16 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Condition</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {patients.map((patient, index) => (
                            <tr
                                key={patient._id}
                                className={`hover:bg-gray-100 transition duration-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                            >
                                <td className="px-16 py-6 whitespace-nowrap">
                                    <Link
                                        to={`/patients/${patient._id}`}
                                        className="text-lg font-semibold text-gray-800 hover:text-purple-600 transition duration-200"
                                    >
                                        {patient.name}
                                    </Link>
                                </td>
                                <td className="px-16 py-6 text-center text-gray-600 font-medium">
                                    {patient.age}
                                </td>
                                <td className="px-16 py-6 text-left text-gray-600 font-medium">
                                    {patient.condition}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PatientList;
