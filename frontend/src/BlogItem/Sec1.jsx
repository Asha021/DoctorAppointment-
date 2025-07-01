import React from "react";
import Bottom from "../Components/Bottom";
import {useNavigate} from 'react-router-dom'

const Sec1 = () => {
  const navigate = useNavigate()
  const Sec1 = [
    {
      img: "migran.jpg",
      title: "Instant Migraine Relief at Home: Powerful Home Remedies",
      discription:
      "Don't suffer! Find instant migraine relief at home with powerful natural remedies. Explore effective methods like cool compresses, ginger, & stress management.",
      data: () => { navigate("/migran"); },
    },
    {
      img: "sunburn.jpg",
      title: "10 Effective Ways to Treat Sunburn at Home | Sunburn Relief Tips",
      data: () => { navigate("/sunburn"); },
      discription:
        "Discover 10 home remedies to treat sunburn effectively. Learn how to soothe, heal, and relieve sunburn pain with these simple, dermatologist-approved tips.",
    },
    {
      img: "sunburnCause.jpg",
      title: "Sunburn Causes and Symptoms: Prevention and Treatment Tips",
      data: () => { navigate("/sunburnCause"); },
      discription:
        "Discover the causes and symptoms of sunburn, along with prevention strategies and treatment options. Learn how to protect your skin and manage sunburn effectively.",
    },
    {
      img: "painful.jpg",
      data: () => { navigate("/painfulSymtons"); },
      title:
        "Painful intercourse (dyspareunia) - Causes, Symptoms, and Treatment",
      discription:
        "Experiencing pain during sex? Learn about the causes, symptoms, and treatments of dyspareunia. Find relief and improve your intimate life.",
    },
    {
      img: "diebitie.jpg",
      data: () => { navigate("/diebities"); },
      title:
        "Understanding Diabetes: Symptoms, Causes, Types, Treatments, and Prevention",
      discription:
        "Diabetes is a long-term condition affecting the way the body processes blood sugar or glucose that is gotten from food. Studies show that more than 400 million people around the globe have diabetes and this is a very big issue.",
    },
    {
      img: "food.jpg",
      data: () => { navigate("/summarFood"); },
      title: "10 Best Summer Foods to Stay Cool and Hydrated",
      discription:
        "Discover 10 best summer foods that help you stay cool and hydrated. Beat the heat with these refreshing fruits and vegetables.",
    },
    {
      img: "health.png",
      data: () => { navigate("/treatment"); },
      title: "Healthy Lifestyle: 10 Essential Habits for Healthy Life",
      discription:
        "Discover the top 10 essential habits for maintaining a healthy lifestyle. From exercise to nutrition, learn how to master wellness for a happier, healthier you. We'll delve into 10 essential habits that form a healthy lifestyle, each contributing its unique essence to well-being.",
    },
    {
      img: "symptoms.jpg",
      data: () => { navigate("/healthyLifestyle"); },
      title: "Constipation: Causes, Symptoms, and Effective Treatments",
      discription:
        "Discover the causes, symptoms, and effective treatments for constipation. Learn how dietary and lifestyle changes can help manage and prevent this common issue.",
    },
    {
        img: "sunScreen.jpg",
        data: () => { navigate("/protectYourSkin"); },
        title: "How to Protect Your Skin from the Sun: Essential Tips",
        discription:
          "Description: Learn effective ways to protect your skin from the sun with sun protection tips, sunscreen advice, and protective clothing recommendations.",
      },
  ];

  return (
    <div className="min-h-screen mt-16  bg-gray-50">
      <h1 className="text-center text-3xl animate-slideDown font-bold mb-10 pt-5">Healthy Lifestyle</h1>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-6 px-6 md:px-20">
        {Sec1.map((remedi, index) => (
          <div
            key={index}
            className=" bg-white p-5 mb-10 rounded-lg hover:shadow-sm hover:shadow-blue-500 "
          >
            <img
              src={remedi.img}
              alt={remedi.title}
              className="w-full h-60 object-cover rounded-md mb-4"
              onClick={remedi.data}
            />
            <h3 className="text-lg font-semibold mb-2">{remedi.title}</h3>
            <p className="text-sm">{remedi.discription}</p>
          </div>
        ))}
      </div>
      {/* <Bottom /> */}
    </div>
  );
};

export default Sec1;
