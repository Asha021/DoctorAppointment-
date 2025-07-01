import React from 'react';
import Bottom from '../Components/Bottom';

const Diabetes = () => {
  return (
    <div className="mx-20 mt-16  px-4 py-10">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Understanding Diabetes: Causes, Symptoms, and Treatments</h1>
        <img
          src="diebitie.jpg" // replace with actual image path
          alt="diebitiejpg"
          className="w-auto md:w-1/2 mt-10 border rounded-lg hover:shadow-sm transition-shadow duration-300"
        />
        <p className="text-lg text-gray-700 mt-6">
          Diabetes is a chronic condition that affects how your body regulates blood sugar (glucose). Learn about the causes, symptoms, and treatment options for diabetes, and discover how to manage your condition effectively.
        </p>
      </div>

      {/* Causes Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Causes of Diabetes</h2>

        <p className="text-lg text-gray-800 mb-6">
          Diabetes occurs when the body either cannot produce enough insulin or cannot use insulin effectively. Insulin is a hormone that helps regulate blood sugar levels. There are various causes for this, depending on the type of diabetes.
        </p>

        <h3 className="text-2xl font-medium text-gray-700 mb-4">Type 1 Diabetes</h3>
        <p className="text-lg text-gray-800 mb-4">
          Type 1 diabetes is an autoimmune condition where the immune system attacks the insulin-producing cells in the pancreas. The exact cause is unknown, but genetics and environmental factors such as viral infections may contribute.
        </p>

        <h3 className="text-2xl font-medium text-gray-700 mb-4">Type 2 Diabetes</h3>
        <p className="text-lg text-gray-800 mb-4">
          Type 2 diabetes occurs when the body becomes resistant to insulin or the pancreas is unable to produce enough insulin. Lifestyle factors such as being overweight, lack of physical activity, and poor diet can increase the risk.
        </p>

        <h3 className="text-2xl font-medium text-gray-700 mb-4">Gestational Diabetes</h3>
        <p className="text-lg text-gray-800 mb-6">
          Gestational diabetes occurs during pregnancy and may resolve after childbirth. However, women who experience gestational diabetes are at higher risk of developing Type 2 diabetes later in life.
        </p>
      </div>

      {/* Symptoms Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Symptoms of Diabetes</h2>

        <p className="text-lg text-gray-800 mb-6">
          The symptoms of diabetes vary depending on the type. While some symptoms may be subtle, others can be more severe.
        </p>

        <h3 className="text-2xl font-medium text-gray-700 mb-4">Common Symptoms</h3>
        <ul className="list-disc pl-8 text-lg text-gray-800 mb-6">
          <li>Increased thirst and frequent urination</li>
          <li>Fatigue and weakness</li>
          <li>Unexplained weight loss</li>
          <li>Blurred vision</li>
          <li>Slow-healing sores or cuts</li>
        </ul>

        <h3 className="text-2xl font-medium text-gray-700 mb-4">Symptoms of Severe Diabetes</h3>
        <ul className="list-disc pl-8 text-lg text-gray-800 mb-6">
          <li>Excessive hunger</li>
          <li>Numbness or tingling in hands and feet</li>
          <li>Frequent infections</li>
          <li>Fruity-smelling breath (especially in Type 1 diabetes)</li>
        </ul>
      </div>

      {/* Treatment Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Treatment and Management of Diabetes</h2>

        <p className="text-lg text-gray-800 mb-6">
          Diabetes is a lifelong condition, but it can be managed effectively through medication, lifestyle changes, and regular monitoring of blood glucose levels.
        </p>

        <h3 className="text-2xl font-medium text-gray-700 mb-4">Treatment for Type 1 Diabetes</h3>
        <p className="text-lg text-gray-800 mb-4">
          People with Type 1 diabetes need to take insulin to regulate blood sugar levels. Regular monitoring of blood glucose levels and following a balanced diet are also crucial.
        </p>

        <h3 className="text-2xl font-medium text-gray-700 mb-4">Treatment for Type 2 Diabetes</h3>
        <p className="text-lg text-gray-800 mb-4">
          In the early stages of Type 2 diabetes, lifestyle changes such as exercise, weight loss, and a healthy diet may be enough to control blood sugar. Medications like metformin are often prescribed if lifestyle changes alone are not effective.
        </p>

        <h3 className="text-2xl font-medium text-gray-700 mb-4">Gestational Diabetes Treatment</h3>
        <p className="text-lg text-gray-800 mb-6">
          Gestational diabetes is typically managed with dietary changes and exercise. In some cases, insulin injections may be required to keep blood glucose levels under control during pregnancy.
        </p>
      </div>

      {/* Prevention Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Prevention of Diabetes</h2>

        <p className="text-lg text-gray-800 mb-6">
          While Type 1 diabetes cannot be prevented, Type 2 diabetes and gestational diabetes can be managed or prevented through healthy lifestyle choices.
        </p>

        <h3 className="text-2xl font-medium text-gray-700 mb-4">Tips for Preventing Type 2 Diabetes</h3>
        <ul className="list-disc pl-8 text-lg text-gray-800 mb-6">
          <li>Maintain a healthy weight</li>
          <li>Stay physically active (aim for at least 30 minutes of exercise most days of the week)</li>
          <li>Eat a balanced diet rich in fruits, vegetables, and whole grains</li>
          <li>Limit the consumption of sugary drinks and processed foods</li>
          <li>Quit smoking and reduce alcohol consumption</li>
        </ul>
      </div>

      {/* When to Seek Medical Attention Section */}
      <div>
        <h2 className="text-2xl font-medium text-gray-700 mb-4">When to Seek Medical Attention</h2>
        <ul className="list-disc pl-8 text-lg text-gray-800 mb-6">
          <li>If you experience symptoms of diabetes or have concerns about your blood sugar levels</li>
          <li>If you have a family history of diabetes and want to assess your risk</li>
          <li>If your blood sugar levels are consistently high or low despite treatment</li>
          <li>If you notice complications such as vision problems, numbness, or slow-healing wounds</li>
        </ul>
      </div>

      {/* Conclusion */}
      <div className='pb-16'>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Conclusion</h2>
        <p className="text-lg text-gray-800">
          Diabetes is a manageable condition with proper care and lifestyle adjustments. Understanding the symptoms, causes, and treatment options can help you live a healthier life. If you suspect you have diabetes or are at risk, seeking medical advice is essential for early intervention and long-term management.
        </p>
      </div>
      <Bottom />
    </div>
  );
};

export default Diabetes;
