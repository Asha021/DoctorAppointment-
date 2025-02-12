import React from "react";

const Sec2 = () => {
  const items = [
    {
      discription:
        "QuickSlot is a leading healthcare service provider who offers advanced technology and quality healthcare for its patients with personalized healthcare that prioritizes data security.",
      title: "Why Choose QuickSlot?",
    },
    {
      discription:
        "Healthcare professionals can join QuickSlot by registering on our platform as a verified doctor or healthcare professional. Please download our Doctor-side app and register by providing the required documentation.",
      title: "How can I join QuickSlot as a healthcare provider?",
    },
    {
      discription:
        "QuickSlot is a technology-driven healthcare platform that helps patients connect with professional healthcare providers. Here are the QuickSlot services:",
      title: "What is QuickSlot and what are its services?",
    },
    {
      discription:
        "There are several kinds of AI being used by QuickSlot. Some of them include helping patients connect with professional healthcare providers. Here are the QuickSlot services:",
      title: "How many AI technologies are being used by QuickSlot?",
    },
    {
      discription:
        "AI-Enhanced Doctor Matching: QuickSlot utilizes an advanced AI filter that analyzes extensive doctor data to match patients with the most suitable healthcare provider. The AI monitors the patient for 7 days from the day of the home visit, checking progress and reminding the patient to take medicines on time.",
      title: "What AI is used in Home Healthcare Service?",
    },
    {
      discription:
        "QuickSlot has designed an AI Doctor to address general medical queries. This AI Doctor is trained on millions of data points to provide accurate and reliable answers to common health questions with immediate assistance.",
      title: "What is the 'AI Doctor for General Queries'?",
    },
    {
      discription:
        "Yes, QuickSlot prioritizes the security and confidentiality of your personal health information. We adhere to strict privacy standards and regulations to ensure your data is protected.",
      title: "Is my personal health information safe with QuickSlot?",
    },
  ];

  return (
    <div className="min-h-screen pb-20 bg-gray-100">
        <div className=" mx-20 ">
      <h1 className="text-center text-3xl  font-bold py-10">
        Frequently Asked Questions
      </h1>
      <div className="space-y-6">
        {items.map((item, index) => (
          <details
            key={index}
            className="border rounded-lg hover:shadow-md shadow-sm p-4 bg-white"
          >
            <summary className="cursor-pointer  font-semibold text-lg mb-2">
              {item.title}
            </summary>
            <p className="text-gray-700 mt-2 p-3">{item.discription}</p>
          </details>
        ))}
      </div>
      </div>
      
    </div>
  );
};

export default Sec2;
