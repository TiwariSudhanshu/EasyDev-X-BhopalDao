// // src/components/DashboardLayout.jsx
// import React, { useState } from 'react';
// import { CiEdit } from "react-icons/ci";
// import { FaUser } from "react-icons/fa";
// import { Link } from 'react-router-dom'

// const DashboardLayout = ({ children }) => {
//     const [isDark, setIsDark] = useState(false);
//     const [showSidebar, setShowSidebar] = useState(false); // State to manage sidebar visibility
//     const [explore, setExplore] = useState(true)
//     const [applied, setApplied] = useState(false)

//     return (
//         <div className={`${isDark ? 'dark' : ''}`}>
//             <div className="flex min-h-screen bg-gray-100 text-black dark:text-white dark:bg-gray-900">

//                 {/* Toggle Button for smaller devices */}
//                 <button
//                     className="p-2 bg-blue-500 text-white fixed top-4 left-4 z-50 md:hidden"
//                     onClick={() => setShowSidebar(!showSidebar)}
//                 >
//                     {showSidebar ? 'Hide' : 'Show'} Menu
//                 </button>

//                 {/* Side Panel */}
//                 <aside className={`transform top-0 left-0 w-64 bg-white dark:bg-gray-800 p-4 fixed h-full z-40 transition-transform duration-300 ease-in-out
//             ${showSidebar ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
//                     <div className=" text-white text-[4vmax] flex flex-col justify-center items-center pb-8 pt-4">
//                         <FaUser />
//                         <li className=" text-gray-600 list-none dark:text-gray-300 font-bold text-[1.9vmax]">
//                             <a href="#profile" className='flex items-center'>Profile <CiEdit /> </a>
//                         </li>
//                     </div>
//                     <div className='h-[80%] flex flex-col justify-between'>
//                         {/* <h1 className=""> Student Dashboard</h1> */}
//                         <ul className="mt-4 font-bold flex flex-col">

//                             <Link className="text-gray-600 dark:text-gray-300 mt-2" onClick={() => {

//                                 setExplore(true);
//                                 setApplied(false);
//                             }}>
//                                 Explore Scholarships
//                             </Link>
//                             <Link className="text-gray-600 dark:text-gray-300 mt-2" onClick={() => {

//                                 setExplore(false);
//                                 setApplied(true);
//                             }}>
//                                 Applied Scholarships
//                             </Link>


//                         </ul>


//                     </div>
//                 </aside>

//                 {/* Main Content Area */}
//                 <main className="flex-1 p-6 ml-64 md:ml-0 text-white">
//                     {/*  */}

//                     <div className=" h-full text-white ml-[20vmax]">

//                         {
//                             applied ? <>
//                                 <h1 className="font-bold text-[2vmax]">Applied Scholarships</h1>
//                                 <div className="pt-20 flex gap-8">
//                                     <div className="h-[25vmax] rounded-lg w-[20vmax] bg-white/70 p-8">
//                                         <h1 className="text-black text-[2vmax] font-bold"> Jio Foundation  </h1>
//                                         <p className='pt-4 text-black/50'>
//                                             This is jio foundation Scholarship provided to student
//                                             This is jio foundation Scholarship provided to student
//                                             This is jio foundation Scholarship provided to student

//                                         </p>
//                                         <p className="p-2 mt-8 font-bold text-[1.5vmax] text-black/40 "> 1000$ Received</p>
//                                     </div> <div className="h-[25vmax] rounded-lg w-[20vmax] bg-white/70 p-8">
//                                         <h1 className="text-black text-[2vmax] font-bold"> Jio Foundation  </h1>
//                                         <p className='pt-4 text-black/50'>
//                                             This is jio foundation Scholarship provided to student
//                                             This is jio foundation Scholarship provided to student
//                                             This is jio foundation Scholarship provided to student

//                                         </p>
//                                         <p className="p-2 mt-8 font-bold text-[1.5vmax] text-black/40 "> 1000$ Received</p>
//                                     </div>
//                                     <div className="h-[25vmax] rounded-lg w-[20vmax] bg-white/70 p-8">
//                                         <h1 className="text-black text-[2vmax] font-bold"> Jio Foundation  </h1>
//                                         <p className='pt-4 text-black/50'>
//                                             This is jio foundation Scholarship provided to student
//                                             This is jio foundation Scholarship provided to student
//                                             This is jio foundation Scholarship provided to student

//                                         </p>
//                                         <p className="p-2 mt-8 font-bold text-[1.5vmax] text-black/40 "> 1000$ Received</p>
//                                     </div>
//                                 </div>
//                             </> :
//                                 <>
//                                     <h1 className="font-bold text-[2vmax]">Explore Scholarships</h1>
//                                     <div className="pt-20 flex gap-8 flex-wrap">
//                                         <div className="h-[25vmax] rounded-lg w-[20vmax] bg-white/70 p-8">
//                                             <h1 className="text-black text-[2vmax] font-bold"> Jio Foundation  </h1>
//                                             <p className='pt-4 text-black/50'>
//                                                 This is jio foundation Scholarship provided to student
//                                                 This is jio foundation Scholarship provided to student
//                                                 This is jio foundation Scholarship provided to student

//                                             </p>
//                                             <p className=" rounded-lg text-center p-2 mt-8 font-bold text-[1.5vmax] bg-blue-600 text-white"> Apply Now
//                                             </p>
//                                         </div>
//                                         <div className="h-[25vmax] rounded-lg w-[20vmax] bg-white/70 p-8">
//                                             <h1 className="text-black text-[2vmax] font-bold"> Jio Foundation  </h1>
//                                             <p className='pt-4 text-black/50'>
//                                                 This is jio foundation Scholarship provided to student
//                                                 This is jio foundation Scholarship provided to student
//                                                 This is jio foundation Scholarship provided to student

//                                             </p>
//                                             <p className=" rounded-lg text-center p-2 mt-8 font-bold text-[1.5vmax] bg-blue-600 text-white"> Apply Now
//                                             </p>
//                                         </div>
//                                         <div className="h-[25vmax] rounded-lg w-[20vmax] bg-white/70 p-8">
//                                             <h1 className="text-black text-[2vmax] font-bold"> Jio Foundation  </h1>
//                                             <p className='pt-4 text-black/50'>
//                                                 This is jio foundation Scholarship provided to student
//                                                 This is jio foundation Scholarship provided to student
//                                                 This is jio foundation Scholarship provided to student

//                                             </p>
//                                             <p className=" rounded-lg text-center p-2 mt-8 font-bold text-[1.5vmax] bg-blue-600 text-white"> Apply Now
//                                             </p>
//                                         </div>
//                                         <div className="h-[25vmax] rounded-lg w-[20vmax] bg-white/70 p-8">
//                                             <h1 className="text-black text-[2vmax] font-bold"> Jio Foundation  </h1>
//                                             <p className='pt-4 text-black/50'>
//                                                 This is jio foundation Scholarship provided to student
//                                                 This is jio foundation Scholarship provided to student
//                                                 This is jio foundation Scholarship provided to student

//                                             </p>
//                                             <p className=" rounded-lg text-center p-2 mt-8 font-bold text-[1.5vmax] bg-blue-600 text-white"> Apply Now
//                                             </p>
//                                         </div>

//                                     </div>
//                                 </>
//                         }
//                     </div>

//                 </main>
//             </div>
//         </div>
//     );
// };

// export default DashboardLayout;




// src/components/DashboardLayout.jsx
import React, { useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Modal from '../components/model';  // Import the Modal component

const DashboardLayout = ({ children }) => {
    const [isDark, setIsDark] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const [explore, setExplore] = useState(true);
    const [applied, setApplied] = useState(false);

    // Modal related state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentScholarship, setCurrentScholarship] = useState(null); // Store the selected scholarship
    const [isAppliedSuccess, setIsAppliedSuccess] = useState(false);

    // Track applied scholarships
    const [appliedScholarships, setAppliedScholarships] = useState([]);

    // Example scholarships (you can replace this with dynamic data or fetch from an API)
    const scholarships = [
        { id: 1, name: 'Jio Foundation', eligibility: 'Undergraduate Students', amount: '1000' },
        { id: 2, name: 'Reliance Foundation', eligibility: 'Graduate Students', amount: '1500' },
        { id: 3, name: 'Tata Trusts', eligibility: 'Postgraduate Students', amount: '2000' },
        { id: 4, name: 'Infosys Foundation', eligibility: 'PhD Students', amount: '2500' },
    ];

    // Handle applying for the scholarship
    const handleApply = () => {
        // Add the current scholarship to the applied list
        setAppliedScholarships([...appliedScholarships, currentScholarship]);

        // Show success message
        setIsAppliedSuccess(true);

        // After a few seconds, close the modal and navigate to Applied Scholarships
        setTimeout(() => {
            setIsAppliedSuccess(false);  // Hide success message
            setIsModalOpen(false);       // Close the modal
            setApplied(true);            // Navigate to the applied scholarships section
            setExplore(false);           // Ensure explore is false
        }, 2000);  // Show success message for 2 seconds
    };

    return (
        <div className={`${isDark ? 'dark' : ''}`}>
            <div className="flex min-h-screen bg-gray-100 text-black dark:text-white dark:bg-gray-900">

                {/* Toggle Button for smaller devices */}
                <button
                    className="p-2 bg-blue-500 text-white fixed top-4 left-4 z-50 md:hidden rounded-md"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    {showSidebar ? 'Hide' : 'Show'} Menu
                </button>

                {/* Side Panel */}
                <aside className={`transform top-0 left-0 w-64 bg-white dark:bg-gray-800 p-4 fixed h-full z-40 transition-transform duration-300 ease-in-out
            ${showSidebar ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
                    <div className="text-white text-[4vmax] flex flex-col justify-center items-center pb-8 pt-4">
                        <FaUser size={40} />
                        <li className="text-gray-600 list-none dark:text-gray-300 font-bold text-[1.9vmax] mt-4">
                            <a href="#profile" className='flex items-center'>
                                Profile <CiEdit className='ml-2' />
                            </a>
                        </li>
                    </div>
                    <div className='h-[80%] flex flex-col justify-between'>
                        <ul className="mt-4 font-bold flex flex-col space-y-2 text-[1.5vmax] gap-4 ">
                            <Link
                                to="#explore"
                                className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
                                onClick={() => {
                                    setExplore(true);
                                    setApplied(false);
                                    setShowSidebar(false); // Close sidebar on link click
                                }}>
                                Explore Scholarships
                            </Link>
                            <Link
                                to="#applied"
                                className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
                                onClick={() => {
                                    setExplore(false);
                                    setApplied(true);
                                    setShowSidebar(false); // Close sidebar on link click
                                }}>
                                Applied Scholarships
                            </Link>
                        </ul>

                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 p-6 ml-64 md:ml-0">
                    <div className="h-full text-white ml-[20vmax]">

                        {/* Explore Scholarships Section */}
                        {explore && (
                            <>
                                <h1 className="font-bold text-3xl mb-6">Explore Scholarships</h1>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-wrap pt-10 ">
                                    {scholarships.map((scholarship) => (
                                        <div key={scholarship.id} className="rounded-lg bg-white dark:bg-gray-700 p-6 shadow-lg">
                                            <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">{scholarship.name}</h2>
                                            <p className="text-gray-700 dark:text-gray-300 mb-2">
                                                <strong>Eligibility:</strong> {scholarship.eligibility}
                                            </p>
                                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                                <strong>Amount:</strong> ${scholarship.amount}
                                            </p>
                                            <button
                                                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full"
                                                onClick={() => {
                                                    setCurrentScholarship(scholarship);
                                                    setIsModalOpen(true);
                                                }}
                                            >
                                                Apply Now
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}

                        {/* Applied Scholarships Section */}
                        {applied && (
                            <>
                                <h1 className="font-bold text-3xl mb-6">Applied Scholarships</h1>
                                {appliedScholarships.length > 0 ? (
                                    <div className="grid pt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {appliedScholarships.map((scholarship, index) => (
                                            <div key={index} className="rounded-lg bg-white dark:bg-gray-700 p-6 shadow-lg">
                                                <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">{scholarship.name}</h2>
                                                <p className="text-gray-700 dark:text-gray-300 mb-2">
                                                    <strong>Eligibility:</strong> {scholarship.eligibility}
                                                </p>
                                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                                    <strong>Amount:</strong> ${scholarship.amount}
                                                </p>
                                                <p className="text-green-600 font-semibold">Application Status: Submitted</p>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-gray-700 dark:text-gray-300">No scholarships applied yet.</p>
                                )}
                            </>
                        )}

                    </div>

                    {/* Modal */}
                    <Modal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        scholarship={currentScholarship}
                        onApply={handleApply}
                        isAppliedSuccess={isAppliedSuccess}
                    />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
