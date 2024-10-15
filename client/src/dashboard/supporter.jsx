import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';

function Supporter() {
    // Dummy campaign data
    const campaigns = [
        { name: 'Save the Rainforest', eligibility: 'General Public', fund: 5000, description: 'Help protect the rainforest.', donated: false },
        { name: 'Clean Water Project', eligibility: 'Public Donations', fund: 2000, description: 'Provide clean water to rural areas.', donated: false },
        { name: 'Education for All', eligibility: 'Everyone', fund: 1500, description: 'Support underprivileged children.', donated: false },
    ];

    // State to keep track of donations and view mode
    const [donatedCampaigns, setDonatedCampaigns] = useState([]);
    const [view, setView] = useState('live'); // 'live' or 'donations'

    // Handle donation action
    const handleDonate = (index) => {
        setDonatedCampaigns([...donatedCampaigns, campaigns[index]]); // Add campaign to donations
    };

    // Toggle between Live Campaigns and My Donations
    const switchView = (newView) => {
        setView(newView);
    };

    return (
        <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
            {/* Sidebar */}
            <aside className="w-64 bg-white dark:bg-gray-800 p-4 fixed h-full">
                <div className="text-white text-[4vmax] flex flex-col justify-center items-center pb-8 pt-4">
                    <FaUser />
                    <li className="text-gray-600 list-none dark:text-gray-300 font-bold text-[1.9vmax]">
                        <a href="#profile" className="mt-10 flex items-center">Supporter Dashboard</a>
                    </li>
                </div>
                <div className="mt-4 text-gray-600 dark:text-gray-300">
                    <button
                        onClick={() => switchView('live')}
                        className={`w-full text-left py-2 px-4 mb-2 ${view === 'live' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'} rounded-lg`}
                    >
                        Live Campaigns
                    </button>
                    <button
                        onClick={() => switchView('donations')}
                        className={`w-full text-left py-2 px-4 ${view === 'donations' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'} rounded-lg`}
                    >
                        My Donations
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex justify-center items-center p-6 ml-64">
                <div className="text-center">
                    {view === 'live' ? (
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Live Campaigns</h2>
                            <ul className="space-y-4">
                                {campaigns.map((campaign, index) => (
                                    <div key={index} className="rounded-lg bg-white dark:bg-gray-700 p-6 shadow-lg">
                                        <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">{campaign.name}</h2>
                                        <p className="text-gray-700 dark:text-gray-300 mb-2">
                                            <strong>Eligibility:</strong> {campaign.eligibility}
                                        </p>
                                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                                            <strong>Fund Needed:</strong> ${campaign.fund}
                                        </p>
                                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                                            <strong>Description:</strong> {campaign.description}
                                        </p>
                                        {donatedCampaigns.find(d => d.name === campaign.name) ? (
                                            <p className="text-green-600 font-semibold">Already Donated</p>
                                        ) : (
                                            <button
                                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                                                onClick={() => handleDonate(index)}
                                            >
                                                Donate
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">My Donations</h2>
                            <ul className="space-y-4">
                                {donatedCampaigns.length > 0 ? (
                                    donatedCampaigns.map((campaign, index) => (
                                        <div key={index} className="rounded-lg bg-white dark:bg-gray-700 p-6 shadow-lg">
                                            <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">{campaign.name}</h2>
                                            <p className="text-gray-700 dark:text-gray-300 mb-2">
                                                <strong>Eligibility:</strong> {campaign.eligibility}
                                            </p>
                                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                                <strong>Amount Donated:</strong> ${campaign.fund}
                                            </p>
                                            <p className="text-green-600 font-semibold">Donation Successful</p>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-white">You have not donated to any campaigns yet.</p>
                                )}
                            </ul>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

export default Supporter;
