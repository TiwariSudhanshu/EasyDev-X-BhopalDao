// src/components/Modal.jsx
import React from 'react';

const Modal = ({ isOpen, onClose, scholarship, onApply, isAppliedSuccess }) => {
  if (!isOpen) return null; // If modal is not open, do not render anything

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6  rounded-lg max-w-md">
        {isAppliedSuccess ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-green-600">Success!</h2>
            <p className="mb-6">You have successfully applied for the {scholarship.name} scholarship.</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4 dark:text-white">{scholarship.name}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong>Eligibility:</strong> {scholarship.eligibility}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Amount:</strong> ${scholarship.amount}
            </p>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                onClick={onApply}
              >
                Apply Now
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
