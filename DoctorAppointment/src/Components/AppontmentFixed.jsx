import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const AppointmentFixed = () => {
  const navigate = useNavigate();
   

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white py-16 p-6 rounded-2xl shadow-lg text-center w-96">
        <FaCheckCircle className="text-green-500 w-full text-7xl mb-4" />
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Appointment Confirmed!
        </h2>
        <p className="text-gray-600">Your appointment has been successfully booked.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-7 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default AppointmentFixed;
