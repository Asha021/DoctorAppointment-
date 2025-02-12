import React, { useEffect, useState } from "react";
import Benefits from "./Benefits";
import { useNavigate } from "react-router-dom";

const Health = () => {
  const navigate = useNavigate();
  const [heathField, setField] = useState("");
  const healthConcerns = [
    {
      img: "cold.jpg",
      title: "Caught & Cold?",
      gon: "Gastroenterologist",
      price: "399",
    },
    {
      img: "pain.jpg",
      title: "Period Problem?",
      gon: "Gynecologist",
      price: "399",
    },
    {
      img: "issue.jpg",
      title: "Performance Issue?",
      gon: "Ayurveda",
      price: "399",
    },
    {
      img: "skin.jpg",
      title: "Skin Problem?",
      gon: "Dermatologist",
      price: "399",
    },
  ];

  const handle = (gon) => {
    setField(gon);
    navigate("/ConsultDoctar",{state:{heathField:gon}})
  };
  useEffect(()=>{
    console.log(heathField);
  },[heathField])

  return (
    <div className=" pt-10  mt-14 font-sans">
      <div className="mx-20 ">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <p className="text-3xl font-bold text-gray-800">
              Common Health Concerns
            </p>
            <p className="text-lg text-gray-600">
              Consult a doctor online for any health issue
            </p>
          </div>
          <button
            onClick={() => {
              navigate("/ConsultDoctar");
            }}
            className="mt-4 sm:mt-0 rounded-xl border border-gray-400 px-6 py-2 text-sm sm:text-base  sm:w-auto"
          >
            See all Symptoms
          </button>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 ">
          {healthConcerns.map((concern, index) => (
            <div
              // key={index}
              className="border hover:shadow-md  hover:shadow-gray-400 p-4 rounded-lg flex flex-col items-center text-center bg-white shadow-sm"
            >
              <img
                src={concern.img}
                alt={concern.title}
                className="w-80 h-48 mb-4"
              />
              <p className="font-semibold text-lg text-gray-800">
                {concern.title}
              </p>
              <p className="text-gray-600 mb-4">₹{concern.price}</p>
              <button
              onClick={()=>handle(concern.gon)}
                // onClick={() => {
                //   navigate("/ConsultDoctar");
                // }}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Consult Now
              </button>
            </div>
          ))}
        </div>
      </div>
      <Benefits />
    </div>
  );
};

export default Health;
