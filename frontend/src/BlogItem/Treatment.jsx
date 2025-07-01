import React from 'react';
import Bottom from '../Components/Bottom';

const Treatment = () => {
  return (
    <div className=" mx-20 mt-16 px-4 py-10">
      {/* Title Section */}
      <div className=" mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Healthy Lifestyle: 10 Essential Habits for Healthy Life</h1>
        <img
          src="health.png" // replace with your actual image path
          alt="Healthy Lifestyle"
          className="w-auto md:w-1/2 mt-10 border rounded-lg hover:shadow-sm transition-shadow duration-300"
        />
        <p className="text-lg text-gray-700 mt-6">
          A healthy lifestyle is crucial for maintaining both physical and mental well-being. By adopting these 10 essential habits, you can significantly improve your overall health and wellness. Let’s explore the habits that contribute to a healthier and happier you.
        </p>
      </div>
             {/* Importance of a Healthy Lifestyle */}
    <div className=" mb-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why a Healthy Lifestyle Matters</h2>
      <p className="text-lg text-gray-800">
        A healthy lifestyle enhances physical, mental, and emotional well-being. It reduces the risk of chronic diseases, boosts energy levels, and improves overall quality of life.
      </p>
    </div>

    
      {/* 10 Healthy Habits Section */}
      <div className="space-y-12">
        <div className="pl-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">10 Essential Habits for a Healthy Life</h2>
          <ul className="list-decimal pl-5 text-gray-700 space-y-7">
            {/* 1. Eat a Balanced Diet */}
            <p>
              <span className="font-semibold text-gray-700">1. Eat a Balanced Diet:</span> Eating a variety of whole foods, including fruits, vegetables, whole grains, lean proteins, and healthy fats, is crucial for optimal health. A balanced diet provides your body with the nutrients it needs to function properly and helps prevent chronic diseases.
            </p>

            {/* 2. Stay Hydrated */}
            <p>
              <span className="font-semibold text-gray-700">2. Stay Hydrated:</span> Proper hydration is essential for maintaining energy levels, promoting healthy skin, and supporting digestion. Aim to drink at least 8 glasses (2 liters) of water daily, and more if you exercise or are in hot climates.
            </p>

            {/* 3. Exercise Regularly */}
            <p>
              <span className="font-semibold text-gray-700">3. Exercise Regularly:</span> Physical activity helps strengthen your heart, bones, and muscles. It also boosts your mood and energy levels. Aim for at least 30 minutes of moderate exercise, such as brisk walking, cycling, or swimming, most days of the week.
            </p>

            {/* 4. Get Enough Sleep */}
            <p>
              <span className="font-semibold text-gray-700">4. Get Enough Sleep:</span> Sleep plays a vital role in overall health. Adults should aim for 7-9 hours of quality sleep each night. Proper rest boosts immunity, improves brain function, and promotes emotional well-being.
            </p>

            {/* 5. Manage Stress */}
            <p>
              <span className="font-semibold text-gray-700">5. Manage Stress:</span> Chronic stress can have a negative impact on your health. Incorporating stress-reduction techniques such as mindfulness, meditation, yoga, or deep breathing exercises can help manage daily pressures and promote relaxation.
            </p>

            {/* 6. Avoid Smoking and Excessive Drinking */}
            <p>
              <span className="font-semibold text-gray-700">6. Avoid Smoking and Excessive Drinking:</span> Smoking and heavy alcohol consumption are linked to several health issues, including lung cancer, heart disease, and liver damage. Reducing or eliminating these habits significantly improves long-term health.
            </p>

            {/* 7. Practice Good Hygiene */}
            <p>
              <span className="font-semibold text-gray-700">7. Practice Good Hygiene:</span> Regular hand washing, brushing your teeth, and maintaining personal cleanliness can help prevent infections and illnesses. Good hygiene is essential for overall health and well-being.
            </p>

            {/* 8. Stay Socially Active */}
            <p>
              <span className="font-semibold text-gray-700">8. Stay Socially Active:</span> Social interactions can improve emotional well-being and reduce feelings of isolation. Staying connected with family, friends, and your community contributes to a positive mental state.
            </p>

            {/* 9. Regular Health Check-ups */}
            <p>
              <span className="font-semibold text-gray-700">9. Regular Health Check-ups:</span> Regular visits to your healthcare provider for check-ups and preventative care can help detect and address any health issues early. It’s essential to stay on top of your health and monitor any changes.
            </p>

            {/* 10. Maintain a Positive Mindset */}
            <p>
              <span className="font-semibold text-gray-700">10. Maintain a Positive Mindset:</span> A positive attitude can have a powerful impact on both your mental and physical health. Practicing gratitude, focusing on the present moment, and maintaining optimism can enhance overall well-being and resilience.
            </p>
          </ul>
        </div>

    {/* Conclusion */}
    <div className="border-l-4 border-gray-700 pl-4 mb-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Start Small, Stay Consistent</h2>
      <p className="text-lg text-gray-800">
        Incorporating these habits into your daily routine takes time and commitment. Start with small changes, be consistent, and watch how your health and happiness improve over time.
      </p>
    </div>
      </div>

      {/* Conclusion Section */}
      <div className="mt-12 pb-16">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Conclusion</h2>
        <p className="text-lg text-gray-800">
          Incorporating these 10 essential habits into your lifestyle is a great way to improve your overall well-being. Start small and gradually build these habits into your routine for lasting health benefits. Remember, health is not just about physical fitness—it’s about nurturing your body, mind, and emotions to live a fulfilling life. Stay healthy, stay happy!
        </p>
      </div>
      <Bottom />
    </div>
  );
};

export default Treatment;
