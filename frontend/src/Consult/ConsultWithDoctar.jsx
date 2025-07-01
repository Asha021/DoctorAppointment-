// import React, { useState,useEffect } from "react";
// import Specility from "../Components/Specility"; // Assuming this is an array of specialties
// import { useNavigate,useLocation } from "react-router-dom";

// const ConsultDoctor = () => {
//   const [symptom, setSymptom] = useState("");
//   const [mobileNumber, setMobileNumber] = useState("");
//   const [errors, setError] = useState("");
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const [filteredDoctors, setFilteredDoctors] = useState([]);
  
//   const auth = localStorage.getItem("users");
//   const navigate = useNavigate();
//   // specilities location 
//   const location = useLocation('');
//   const field = location.state?.field
//   const heathField = location.state?.heathField
//   console.log(heathField);
  
//   useEffect(() => {
//     if (field) {
//       setSymptom(field);
//       dataShow();
//     }else if (heathField) {
//       setSymptom(heathField);
//       dataShow();
//     }
//   }, [field,heathField]);

//   const handleSymptomChange = (e) => {
//     setSymptom(e.target.value);
//     dataShow();
//   };

//   const handleMobileChange = (e) => {
//     setMobileNumber(e.target.value);
//   };

//   const dataShow = () => {
//     // Filter doctors based on symptom (or specialization) matching input
//     const filtered = Specility.filter((doctor) =>
//       doctor.specialization.toLowerCase().includes(symptom.toLowerCase())
//     );
//     setShowSuggestions(true);
//     setFilteredDoctors(filtered); // Update state with filtered doctors
//   };

//   const handleSpecializationClick = (specialization) => {
//     // Set the clicked specialization into the symptom state
//     setSymptom(specialization);
//     setShowSuggestions(false)
//     dataShow(); // Optionally trigger the filter to show doctors for that specialization

//   };

//   const ConsultDoctr = () => {
//     if (symptom == "" || mobileNumber == "") {
//       setError("Pls Enter Symptom or Mobile No");
//     }else if (/^\d{0,9}$/.test(mobileNumber)) {
//       setError("Pls Enter a valid Phone No");
//       setMobileNumber(mobileNumber)
//     } else {
//       if (!auth) {
//         navigate("/login");
//       } else {
//         navigate("/doctarPage", { state: { symptom: symptom } });
//       }
//     }
//   };

//   const nullFun = () => {
//     setError("");
//   };

//   return (
//     <div className="flex justify-center mt-32">
//       <div className="grid grid-cols-2 gap-4 w-auto bg-gray-100 p-10 rounded-lg shadow-lg">
//         {/* Left Section - Form */}
//         <div className="space-y-4">
//           <h2 className="text-2xl font-bold">Consult with a Doctor</h2>

//           {/* Symptom Input */}
//           <div>
//             <label htmlFor="symptom" className="block text-sm font-medium">
//               Tell us your symptom or health problem
//             </label>
//             <input
//               type="text"
//               id="symptom"
//               onFocus={nullFun}
//               value={symptom}
//               onChange={handleSymptomChange}
//               // onChange={dataShow} // Optionally call dataShow to trigger filtering when input loses focus
//               placeholder="Eg. Fever, Headache"
//               className="w-full text-sm mt-2 p-2 border border-gray-300 rounded-md"
//             />
//           </div>

//           {/* Display Filtered Doctors */}
//           <div className="inset-6 w-96 overflow-y-auto max-h-48" 
//           >
//             {filteredDoctors.length > 0 ? (
//               Specility.map((Specility, index) => (
//                 <div
//                   key={index}
//                   className="bg-white p-4 rounded-lg shadow-lg mb-4"
//                 >
//                   <p
//                     className="text-gray-800 mb-1 cursor-pointer"
//                     onClick={() =>
//                       handleSpecializationClick(Specility.specialization)
//                     }
//                   >
//                     <strong>{Specility.specialization}</strong>
//                   </p>
//                 </div>
//               ))
//             ) : (
//               <p className="text-sm text-gray-600">
//                 A relevant speciality will be shown below...
//               </p>
//             )}
//           </div>
//           {/* Mobile Number Input */}
//           <div>
//             <label htmlFor="mobile" className="block text-sm font-medium">
//               Mobile Number
//             </label>
//             <input
//               type="tel"
//               id="mobile"
//               onFocus={nullFun}
//               value={mobileNumber}
//               onChange={handleMobileChange}
//               placeholder="Enter your mobile number"
//               className="w-full text-sm mt-2 p-2 border border-gray-300 rounded-md"
//             />
//           </div>
//           <div className="grid">
//             <button
//               onClick={ConsultDoctr}
//               className="bg-blue-500 hover:bg-blue-600 text-white rounded-md h-12"
//             >
//               Submit
//             </button>
//             <span className="text-red-500 pt-2 text-sm">{errors}</span>
//           </div>
//         </div>

//         {/* Right Section - Image */}
//         <div className="md:flex md:justify-center hidden md:block items-center border-l-2">
//           <img
//             src="doctors.webp"
//             alt="Doctor Consultation"
//             className="max-w-xs pl-3 size-48 rounded-lg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ConsultDoctor;
import React, { useState, useEffect } from "react";
import Specility from "../Components/Specility"; // Assuming this is an array of specialties
import { useNavigate, useLocation } from "react-router-dom";

const ConsultDoctor = () => {
  const [symptom, setSymptom] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [errors, setError] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  
  const auth = localStorage.getItem("users");
  const navigate = useNavigate();
  const location = useLocation();
  const field = location.state?.field;
  const heathField = location.state?.heathField;

  useEffect(() => {
    if (field) {
      setSymptom(field);
      dataShow();
    } else if (heathField) {
      setSymptom(heathField);
      dataShow();
    }
  }, [field, heathField]);

  const handleSymptomChange = (e) => {
    setSymptom(e.target.value);
    setShowSuggestions(true);
    dataShow();
  };

  const handleMobileChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const dataShow = () => {
    const filtered = Specility.filter((doctor) =>
      doctor.specialization.toLowerCase().includes(symptom.toLowerCase())
    );
    setFilteredDoctors(filtered);
  };

  const handleSpecializationClick = (specialization) => {
    setSymptom(specialization);
    setShowSuggestions(false);
  };

  const ConsultDoctr = () => {
    if (!symptom || !mobileNumber) {
      setError("Please enter a symptom or mobile number");
    } else if (/^\d{0,9}$/.test(mobileNumber)) {
      setError("Please enter a valid phone number");
    } else {
      if (!auth) {
        navigate("/login");
      } else {
        navigate("/doctarPage", { state: { symptom: symptom } });
      }
    }
  };

  return (
    <div className="flex justify-center mt-32 ">
      <div className="grid md:grid-cols-2 mx-auto  gap-4  bg-gray-100 md:p-10 p-4 rounded-lg shadow-lg ">
        {/* Left Section - Form */}
        <div className="space-y-4 ">
          <h2 className="text-2xl  font-bold">Consult with a Doctor</h2>

          <div>
            <label htmlFor="symptom" className="block text-sm font-medium">
              Tell us your symptom or health problem
            </label>
            <input
              type="text"
              id="symptom"
              value={symptom}
              onChange={handleSymptomChange}
              placeholder="Eg. Fever, Headache"
              className="w-full text-sm mt-2 p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Display Filtered Doctors */}
          <div
            // className={`inset-6 w-96 overflow-y-auto ${showSuggestions ? "max-h-48" : "max-h-0 overflow-hidden"}`}
            className={`inset-6 w-96 overflow-y-auto ${showSuggestions?"max-h-48":"max-h-0 overflow-hidden"}`}
          >
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doctor, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-lg mb-4 cursor-pointer"
                  onClick={() => handleSpecializationClick(doctor.specialization)}
                >
                  <p className="text-gray-800 mb-1">
                    <strong>{doctor.specialization}</strong>
                  </p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-600">A relevant specialty will be shown below...</p>
            )}
          </div>

          <div>
            <label htmlFor="mobile" className="block text-sm font-medium">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              value={mobileNumber}
              onChange={handleMobileChange}
              placeholder="Enter your mobile number"
              className="w-full text-sm mt-2 p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="grid">
            <button
              onClick={ConsultDoctr}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-md h-12"
            >
              Submit
            </button>
            <span className="text-red-500 pt-2 text-sm">{errors}</span>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="md:flex hidden md:block md:justify-center items-center border-l-2">
          <img
            src="doctors.webp"
            alt="Doctor Consultation"
            className="max-w-xs pl-3 size-48 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ConsultDoctor;
