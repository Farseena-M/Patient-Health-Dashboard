import React, { useState } from 'react';
import { FaBars, FaUserInjured, FaInfoCircle, FaUserShield, FaClipboardList, FaSignOutAlt } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';

const SideBar = () => {
    const Nvgt = useNavigate()
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const handleLogout = () => {
        localStorage.clear();
        Nvgt('/');
    };

    return (
        <div>
            <button
                onClick={toggleDrawer}
                className="p-2 text-white bg-purple-800 fixed top-4 left-4 z-50 rounded-full"
            >
                <FaBars />
            </button>
            <div
                className={`fixed top-0 left-0 w-64 h-screen bg-gradient-to-b from-purple-900 to-purple-900 text-white flex flex-col shadow-lg transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 ease-in-out z-40`}
            >
                <div className="p-4 text-2xl font-bold border-b border-purple-600 flex items-center justify-center">
                    Dashboard
                </div>
                <nav className="flex-grow p-4">
                    <ul>
                        <li className="mb-6">
                            <NavLink to="/patients" className="flex items-center hover:bg-gray-600 hover:shadow-md transition-all duration-300">
                                <FaUserInjured className="mr-3 text-lg" />
                                <span className="text-lg">Patients</span>
                            </NavLink>
                        </li>
                        <li className="mb-6">
                            <NavLink to="/auth" className="flex items-center hover:bg-gray-600 hover:shadow-md transition-all duration-300">
                                <FaUserShield className="mr-3 text-lg" />
                                <span className="text-lg">Auth Request</span>
                            </NavLink>
                        </li>
                        <li className="mb-6">
                            <NavLink to="/patientdetails" className="flex items-center hover:bg-gray-600 hover:shadow-md transition-all duration-300">
                                <FaInfoCircle className="mr-3 text-lg" />
                                <span className="text-lg">Patient Details</span>
                            </NavLink>
                        </li>
                        <li className="mb-6">
                            <NavLink to="/requestdetails" className="flex items-center hover:bg-gray-600 hover:shadow-md transition-all duration-300">
                                <FaClipboardList className="mr-3 text-lg" />
                                <span className="text-lg">Request details</span>
                            </NavLink>
                        </li>
                        <li className="mb-6">
                            <button
                                onClick={handleLogout}
                                className="flex items-center w-full text-left hover:bg-gray-600 hover:shadow-md transition-all duration-300"
                            >
                                <FaSignOutAlt className="mr-3 text-lg" />
                                <span className="text-lg">Logout</span>
                            </button>
                        </li>
                    </ul>
                </nav>
                <div className="p-4 border-t border-gray-600 text-center">
                    &copy; 2024 DashBoard
                </div>
            </div>
            {isDrawerOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-30"
                    onClick={toggleDrawer}
                ></div>
            )}
        </div>
    );
}

export default SideBar;
