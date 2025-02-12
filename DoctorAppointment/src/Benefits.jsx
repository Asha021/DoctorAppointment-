import React from "react";
import Bottom from "./Components/Bottom";

const Benefits = () => {
  const benefitsData = [
    {
      title: "Consult Top Doctors 24x7",
      description:
        "Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.",
    },
    {
      title: "Affordable Consultations",
      description:
        "Get high-quality medical advice at the most competitive prices.",
    },
    {
      title: "Verified Specialists",
      description:
        "Consult only with certified and experienced professionals.",
    },
    {
      title: "Privacy Guaranteed",
      description: "Your consultations and data are secure and confidential.",
    },
    {
      title: "Quick and Easy",
      description:
        "Save time and effort with instant booking and hassle-free interactions.",
    },
  ];

  const statsData = [
    { stat: "2,00,000+", label: "Happy Users" },
    { stat: "20,000+", label: "Verified Doctors" },
    { stat: "25+", label: "Specialties" },
    { stat: "4.5/5", label: "App Rating" },
  ];

  return (
    <div className=" pt-14 mt-14 font-sans">
      <div className="mx-20">
      {/* Statistics Section */}
      <div className="grid grid-cols-2 pb-10  sm:grid-cols-4 gap-0 text-center mb-5">
        {statsData.map((statItem, index) => (
          <div key={index} className="bg-gray-800  p-6   shadow-sm">
            <p className="text-2xl animate-slideDownX font-bold text-white">{statItem.stat}</p>
            <p className="text-white animate-slideDownX">{statItem.label}</p>
          </div>
        ))}
      </div>

      <div className="text-4xl text-gray-800 font-semibold pb-5">Benefits of Online Consultation</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 pb-20 gap-6">
        {benefitsData.map((benefit, index) => (
          <div
            key={index}
            className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md"
          >
            <p className="text-lg font-semibold text-gray-800 mb-2">
              {benefit.title}
            </p>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
      </div>
      <Bottom />
    </div>
  );
};

export default Benefits;
