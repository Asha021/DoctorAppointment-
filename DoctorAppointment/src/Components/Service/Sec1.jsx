import React from "react";
import {useNavigate} from 'react-router-dom'

const Sec1 = () => {
  const navigate = useNavigate()
  const items = [
    {
      img: "vdo.svg",
      title: "Video Consultation",
      discription:
        "Connect with Expert Doctor within 30 seconds powered by Artificial Intelligence.",
        data:()=>{(navigate('/onlineConsult'))}
    },
    {
      img: "home.svg",
      title: "Doctor at Home",
      discription:
      "Expert Doctor at your doorstep with vertical integration and Artificial Intelligence.",
      data:()=>{(navigate('/Docateathome'))}
    },
    {
      img: "clinic.svg",
      title: "Clinic Appointment",
      discription:
        "Streamline your clinic appointments with the help of Artificial Intelligence.",
        data:()=>{(navigate('/clinic'))}
    },
    {
      img: "scittr.svg",
      title: "Plan Your Surgery",
      data:()=>{(navigate('/consultDoctar'))},
      discription:
        "Book your surgery with HealthKo Centre (Multi-specialist Clinic) or HealthKo Partner Hospitals using AI and 3D Body Laser Technology.",
    },
    
  ];

  return (
    <div className="mt-16 bg-[url('onlineConsult.png')] bg-cover bg-no-repeat brightness-100  px-4 lg:px-20">
      <h1 className="text-center text-3xl font-bold py-10"></h1>
      <div className="grid  animate-slideDown  h-auto w-auto grid-cols-1 shadow-sm md:grid-cols-2 lg:grid-cols-4 gap-8 pb-24">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 h-72 hover:scale-105 hover:shadow-lg transition-transform duration-700 p-6 rounded-lg text-center"
            onClick={item.data}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-20 h-20 mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold mb-2 cursor-pointer">{item.title}</h2>
            <p className="text-gray-700 text-sm cursor-pointer">{item.discription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sec1;
