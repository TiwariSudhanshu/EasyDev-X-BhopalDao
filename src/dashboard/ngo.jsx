import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';

function NgoDashboard() {
    const [isDark, setIsDark] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const [post, setPost] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [campaignData, setCampaignData] = useState({
        name: '',
        fund: '',
        description: '',
        eligibility: ''
    });

    // Function to handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCampaignData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setPost(campaignData); // Set the campaign data to the post state
        setShowModal(false); // Close the modal after submission
    };

    return (
        <div className={`${isDark ? 'dark' : ''} `}>
            <div className="flex-row min-h-screen bg-gray-100 dark:bg-gray-900">
                <button
                    className="p-2 bg-blue-500 text-white fixed top-4 left-4 z-50 md:hidden"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    {showSidebar ? 'Hide' : 'Show'} Menu
                </button>

                {/* Side Panel */}
                <aside className={`transform top-0 left-0 w-64 bg-white dark:bg-gray-800 p-4 fixed h-full z-40 transition-transform duration-300 ease-in-out
                    ${showSidebar ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
                    <div className="text-white text-[4vmax] flex flex-col justify-center items-center pb-8 pt-4">
                        <FaUser />
                        <li className="text-gray-600 list-none dark:text-gray-300 font-bold text-[1.9vmax]">
                            <a href="#profile" className="mt-10 flex items-center">NGO Dashboard </a>
                        </li>
                    </div>
                    <div className="mt-4 text-gray-600 dark:text-gray-300">
                        {/* Sidebar Start Campaign option */}
                        <button
                            className="bg-blue-400 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                                dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            onClick={() => setShowModal(true)}
                        >
                            Start a Campaign
                        </button>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 flex justify-center items-center p-6 ml-64 md:ml-0 min-h-screen">
                    {post ? (
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-white mb-4">Campaign Details</h2>
                            <p className="text-white"><strong>Name:</strong> {post.name}</p>
                            <p className="text-white"><strong>Fund:</strong> {post.fund}</p>
                            <p className="text-white"><strong>Description:</strong> {post.description}</p>
                            <p className="text-white"><strong>Eligibility:</strong> {post.eligibility}</p>
                        </div>
                    ) : (
                        <div>
                            <h1 className="font-bold text-white text-center mb-4">You currently have no campaigns open</h1> 
                            <button
                                className="bg-blue-400 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                                dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-[2vmax] ml-[5vmax]"
                                onClick={() => setShowModal(true)}
                            >
                                Start a Campaign
                            </button>
                        </div>
                    )}
                </main>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Start a Campaign</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 dark:text-gray-300 mb-2">Campaign Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={campaignData.name}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 dark:text-gray-300 mb-2">Fund</label>
                                <input
                                    type="number"
                                    name="fund"
                                    value={campaignData.fund}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 dark:text-gray-300 mb-2">Campaign Description</label>
                                <textarea
                                    name="description"
                                    value={campaignData.description}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 dark:text-gray-300 mb-2">Eligibility Criteria</label>
                                <input
                                    type="text"
                                    name="eligibility"
                                    value={campaignData.eligibility}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg"
                                    required
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="mr-2 px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NgoDashboard;
