import React from 'react';
import {useNavigate} from 'react-router-dom'

const SecHome = () => {
    const navigate = useNavigate()
  return (
    <div className="h-screen bg-gray-100">
      <div 
        className="grid w-full h-full bg-no-repeat bg-cover bg-center bg-[url('home.png')]   items-center  text-center px-6 md:px-20 "
      >
       <div className='text-left'>
       <h2 className="text-4xl font-semibold mb-4">India's best Doctor Consultation at Home</h2>
        <h1 className="text-5xl font-bold mb-6">Expert Doctor Visit At Home</h1>
        <h4 className="text-lg mb-8">Personalized Care + Priority Access · Starts at just ₹99</h4>
        <button onClick={()=>{navigate('/ConsultDoctar')}} className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">Book Appointment</button>
       </div>
      </div>
    </div>
  );
};

export default SecHome;
