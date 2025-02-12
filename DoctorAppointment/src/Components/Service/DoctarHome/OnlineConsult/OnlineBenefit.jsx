import React from "react";

const OnlineBenefit = () => {
  const data = [
    {
      title: "24X 7 Top Doctor Consultation",
      discrip:
        "Consult a doctor via audio/video anytime with our cutting edge AI technology for better experience.",
    },

    {
      title: "Convenient And Simple",
      discrip:
        "Get medical advice whenever and wherever you choose, saving the time and effort of travelling to a physical clinic.",
    },

    {
      title: "Improved Follow-Up",
      discrip:
        "Easily follow up with doctors for ongoing consultation, with the convenience of cutting edge AI technology for prescription and medical history.",
    },

    {
      title: "Cost Effective",
      discrip:
        "Get online consultation from top doctors starting from just 99",
    },
    {
      title: "Accessibility",
      discrip:
        "Connect with specialised doctors beyond your geographical limitations, ensuring access to top doctors care regardless of location.",
    },
    {
      title: "Privacy And Security",
      discrip:
        "Discuss sensitive health issues in the comfort of your own space. And be assured your consultation with doctors will be fully private and secured.",
    },
  ];

  return (
    <div className="px-6 md:px-20 py-10">
      <h1 className="text-3xl font-bold text-center mb-10 ">
      Benefits of Online Doctor Consultation
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map((item, ind) => (
          <div
            key={ind}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <h2 className="text-2xl text-blue-500 font-semibold mb-4">
              {item.title}
            </h2>
            <p className="text-sm text-gray-700">{item.discrip}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineBenefit;
