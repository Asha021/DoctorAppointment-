import React, { useEffect, useState } from "react";
import AppointmentFixed from "./AppontmentFixed";
import { useNavigate } from "react-router-dom";

const OtpGnrtr = ({otpg}) => {
    const navigate = useNavigate()
    const [otp,setOtp]=useState('')
    const [complete,setComplt]=useState('')
     // audio
           const playAudio=()=>{
              const audio = new Audio('DoneVdo.mp3')
              audio.play() 
           }

      useEffect(()=>{
        if (!otp) {
            setTimeout(() => {
                setOtp(otpg)
                alert(` AutoFill OTP :-${otpg}`)
                playAudio()
            }, 1000);

           }
      },[])
       const congres=()=>{
           setOtp('')
           navigate('/appointment/fixed/succesfull')
       }
       
       const generate=()=>{
        const otps = Math.floor(100000 + Math.random() * 900000)
        alert(`Autofill OTP :- ${otps}`)
        setOtp(otps)
       }
    

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-80">
        <div className=" text-gray-600 text-sm font-medium mb-2">
          Not a valid mobile number. <br />
          <span className="text-gray-600">National: 081234 56789</span> <br />
          <span className="text-gray-600">International: +15107488230</span>
        </div>

        <label htmlFor="otp" className=" flex text-lg  text-gray-700 mb-2">
          OTP
        </label>
        <input
          type="tel"
          id="otp"
          value={otp}
          placeholder="Enter 6-digit OTP"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none "
        />

        <div className="flex justify-between text-sm text-blue-600 mt-2">
          <span className="cursor-pointer hover:underline">Still not received?</span>
          <span onClick={generate} className="cursor-pointer hover:underline">Resend OTP</span>
        </div>
        <button onClick={congres} className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
          Continue To Booking
        </button>
        {/* <span  className="mt-2 text-center  font-cutumFont">{complete}</span> */}
      </div>
    </div>
  );
};

export default OtpGnrtr;
