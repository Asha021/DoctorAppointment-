import React from 'react'

const ClinicAskedQ = () => {
    const items = [
        {
          discription:
            "You can book clinic appointments either by phone or online through our website. Simply choose a convenient time slot and provide your details.",
          title: "How do I book a clinic appointment?",
        },
        {
          discription:
            "We require basic personal information such as your name, contact number, and reason for the appointment. Any relevant medical history will also be helpful.",
          title: "What information do I need to provide when booking?",
        },
        {
          discription:
            "Yes, you can reschedule or cancel your appointment by contacting the clinic either by phone or through our online booking system. Please provide at least 24 hours notice if possible.",
          title: "Can I reschedule or cancel my clinic appointment?",
        },
        {
          discription:
            "Yes, you can book appointments on behalf of family members. Please provide their details accurately when making the booking, including any specific requirements or preferences.",
          title: "Can I book appointments for family members?",
        },
        {
          discription:
            "You can typically book appointments up to a few weeks in advance, depending on availability. We recommend booking as early as possible to secure your preferred time slot.",
          title: "How far in advance can I book an appointment?",
        },
        {
          discription:
            "Please bring any relevant medical documents and a list of current medications. It's also helpful to arrive a few minutes early to complete any necessary paperwork.",
          title: "What do I need to bring to my appointment?",
        },
        {
          discription:
            "Yes, you can request a specific doctor when booking your appointment, subject to their availability. We will do our best to accommodate your preferences whenever possible.",
          title: "Can I request a specific doctor?",
        },
      ];
    
      return (
        <div className="min-h-screen pb-20 bg-gray-100">
            <div className=" md:mx-20 mx-5 ">
          <h1 className="text-center md:text-3xl text-2xl  font-bold py-10">
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
export default ClinicAskedQ
