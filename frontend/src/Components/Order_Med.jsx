import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { SiTicktick } from "react-icons/si";
import { FaFileDownload } from "react-icons/fa";
import { FaAward } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { PiCertificateLight } from "react-icons/pi";
import { CgEnter } from "react-icons/cg";
import Bottom from './Bottom';

function Order_Med() {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate()

    // useEffect triggers after component mounts
    useEffect(() => {
      setAnimate(true);
    }, []);
  return (
    <div className="mt-10 h-screen  bg-gray-100 w-full  absolute left-0  pt-8 ">
    <div className="grid md:grid-cols-2 w-fit  ">
      <p className=""> 
        <p className={`${animate ? 'animate-slideDown' : " "} mx-5  font-sans text-3xl md:text-2xl font-medium mt-12 md:mx-16 text-gray-600   `}>
        Get all your medicines.
        </p>
        <p className="p-2  animate-slideDown text-gray-800 font-semibold text-3xl md:text-3xl  m-12 mt-2 md:mx-16 mx-5 pb-2 ">
        Everytime. On time.
        </p>
        <p className="p-1 mx-1 md:mx-16 justify-around flex text-gray-600  items-center w-56">
          <i>
            {" "}
            <SiTicktick color="dodgerblue" />
          </i>
          <div className="text-lg " >Guaranteed availability</div>
        </p>
        <p className="text-gray-600  md:mx-16 mx-1 p-1 justify-around flex  items-center w-80">
          <i>
            {" "}
            <SiTicktick color="dodgerblue" />
          </i>
          <div className="text-lg" >Over 130,000+ genuine medicines</div>
        </p>
        <p className="md:mx-16 mx-1 text-gray-600 p-1  justify-around flex  items-center w-60">
          <i>
            {" "}
            <SiTicktick color="dodgerblue" />
          </i>
          <div className="text-lg" >Home delivery in 24hrs</div>
        </p>
          <button className='btnOne mb-10 md:mb-0' onClick={()=>{navigate('/ConsultDoctar')}}>Order Mediciane</button>
      </p>
      <p className="hidden md:block justify-center  
      flex">
        <img
          src="Sec.svg"
          className=" m-14 size-96"
          alt="img"
        />
      </p>
    </div>
    <Bottom />
  </div>
  )
}

export default Order_Med
