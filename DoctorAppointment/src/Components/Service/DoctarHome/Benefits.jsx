import React from 'react'

const Benefits = () => {
    const data = [
        {title: "Convenience and Comfort", discrip: "You can receive medical care in the comfort of your own home, avoiding the hassle of travelling to a clinic or hospital."},
        {title: "Elderly and Immobilised Accessibility", discrip: "For elderly or immobilised patients, home visits provide essential medical care without the challenges of transportation."},
        {title: "Reduced Risk of Infections", discrip: "By avoiding crowded waiting rooms, patients lower their risk of exposure to contagious illnesses commonly found in healthcare facilities."},
        {title: "Enhanced Communication", discrip: "In a familiar setting, patients may feel more at ease communicating with their doctor, leading to better understanding and compliance with treatment plans."},
        {title: "Family Involvement", discrip: "Family members can actively participate in the patient's care and gain a better understanding of their condition and treatment."},
        {title: "Time Savings", discrip: "Home visits eliminate the need for travel time and waiting room delays, allowing patients to spend more time on their recovery or daily activities."},
        {title: "Cost-Effectiveness", discrip: "Home visits can reduce overall healthcare costs by preventing unnecessary heavy bills of emergency room visits and hospitalisations."},
    ];

    return (
        <div className="px-6 md:px-20 py-10 bg-blue-100">
            <h1 className="text-3xl font-bold text-center mb-10 ">Benefits of Doctor Visit At Home</h1>
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

export default Benefits;
