import React from 'react';
import Bottom from './Bottom';

const TermAndCondition = () => {
  return (
    <div className='mt-16'>
      <h2 className='bg-blue-800 font-bold text-4xl text-center p-10 text-white'>
        Quick Slot Terms and Conditions
      </h2>
      <div className='mx-20 py-8 text-gray-700 leading-relaxed'>
        
    

      <div className='mb-6'>
          <h3 className='text-2xl font-semibold text-gray-600 mb-3'>Modification of Agreement</h3>
          <p>
            We reserve the right to modify or terminate any portion of this Agreement for any reason and at any time. 
            Any such modifications shall be informed to you in writing. You should read the Agreement at regular intervals. 
            Your continued use of the Website following any such modification constitutes your agreement to abide by the modified Agreement.
          </p>
        </div>

        <div className='mb-6'>
          <h3 className='text-2xl font-semibold text-gray-600 mb-3'>User Agreement</h3>
          <p>
            By availing any of the Services offered by us, you acknowledge and agree to be bound by this Agreement. 
            If you do not agree with any part of this Agreement, please refrain from using the Website or any of its Services.
          </p>
        </div>

        <div className='mb-6'>
          <h3 className='text-2xl font-semibold text-gray-600 mb-3'>Access to Services</h3>
          <p>
            Your access to and use of the Website and Services will be solely at the discretion of Quick Slot. 
            We reserve the right to grant or revoke access at any time based on our policies and guidelines.
          </p>
        </div>

        <div className='mb-6'>
          <h3 className='text-2xl font-semibold text-gray-600 mb-3'>Legal Compliance</h3>
          <p>
            This Agreement is published in compliance with and governed by the provisions of Indian law, including but not limited to:
          </p>
          <ul className='list-disc pl-6 mt-2'>
            <li>The Indian Contract Act, 1872</li>
            <li>The (Indian) Information Technology Act, 2000</li>
            <li>
              The rules, regulations, guidelines, and clarifications framed under these laws, including:
              <ul className='list-disc pl-6 mt-2'>
                <li>The (Indian) Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Information) Rules, 2011 (the “SPI Rules”)</li>
                <li>The Information Technology (Intermediary Guidelines and Digital Ethics Code) Rules, 2021 (the “IG Rules”)</li>
              </ul>
            </li>
          </ul>
        </div>

        <h3 className='text-2xl font-semibold text-gray-600 mb-4'>1. Appointment Booking</h3>
        <p>
          Users must provide accurate and complete details while booking an appointment. Any incorrect or misleading 
          information may result in appointment cancellation. All bookings are subject to availability, and we do not 
          guarantee confirmation unless explicitly stated. Users are advised to arrive at the clinic at least 10 minutes 
          before their scheduled appointment to avoid delays. Cancellations or modifications to an appointment should be 
          made at least 24 hours in advance to accommodate other patients.
        </p>

        <h3 className='text-2xl font-semibold text-gray-600 mt-6 mb-4'>2. Payment Policy</h3>
        <p>
          Payments for booked appointments can be made using UPI, net banking, or credit/debit cards. We ensure a 
          secure payment gateway to protect user transactions. In case of a cancellation, eligible refunds will be 
          processed within 7 business days. Refunds are only applicable if the cancellation is made within the allowed 
          time frame. Any rescheduling of appointments may incur additional charges based on availability and clinic 
          policies. Users must verify the final payment amount before proceeding, as Quick Slot will not be responsible 
          for overpayments or incorrect transactions.
        </p>

        <h3 className='text-2xl font-semibold text-gray-600 mt-6 mb-4'>3. Data Privacy</h3>
        <p>
          We prioritize user privacy and data security. All personal information provided during registration and 
          appointment booking is kept confidential and is not shared with any third party without explicit consent. 
          Users are advised to maintain the confidentiality of their login credentials and avoid sharing passwords. 
          Any unauthorized access or suspicious activity must be reported immediately. We employ advanced security 
          measures to safeguard sensitive user data, ensuring compliance with applicable data protection laws.
        </p>

        <h3 className='text-2xl font-semibold text-gray-600 mt-6 mb-4'>4. User Responsibilities</h3>
        <p>
          Users must adhere to ethical conduct while interacting with doctors, clinic staff, and other patients. 
          Any form of abusive language, harassment, or misconduct will result in immediate suspension from our platform. 
          Patients are expected to follow prescribed medical advice and maintain transparency in their health conditions. 
          Quick Slot reserves the right to deny access to users who violate these terms repeatedly. In case of any 
          disputes, users can contact our support team for resolution.
        </p>

        <h3 className='text-2xl font-semibold text-gray-600 mt-6 mb-4'>5. Limitation of Liability</h3>
        <p>
          Quick Slot acts as an intermediary platform connecting patients with healthcare providers. We are not liable 
          for any medical outcomes, incorrect treatments, or miscommunication between patients and doctors. Users 
          acknowledge that medical treatments depend on multiple factors beyond our control, and we do not offer any 
          guarantees regarding the effectiveness of treatments. In case of dissatisfaction with medical services, users 
          must address their concerns directly with the respective healthcare provider.
        </p>

        <h3 className='text-2xl font-semibold text-gray-600 mt-6 mb-4'>6. Terms Modification</h3>
        <p>
          Quick Slot reserves the right to update or modify these terms at any time. Users will be notified of any 
          significant changes, and continued use of our services implies acceptance of the updated terms. We encourage 
          users to review this section periodically to stay informed about any revisions. If users disagree with any 
          modified terms, they may discontinue using our services.
        </p>

        <h3 className='text-2xl font-semibold text-gray-600 mt-6 mb-4'>7. Contact Us</h3>
        <p>
          If you have any queries or require further clarification regarding these terms, you can reach out to us at 
          <span className='font-semibold text-blue-600'> support@quickslot.com</span>. Our support team is available 
          to assist you with any concerns related to appointment bookings, payments, or general inquiries. We value 
          our users and aim to provide a seamless and efficient experience.
        </p>
      </div>
      <Bottom />
    </div>
  );
};

export default TermAndCondition;
