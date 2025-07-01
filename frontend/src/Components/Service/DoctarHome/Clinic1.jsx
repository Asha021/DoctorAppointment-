import React from 'react'
import { useNavigate } from 'react-router-dom';

const Clinic1 = () => {
    const navigate = useNavigate()
    return (
        <div className="h-screen bg-gray-100">
          <div 
            className="grid w-full h-full bg-no-repeat bg-cover bg-center brightness-100 bg-[url('/clinic.png')] items-center  text-center px-6 md:px-20 "
          >
           <div className='text-left'>
           <h2 className="md:text-3xl text-2xl font-cutumFont mb-4">India's best online appointment scheduling platform</h2>
            <h1 className="md:text-5xl text-4xl font-bold mb-6">Book An Clinic Appointment</h1>
            <h4 className="text-lg mb-8">Personalized Care + Priority Access · Starts at just ₹99</h4>
            <button onClick={()=>{navigate('/ConsultDoctar')}} className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">Book Appointment</button>
           </div>
          </div>
        </div>
      );
}

export default Clinic1
