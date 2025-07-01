import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear("users"); // Clear user data from localStorage
    navigate('/signup'); // Redirect to signup page
  };

  const cancel = () => {
    navigate('/'); // Redirect to home page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
       
        
        <h2 className="text-center text-gray-800 font-semibold mb-8">
          Are you sure you want to log out? This action cannot be undone.
        </h2>
        <div className="flex justify-between">
          <button
            onClick={logout}
            className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
          >
            Log Out
          </button>
          <button
            onClick={cancel}
            className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogOut;
