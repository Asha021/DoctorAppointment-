import React from "react";
import Bottom from "../Components/Bottom";

const Sunburn = () => {
  return (
    <div className="min-h-screen mt-14 bg-gray-100 p-8">
      {/* Header Section */}
      <div className="mx-20">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-6">10 Ways to Treat Sunburn at Home</h1>
          <img
            src="sunburn.jpg"
            alt="Sunburn Remedies"
            className="w-auto md:w-1/2  rounded-lg hover:shadow-sm transition-shadow duration-300  "
          />
        </div>

        {/* Introduction Section */}
        <div className="mb-12">
          <p className="text-xl leading-relaxed">
            One of the frequently heard problems is sunburn, which can occur throughout the year but is more commonly experienced in the summer due to increased exposure to UV radiation. It presents manifestations such as inflammation, itching, pain, rashes, blistering, and even skin peeling. Pretreatment of sunburn is important to minimize pain and inflammation and to avoid worsening of the skin condition. Here are 10 sunburn relief tips you can use to treat sunburn at home.
          </p>
        </div>

        {/* Remedy Sections */}
        {[
          {
            title: "Cool Water Baths and Compresses",
            content:
              "To help soothe the skin in case of sunburn, individuals can use cool water baths or make use of cool compresses. Cold water assists in minimizing irritation and reducing the burning sensation. To do a cool compress, take a fresh piece of clean cloth, dip it in cool water, then rinse it and apply it to the sunburned area."
          },
          {
            title: "Aloe Vera",
            content:
              "Aloe Vera is known for its anti-inflammatory properties and skin-moisturizing benefits. Use topical Aloe Vera gel on the affected area several times a day for quick relief. For an extra cooling effect, chill the gel before use."
          },
          {
            title: "Hydration",
            content:
              "Sunburn attracts water to the skin and causes dehydration. Ensure you drink plenty of water, juices, and electrolyte-rich fluids to keep your body hydrated during the healing process."
          },
          {
            title: "Moisturize with Natural Oils",
            content:
              "Coconut oil and olive oil are excellent natural moisturizers. Coconut oil has anti-inflammatory properties, while olive oil contains antioxidants and vitamins. Gently massage a small amount onto the sunburned skin to promote healing."
          },
          {
            title: "Avoiding Sun Exposure",
            content:
              "If you have sunburn, avoid stepping out in direct sunlight, especially between 10:00 AM and 4:00 PM. If you must go out, wear protective clothing, hats, and sunscreen."
          },
          {
            title: "Over-the-Counter Pain Relievers",
            content:
              "Pain relievers like ibuprofen, aspirin, or acetaminophen can help reduce pain and inflammation. Follow the instructions on the packaging and consult a healthcare provider if needed."
          },
          {
            title: "Oatmeal Baths",
            content:
              "Oatmeal can soothe sunburned skin. Grind regular oatmeal into a fine powder and add it to a warm bath. Soak in the oatmeal bath for 15-20 minutes to reduce itching and irritation."
          },
          {
            title: "Cool, Loose Clothing",
            content:
              "Wear loose-fitting clothes made from breathable fabrics like cotton to minimize irritation. Avoid tight clothing that can rub against sunburned skin."
          },
          {
            title: "Honey",
            content:
              "Honey is a natural antibacterial and anti-inflammatory remedy. Apply a thin layer of honey to the affected area, leave it for 15-20 minutes, and rinse with cool water. Repeat several times a day."
          },
          {
            title: "Cucumber",
            content:
              "Cucumber provides a cooling effect and reduces inflammation. Place chilled cucumber slices on the sunburned skin or blend it into a paste and apply. Wash off after 15-20 minutes."
          }
        ].map((remedy, index) => (
          <div className="mb-12" key={index}>
            <h2 className="text-4xl  mb-6">{`${index + 1}. ${remedy.title}`}</h2>
            <p className="text-xl leading-relaxed">{remedy.content}</p>
          </div>
        ))}

        {/* Conclusion Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-6">Conclusion</h2>
          <p className="text-xl leading-relaxed">
            As much as sunburn can be a sore issue, these remedies can provide relief and aid healing. Remember to stay hydrated, apply lotion to your skin, and avoid further sun exposure. Consult a doctor if you experience severe symptoms like fever, chills, or blistering. Early intervention can help reduce the intensity and duration of sunburn.
          </p>
        </div>
      </div>
      <Bottom />
    </div>
  );
};

export default Sunburn;
