import React from 'react'

const ClinicBenefit = () => {
    const data = [
        {title: "Convenience and Time Management", discrip: "Booking a clinic appointment allows you to choose a convenient time slot, saving you time by avoiding long waiting periods.."},
        {title: "Priority Access to Healthcare:", discrip: "By booking an appointment with HealthKo, you ensure priority access to healthcare services, reducing the risk of delays or emergencies."},
        {title: "Personalized Care and Attention", discrip: "Scheduled appointments guarantee personalised care and attention from medical professionals, addressing your specific health concerns effectively."},
        {title: "Streamlined Healthcare Experience:", discrip: "Appointment booking streamlines the healthcare process, minimising hassles and ensuring a smooth experience for patients."},
        {title: "Better Preparation for Consultations:", discrip: "With a booked appointment, patients have time to prepare questions and information for more productive consultations with healthcare providers."},
        {title: "Improved Patient Satisfaction:", discrip: "Booking clinic appointments enhances patient satisfaction by providing a safe and efficient healthcare experience."},
        {title: "Cost-Effectiveness", discrip: "Clinic visits can reduce overall healthcare costs by preventing unnecessary heavy bills of emergency room visits and hospitalisations."},
    ];

    return (
        <div className="px-6 md:px-20 py-10 bg-blue-100">
            <h1 className="text-3xl font-bold text-center mb-10 ">Benefits of Clinic Appointment</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.map((item, ind) => (
                    <div key={ind} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h2 className="text-2xl text-blue-500 font-semibold mb-4">{item.title}</h2>
                        <p className="text-sm text-gray-700">{item.discrip}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ClinicBenefit;
