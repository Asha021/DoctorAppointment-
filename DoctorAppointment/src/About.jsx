import React from 'react';
import { FaAward } from "react-icons/fa";
import { LuFileDigit } from "react-icons/lu";
import { MdOutlineMessage } from "react-icons/md";
import Specilties from './Specilties';
import { useNavigate } from 'react-router-dom';

function About(){
  const navigate = useNavigate()
  return (
    <div className=''>
      {/* Main Section - Grid for Small to Medium Screens */}
      <div className='grid grid-cols-1 md:grid-cols-2 bg-pink-100 p-10 md:p-20 border'>
        {/* Left Content */}
        <div className='font-sans animate-slideDownX text-gray-800'>
          <p className='font-bold text-4xl mt-10 pt-8'>Skip The Travel!</p>
          <p className='font-semibold text-4xl mt-1 mb-3'>Take Online Doctor Consultation</p>
          <p className='text-lg'>Private Consultation + Audio Call. Starts At Just ₹199</p>
          <p className='text-lg mb-5'>+170 Doctors Are Online</p>
          <button 
            type='submit' 
            onClick={()=>{navigate('/ConsultDoctar')}}
            className='p-5 mb-5 px-10 bg-blue-500 text-white font-semibold text-lg py-4'>
            Consult Now
          </button>
          
          {/* Features Section */}
          <div className='flex font-sans mt-14 text-gray-800'>
            <p className='flex items-center pr-5'>
              <FaAward className='mr-2' /> Verified Doctor
            </p>
            <p className='flex items-center pr-5'>
              <LuFileDigit className='mr-2' /> Digital Prescription
            </p>
            <p className='flex items-center'>
              <MdOutlineMessage className='mr-2' /> Free Follow-up
            </p>
          </div>
        </div>

        {/* Right Content (Image) */}
        <div>
          <img 
            src="photo.png" 
            alt="Doctor Consultation" 
            className='mt-10 md:mt-20 w-full object-contain' 
          />
        </div>
      </div>

      {/* Specialties Section */}
      <Specilties />
    </div>
  );
}

export default About;
