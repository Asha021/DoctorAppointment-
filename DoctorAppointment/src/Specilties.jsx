import React, { useEffect, useState } from "react";
import Health from "./Health";
import { useNavigate } from "react-router-dom";

const Specialties = () => {
  const [field,setField]= useState('')
  const navigate = useNavigate();
  const specialties = [
    { img: "preg.svg", title: "Gynecologist", price: 499 },
    { img: "sexo.svg", title: "Audiologist", price: 499 },
    { img: "gen.svg", title: "Prosthonotist", price: 499 },
    { img: "derma.svg", title: "Dermatologist", price: 499 },
    { img: "phys.svg", title: "Psychiatrist", price: 499 },
    { img: "stom.svg", title: "Nutritionist", price: 499 },
  ];
  
  useEffect(()=>{
    // navigate("/ConsultDoctar",{field:field})
    console.log(field);
  },[field])

  const handle=(title)=>{
    setField(title)
    navigate("/ConsultDoctar",{state:{field:title}})
  }

  return (
    <div className="mx-5 mt-14 font-sans">
      <div className="md:mx-20">
        {/* Header */}
        <div
          className="md:flex justify-between items-center p-4 rounded-lg"
        >
          <div className="text-gray-800  animate-slideDown mb-5">
            <p className="text-3xl sm:text-4xl  font-bold">25+ Specialties</p>
            <p className="text-sm sm:text-lg">
              Consult with top doctors across specialties
            </p>
          </div>
          <button
            onClick={() => navigate("/ConsultDoctar")}
            className="rounded-xl border border-gray-400 px-6 py-2 text-sm sm:text-base"
          >
            See all specialties
          </button>
        </div>

        {/* Grid of Specialties */}
        <div
          className="grid grid-cols-1  mx-14 md:mx-0 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-10"
        >
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="border  scale p-3 rounded-lg flex flex-col items-center text-center"
            >
              <img
                src={specialty.img}
                alt={specialty.title}
                className="w-20 h-20 mb-4"
              />
              <p className="font-semibold text-lg">{specialty.title}</p>
              <p className="text-gray-600 mb-4">₹{specialty.price}</p>
              <button
               onClick={()=>handle(specialty.title)}
                // onClick={() => navigate("/ConsultDoctar")}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Consult Now
              </button>
            </div>
          ))}
        </div>
      </div>
      <Health />
    </div>
  );
};

export default Specialties;
