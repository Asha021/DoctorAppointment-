import React from 'react';
import Bottom from '../Components/Bottom';

const SummerFoods = () => {
  return (
    <div className=" mt-16 text-gray-800 mx-20 px-4 py-10">
      <div className="mb-12">
        <h1 className="text-4xl font-bold ">10 Best Summer Foods to Stay Cool and Hydrated</h1>
        <img
          src="food.jpg" // replace with your actual image path
          alt="Summer Foods"
          className="w-auto md:w-1/2 mt-10 border rounded-lg hover:shadow-sm transition-shadow duration-300"
        />
        <p className="text-lg text-gray-700 mt-6">
          Beat the heat and stay hydrated this summer with these 10 refreshing foods. These summer foods are not only cooling but also packed with nutrients that help maintain hydration and energy levels.
        </p>
      </div>

      {/* Summer Foods List Section */}
      <div className="space-y-12">
        {/* Food 1 */}
        <div className="border-l-4 border-gray-800 pl-4">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">1. Watermelon</h2>
          <p className="text-lg text-gray-800 mb-4">
            Watermelon is 92% water, making it one of the best foods for hydration during the hot summer months. It’s also packed with vitamins A, C, and B6, which promote skin health and support immune function.
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>High water content (92%)</li>
            <li>Rich in Vitamin A, C, and B6</li>
            <li>Supports skin health and immune function</li>
          </ul>
        </div>

        {/* Food 2 */}
        <div className="border-l-4 border-gray-800 pl-4">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">2. Cucumber</h2>
          <p className="text-lg text-gray-800 mb-4">
            With a water content of about 96%, cucumbers are ideal for hydration. They are also rich in antioxidants and anti-inflammatory properties, helping to keep the body cool and prevent swelling.
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Contains 96% water</li>
            <li>Rich in antioxidants</li>
            <li>Anti-inflammatory properties</li>
          </ul>
        </div>

        {/* Food 3 */}
        <div className="border-l-4 border-gray-800 pl-4">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">3. Coconut Water</h2>
          <p className="text-lg text-gray-800 mb-4">
            Coconut water is a natural electrolyte-rich beverage that replenishes fluids and minerals lost through sweat. It’s a great alternative to sugary drinks and helps maintain hydration.
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Natural electrolyte source</li>
            <li>Helps replenish lost fluids</li>
            <li>Low in calories, great for hydration</li>
          </ul>
        </div>

        {/* Food 4 */}
        <div className="border-l-4 border-gray-800 pl-4">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">4. Strawberries</h2>
          <p className="text-lg text-gray-800 mb-4">
            Strawberries are 91% water and packed with antioxidants and vitamin C. They help combat dehydration and support healthy skin. Enjoy them fresh or blended into smoothies for a cooling treat.
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>91% water content</li>
            <li>Rich in antioxidants</li>
            <li>Supports skin health and hydration</li>
          </ul>
        </div>

        {/* Food 5 */}
        <div className="border-l-4 border-gray-800 pl-4">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">5. Pineapple</h2>
          <p className="text-lg text-gray-800 mb-4">
            Pineapple is high in water content (86%) and bromelain, an enzyme that aids digestion. It also provides a refreshing tropical flavor to cool you down and keep your digestive system healthy.
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>86% water content</li>
            <li>Contains bromelain for digestion</li>
            <li>Refreshing tropical flavor</li>
          </ul>
        </div>

        {/* Food 6 */}
        <div className="border-l-4 border-gray-800 pl-4">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">6. Tomatoes</h2>
          <p className="text-lg text-gray-800 mb-4">
            Tomatoes are made up of 95% water and are rich in vitamins C and A. They help hydrate the body while offering a natural sun protection effect thanks to the antioxidants, such as lycopene.
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>95% water content</li>
            <li>Rich in vitamins C and A</li>
            <li>Natural sun protection due to lycopene</li>
          </ul>
        </div>

        {/* Food 7 */}
        <div className="border-l-4 border-gray-800 pl-4">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">7. Oranges</h2>
          <p className="text-lg text-gray-800 mb-4">
            Oranges are 86% water and loaded with vitamin C, which supports the immune system and helps to stay cool during hot days. They also provide a burst of energy and hydration.
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>86% water content</li>
            <li>High in Vitamin C</li>
            <li>Boosts immune function and hydration</li>
          </ul>
        </div>

        {/* Food 8 */}
        <div className="border-l-4 border-gray-800 pl-4">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">8. Melons</h2>
          <p className="text-lg text-gray-800 mb-4">
            Other melons, such as cantaloupe and honeydew, have a water content of 90-92%. They are rich in vitamin C and beta-carotene, offering cooling benefits and helping maintain healthy skin during summer.
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>90-92% water content</li>
            <li>Rich in Vitamin C and beta-carotene</li>
            <li>Great for skin hydration</li>
          </ul>
        </div>

        {/* Food 9 */}
        <div className="border-l-4 border-gray-800 pl-4">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">9. Lettuce</h2>
          <p className="text-lg text-gray-800 mb-4">
            Lettuce is made up of 95% water, making it an excellent choice for hydration. It’s low in calories and provides a refreshing base for salads, adding a crisp texture and hydration to your meals.
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>95% water content</li>
            <li>Low in calories</li>
            <li>Perfect for salads</li>
          </ul>
        </div>

        {/* Food 10 */}
        <div className="border-l-4 border-gray-800 pl-4">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">10. Grapefruit</h2>
          <p className="text-lg text-gray-800 mb-4">
            Grapefruit is 88% water and contains vitamin C, which helps fight dehydration and boost the immune system. Its tangy flavor makes it a refreshing summer snack, perfect for keeping cool.
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>88% water content</li>
            <li>Rich in Vitamin C</li>
            <li>Perfect for hydration and energy</li>
          </ul>
        </div>
      </div>

      {/* Conclusion */}
      <div className="mt-12 pb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Conclusion</h2>
        <p className="text-lg text-gray-800">
          These 10 foods are not only refreshing but also packed with essential nutrients to keep you hydrated and energized during the summer. Make them a regular part of your diet to beat the heat and stay cool throughout the season.
        </p>
      </div>
      <Bottom />
    </div>
  );
};

export default SummerFoods;
