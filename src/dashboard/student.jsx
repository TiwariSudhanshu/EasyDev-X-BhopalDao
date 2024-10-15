// src/components/DashboardLayout.jsx
import React, { useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { FaUser } from "react-icons/fa";

const DashboardLayout = ({ children }) => {
    const [isDark, setIsDark] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false); // State to manage sidebar visibility

    return (
        <div className={`${isDark ? 'dark' : ''}`}>
            <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">

                {/* Toggle Button for smaller devices */}
                <button
                    className="p-2 bg-blue-500 text-white fixed top-4 left-4 z-50 md:hidden"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    {showSidebar ? 'Hide' : 'Show'} Menu
                </button>

                {/* Side Panel */}
                <aside className={`transform top-0 left-0 w-64 bg-white dark:bg-gray-800 p-4 fixed h-full z-40 transition-transform duration-300 ease-in-out
            ${showSidebar ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
                    <div className=" text-white text-[4vmax] flex flex-col justify-center items-center pb-8 pt-4">
                        <FaUser />
                        <li className=" text-gray-600 list-none dark:text-gray-300 font-bold text-[1.9vmax]">
                            <a href="#profile" className='flex items-center'>Profile <CiEdit /> </a>
                        </li>
                    </div>
                    <div className='h-[80%] flex flex-col justify-between'>
                        <ul className="mt-4">

                            <li className="text-gray-600 dark:text-gray-300 mt-2">
                                <a href="#scholarship">Applied Scholarships</a>
                            </li>
                        </ul>

                        {/* Dark Mode Toggle */}
                        <div className="mt-6">
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                onClick={() => setIsDark(!isDark)}
                            >
                                Toggle {isDark ? 'Light' : 'Dark'} Mode
                            </button>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 p-6 ml-64 md:ml-0">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
