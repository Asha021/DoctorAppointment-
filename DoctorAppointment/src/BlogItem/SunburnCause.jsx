import React from "react";
import Bottom from "../Components/Bottom";

const SunburnCause = () => {
  return (
    <div className=" mx-20 py-10">
      <div className="text-left mt-16 mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Sunburn: Causes, Symptoms, Prevention, and Treatments</h1>
        <img src="sunburnCause.jpg" alt="Sunburn Cause" className="w-auto md:w-1/2 mt-10  rounded-lg hover:shadow-sm transition-shadow duration-300  "/>
        <p className="text-lg text-gray-700 mt-6">
          Sunburn is a skin reaction that occurs after excessive exposure to ultraviolet (UV) radiation, commonly through sunlight. This can lead to inflammation, blisters, and discomfort. Understanding the causes and prevention methods is key to managing sunburn effectively.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Causes of Sunburn</h2>
        <h3 className="text-2xl font-medium text-gray-800 py-2">Ultraviolet (UV) Radiation</h3>
        <p className="text-lg text-gray-800 mb-6">
          UV rays, including UVA and UVB, are the primary cause of sunburn. UVB rays are responsible for sunburn, while UVA rays penetrate deeper and contribute to premature aging and skin cancer.
        </p>

        <h3 className="text-2xl font-medium text-gray-800 py-2">Individual Factors</h3>
        <p className="text-lg text-gray-800 mb-6">
          Blondes, redheads, and individuals with lighter skin and eyes are more prone to sunburn due to low melanin levels. Certain medications, such as antibiotics, can also increase sun sensitivity.
        </p>

        <h3 className="text-2xl font-medium text-gray-800 py-2">Environmental Factors</h3>
        <p className="text-lg text-gray-800 mb-6">
          Prolonged exposure to the sun, especially between 10 AM and 4 PM when UV rays are strongest, increases the likelihood of sunburn. Surfaces like water, sand, and snow can reflect UV rays and intensify exposure.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Symptoms of Sunburn</h2>
        <h3 className="text-2xl font-medium text-gray-800 py-2">Immediate Symptoms</h3>
        <ul className="list-disc pl-8 text-lg text-gray-800 mb-6">
          <li>Redness and warmth of the skin</li>
          <li>Pain and tenderness</li>
          <li>Swelling</li>
          <li>Itching</li>
        </ul>

        <h3 className="text-2xl font-medium text-gray-800 py-2">Delayed Symptoms</h3>
        <ul className="list-disc pl-8 text-lg text-gray-800 mb-6">
          <li>Peeling of the skin</li>
          <li>Severe pain</li>
          <li>Nausea and fever (in severe cases)</li>
          <li>Dehydration</li>
        </ul>
      </div>

      <div>
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Prevention and Treatment</h1>

        <h3 className="text-2xl font-medium text-gray-800 py-2 mb-4">Preventive Measures</h3>
        <ul className="list-disc pl-8 text-lg text-gray-800 mb-6">
          <li>Use Sunscreen (SPF 30+)</li>
          <li>Wear Protective Clothing</li>
          <li>Seek Shade between 10 AM and 3 PM</li>
          <li>Stay Hydrated</li>
        </ul>

        <h2 className="text-2xl font-medium text-gray-800 py-2 mb-4">Immediate Treatment</h2>
        <ul className="list-disc pl-8 text-lg text-gray-800 mb-6">
          <li>Cool the Skin with cool water or compressions</li>
          <li>Hydrate with water and fluids</li>
          <li>Apply Aloe Vera or moisturizers</li>
          <li>Avoid Further Sun Exposure</li>
          <li>Take Pain Relief medications if necessary</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-medium text-gray-800 py-2 mb-4">When to Seek Medical Attention</h2>
        <ul className="list-disc pl-8 text-lg text-gray-800 mb-6">
          <li>Large blisters or peeling skin</li>
          <li>Fever, chills, or confusion</li>
          <li>Signs of infection (pain, redness, yellow discharge)</li>
          <li>Persistent pain and swelling</li>
        </ul>
      </div>

      <div className="pb-16">
        <h2 className="text-4xl font-bold text-gray-800 py-2 mb-4">Conclusion</h2>
        <p className="text-lg text-gray-800">
          Understanding the causes and symptoms of sunburn, as well as knowing how to prevent it, is essential for maintaining healthy skin. Always take precautions to avoid sunburn and seek professional care if you experience severe symptoms.
        </p>
      </div>
      <Bottom />
    </div>
  );
};

export default SunburnCause;
