import React, { useEffect, useState } from "react";
import DoctrsData from "./DoctrsData";
import Bottom from "./Bottom";
import { FaPhone } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";

const DoctorPage = () => {
  const location = useLocation();
  const { category } = location.state || {};
  const [selectedDoctr, setSelectedDoctr] = React.useState([]);
  const [drop, setDrop] = useState({});
  const [drops, setDrops] = useState({});
  const navigate = useNavigate();
  const count = 1;
  const one = location.state || {};
  const { symptom = "" } = one;
  const { searchTerm = "", clinicSearch = "" } = one;
  console.log(one);
  // slots
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [errors, setError] = useState("");
  const [submit, setSubmit] = useState("");
  // auth
  const auth = localStorage.getItem("users");
  // validation func
  const handl = () => {
    if (!slot || !date) {
      setError("Pls filled Date & Time");
    } else {
      if (auth) {
        setSubmit("submit your Slot ");
        navigate('/contact-direct-doctar')
        setSlot("");
        setDate("");
      } else {
        navigate("/login");
      }
    }
  };
  // onfocus func
  const FocusFunc = () => {
    setError("");
    setSubmit("");
  };

  const dropDown = (doctorName) => {
    setDrop((prvs) => ({
      ...prvs,
      [doctorName]: !prvs[doctorName],
    }));
  };

  const dropsDown = (doctorName) => {
    setDrops((prvs) => ({
      ...prvs,
      [doctorName]: !prvs[doctorName],
    }));
  };

  useEffect(() => {
    // Apply category filter for home seen fields
    if (category) {
      const filtered = DoctrsData.filter((doctor) =>
        doctor.specialization.toLowerCase().includes(category.toLowerCase())
      );
      setSelectedDoctr(filtered); // Update the state with filtered doctors
    } else {
      setSelectedDoctr(DoctrsData); // If no category, show all doctors
    }

    //apply symptons function for consultDoctar
    if (symptom) {
      const filtered = DoctrsData.filter((item) =>
        item.specialization.toLowerCase().includes(symptom.toLowerCase())
      );
      setSelectedDoctr(filtered);
    }

    //apply searchTerm & clinicSerach for homeSearch
    if (searchTerm && clinicSearch) {
      const filtered = DoctrsData.filter(
        (item) =>
          item.specialization === clinicSearch && item.location === searchTerm
      );
      setSelectedDoctr(filtered);
    }
  }, [category, symptom, searchTerm, clinicSearch]);

  return (
    <div className="mx-8 md:mx-20 lg:mx-40 justify-center mt-8 items-center bg-gray-100 py-8">
      {/* header for doctar count */}
      <div className="bg-white py-3">
        <h2 className="text-blue-500  text-2xl py-2 font-semibold">
          +{selectedDoctr.length} Doctars Available in{" "}
          {selectedDoctr[0]?.location} City{" "}
        </h2>
        <span className="text-md ml-3  font-cutumFont">
          {" "}
          ✔ Book appointments with minimum wait-time & verified doctor details
        </span>
      </div>

      {selectedDoctr.map((doctor, index) => (
        <div className=" gap-0 bg-white p-5 w-full m-2 rounded-lg shadow-lg">
          <div className="flex  flex-col md:flex-row">
            {/* Doctor Info Section */}
            <div className="flex  flex-col items-center md:items-start md:w-1/3 gap-5 mb-4 md:mb-0">
              <img
                src={doctor.img}
                alt={`${doctor.name} Profile`}
                className="w-40 h-40 object-cover rounded-md border-2 border-gray-300"
              />
              <h3 className="text-xl font-bold text-blue-500 mb-2 text-center md:text-left">
                {/* <h1 className="hidden">{index+1}</h1> */}
                {doctor.name}
              </h3>
              <p className="text-gray-600 mb-1">
                <strong>Specialization:</strong> {doctor.specialization}
              </p>
              <p className="text-gray-600 mb-1">
                <strong>Experience:</strong> {doctor.experience}
              </p>
              <p className="text-gray-600 mb-1">
                <strong>Location:</strong> {doctor.location}
              </p>
            </div>

            {/* Doctor Details Section */}
            <div className="w-full md:w-2/3 pt-8 md:pt-16">
              <p className="text-gray-600 mb-1">
                <strong>Consultation Fee:</strong> {doctor.consultationFee}
              </p>
              <p className="text-gray-600 mb-1">
                <strong>Rating:</strong> {doctor.rating}
              </p>
              <p className="text-gray-600 mb-1">
                <strong>Clinic:</strong> {doctor.clinic}
              </p>
              <p className="text-gray-600 mb-1">
                <strong>Availability:</strong> {doctor.availability}
              </p>
              <p className="text-gray-600 mb-3">
                <strong>Patient Stories:</strong> {doctor.patient_stories}
              </p>

              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => dropDown(doctor.name)}
                  className="w-full  text-lg sm:w-1/2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 mb-2"
                >
                  Book Clinic Visit
                </button>
                <button
                  onClick={() => dropsDown(doctor.name)}
                  className="flex w-full gap-3 text-blue-700 sm:w-1/2 bg-blue-50 hover:text-white py-2 rounded-lg hover:bg-blue-400 mb-2"
                >
                  <FaPhone size={20} className="mt-1" />
                  <span className="text-lg ">Contact Hospital</span>
                </button>
              </div>
            </div>
          </div>
          <div className=" py-2 border-t-2 w-full text-gray-500">
            {/* book apointment dropdown */}
            {drop[doctor.name] && (
              <div className=" max-w-96">
                <div className="my-3">
                  <h2 className="font-semibold">Date:-</h2>
                  <input
                    onFocus={FocusFunc}
                    className="outline-none w-fit"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <span className="gap-5">
                  <span className="font-cutumFont font-semibold">
                    Slot Time
                  </span>
                  <br />
                  <input
                    type="checkbox"
                    value="Morning"
                    onFocus={FocusFunc}
                    checked={slot === "Morning"}
                    onChange={() => setSlot("Morning")}
                  />{" "}
                  <span> Morning </span>{" "}
                  <input
                    type="checkbox"
                    value="Evening"
                    checked={slot === "Evening"}
                    onChange={() => setSlot("Evening")}
                  />
                  <span> Evening</span>
                </span>
                <br />
                <button
                  onClick={handl}
                  type="submit"
                  className="my-3 text-white  rounded-md py-2 bg-blue-400 hover:bg-blue-600"
                >
                  Submit
                </button>
                {/* Error msg run or submit run */}
                {errors?
                (<span className="text-red-500 font-medium grid font-cutumFont">
                  {errors}
                </span>)
                :
               ( <span className="text-green-500 font-medium grid font-cutumFont">
                  {submit}
                </span>)}
                <h3 className="text-sm mt-2">
                  you agree to the{" "}
                  <i
                    onClick={() => navigate("/company/terms")}
                    className="text-blue-400 cursor-pointer"
                  >
                    Terms & Conditions{" "}
                  </i>
                  .If you could not connect with the center
                </h3>
              </div>
            )}
            {/*  contact hospital dropdown*/}
            {drops[doctor.name] && (
              <div className=" max-w-96">
                {/* <h1>Book An Appointment For Consultation</h1> */}
                <h2 className="mt-2 text-blue-500 text-2xl">07941058530</h2>
                <h3 className="text-sm mt-2">
                  By calling this number, you agree to the{" "}
                  <i
                    onClick={() => navigate("/company/terms")}
                    className="text-blue-400 cursor-pointer"
                  >
                    Terms & Conditions
                  </i>
                  . If you could not connect with the center
                </h3>
              </div>
            )}
          </div>
        </div>
      ))}

      <div className="space-y-10 py-20 bg-white"></div>
      <Bottom />
    </div>
  );
};

export default DoctorPage;
