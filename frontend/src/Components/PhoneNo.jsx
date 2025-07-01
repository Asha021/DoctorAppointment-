// import React,{useState} from 'react';
// import OtpGnrtr from './OtpGnrtr';

// const PhoneNo = () => {
//     const [otp,setOtp] = useState(false)
//     const [otpg,setOtpg]=useState('');
//     const [phone,setPhone]=useState('')

//     const handle=()=>{
//       const value = e.target.value;
//       if (/^\d{0,9}$/.test(value)) {
//               setPhone(value)
//       }else{
//         alert("pls enter valid no")
//       }
//     }
//     const generateOtp=()=>{
//         if (phone.length !== 10) {
//             setPhone("pls Enter a valid 10-digit numbers")
//         }else if(phone.length == 10){
//         handle()
//         setPhone('')
//         setOtp(true)
//         const generate = Math.floor(100000+Math.random()*900000)
//         setOtpg(generate)
//         }
//     }


//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <div className="grid md:grid-cols-2 gap-10  items-center bg-white p-6 rounded-2xl shadow-lg max-w-3xl w-full">
//         {/* Form Section */}
//         {!otp?(
//         <div className='shadow-lg '>
//           <fieldset className="px-4 rounded-md">
//             <label htmlFor="pn" className="block text-lg font-medium text-gray-700">
//               Enter Your Mobile No
//             </label>
//             <input
//               type="tel"
//               id="pn"
//               onFocus={()=>setPhone('')}
//               // value={e.target.value}
//               placeholder="Enter Mobile No"
//               className="w-full mt-2 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//             <span className="block text-sm text-gray-600 mt-2">
//               You will receive an OTP shortly.
//             </span>
//             <span className="block text-sm w-full pt-2 font-cutumFont text-gray-500">
//               We will send appointment-related communications on this number.
//             </span>
//           </fieldset>
//           <button onClick={generateOtp} className="w-full mt-4 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
//             Continue
//           </button>
//           {phone}
//         </div>):
//         (<OtpGnrtr otpg={otpg} />)}
//         {/* Image Section */}
//         <div className="flex shadow-lg justify-center">
//           <img src="illustration.webp" alt="Illustration" className="w-full h-auto max-w-xs" />
//         </div>
//       </div>
//       {/* <OtpGnrtr /> */}
//     </div>
//   );
// };

// export default PhoneNo;
import React, { useState } from 'react';
import OtpGnrtr from './OtpGnrtr';

const PhoneNo = () => {
    const [otp, setOtp] = useState(false);
    const [otpg, setOtpg] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const handle = (e) => {
        const value = e.target.value;
        if (/^\d{0,10}$/.test(value)) {  // ✅ Allow only 10 digits
            setPhone(value);
            setError('');
        } else {
            setError("Please enter a valid 10-digit number");
        }
    };

    const generateOtp = () => {
        if (phone.length !== 10) {
            setError("Please enter a valid 10-digit number");
        } else if(phone.length === 10){
            setOtp(true);
            const generate = Math.floor(100000 + Math.random() * 900000);
            setOtpg(generate);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="grid md:grid-cols-2 gap-10 items-center bg-white p-6 rounded-2xl shadow-lg max-w-3xl w-full">
                {/* Form Section */}
                {!otp ? (
                    <div className='shadow-lg'>
                        <fieldset className="px-4 rounded-md">
                            <label htmlFor="pn" className="block text-lg font-medium text-gray-700">
                                Enter Your Mobile No
                            </label>
                            <input
                                type="tel"
                                id="pn"
                                value={phone}
                                onChange={handle}
                                placeholder="Enter Mobile No"
                                className="w-full mt-2 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                            {error && <span className="text-red-500 text-sm">{error}</span>}
                            <span className="block text-sm text-gray-600 mt-2">
                                You will receive an OTP shortly.
                            </span>
                            <span className="block text-sm w-full pt-2 font-cutumFont text-gray-500">
                                We will send appointment-related communications on this number.
                            </span>
                        </fieldset>
                        <button onClick={generateOtp} className="w-full mt-4 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
                            Continue
                        </button>
                    </div>
                ) : (
                    <OtpGnrtr otpg={otpg} generateOtp={generateOtp} />
                )}

                {/* Image Section */}
                <div className="flex shadow-lg justify-center">
                    <img src="illustration.webp" alt="Illustration" className="w-full h-auto max-w-xs" />
                </div>
            </div>
        </div>
    );
};

export default PhoneNo;
