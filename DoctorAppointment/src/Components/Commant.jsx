import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
import Order_Med from './Order_Med';

const Commant = () => {
    const [slide,setSlide] = React.useState(0);
    const array=[
            "The doctor was very professional and attentive. Highly recommend!Adding a chat option with doctors would be helpful.",
            "The booking interface could be more user-friendly.The booking interface could be more user-friendly.",
            "The appointment process was smooth and hassle-free. Thank you!Dr. Smith was amazing! Very knowledgeable and empathetic.",
            "Dr. Smith was amazing! Very knowledgeable and empathetic.The online consultation feature is a game-changer!",
            "The online consultation feature is a game-changer!Appreciate the reminders and follow-up care provided",
            "It would be great to see more time slots available for appointments. Thank you!Dr. Smith was amazing! Very knowledgeable and empathetic",
            "Great experience! The clinic was clean, and the staff was helpful.feature is a game-changer!Appreciate the reminders.",
    ]
    const [user,SetUser]=React.useState(0);
    const User=[
        "Avinash Kumar",
        'Kapil Dev',
        "Sharadha",
        "Priya jain",
        "Shiv Prasad",
        "Vipin Kumar",
        "Shreya",
    ]
    const PrvsSlide=()=>{
            setSlide((prvs)=>(prvs+1)%array.length)
            SetUser((prvs)=>(prvs+1)%User.length)
    }
    const nextSlide=()=>{
            setSlide((prvs)=>(prvs+1)%array.length)   
            SetUser((prvs)=>(prvs+1)%User.length)   
    }
  return (
     <div>
    <div className='mx-3 mt-7 justify-evenly flex font-sans w-[450px]'>
        <p onClick={PrvsSlide} className='m-0  items-center flex p-0 '><FaAngleLeft color='gray' size={25} className='flex justify-center' /></p>
        <div className='mx-0' >
        <div className='flex mx-5 mt-3' >
        <FaStar color='Green' />
        <FaStar color='Green' />
        <FaStar color='Green' />
        <FaStar color='Green' />
        <FaStar color='Green' />
        </div>
        <div className='m-5'>{array[slide]}</div>
        <div  className='m-5 flex gap-2' >
            <p><FaUserAlt size={20} /></p>
            <p>{User[user]}</p>
        </div>
        </div>
        <p onClick={nextSlide} className= ' p-0 items-center flex m-0'><FaChevronRight color='gray' size={25} /></p>
    </div>
        <Order_Med />
    </div>
  )
}

export default Commant

