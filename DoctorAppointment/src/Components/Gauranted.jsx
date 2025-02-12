import React from 'react'
import { SiTicktick } from "react-icons/si";
import Commant from './Commant';
import { useNavigate } from 'react-router-dom';
const Gauranted = () => {
  const navigate = useNavigate();
  return (
    <div className='h-screen w-full'>
      <div className='grid grid-cols-1 md:grid-cols-2 '>
        <div className=''>
            <div>
          <div className="font-sans  animate-slideDown  text-3xl pr-5 font-medium mt-12 mx-16 text-gray-700   ">
          Instant appointment with
          </div>
          <div className="p-2 animate-slideDown text-gray-800 font-semibold text-4xl  m-12 mt-2 mx-16  pb-2 ">
          doctors.Guaranteed.
          </div>
                <p className=" p-1 mx-16 justify-around flex text-gray-600 gap-0   items-center w-64">
                            <i>
                              {" "}
                              <SiTicktick className='' color="dodgerblue" />
                            </i>
                            <div className="text-lg  " >100,000 Verified doctors</div>
                          </p>
                          <p className=" relative  text-gray-600 p-1 justify-around flex  items-center mx-16 w-80">
                            <i>
                              <SiTicktick className=' absolute left-[13px] top-2' color="dodgerblue" />
                            </i>
                            <div className="text-lg mx-5 " >3M+ Patient recommendations</div>
                          </p>
                          <p className="mx-16  text-gray-600 p-1  justify-around flex  items-center w-52">
                            <i>
                              <SiTicktick className='' color="dodgerblue" />
                            </i>
                            <div className="text-lg mx-0 " >25M Patients/year</div>
                          </p>
                        
                        <button className='btnOne' onClick={()=>navigate('/doctarPage')}>Find me The Ragister Doctar</button>
            </div>
            <div >
                <div className=' ' ><Commant /></div>
            </div>
        </div>
        <div className=' flex justify-center'>
            <video src="vdo1.webm"  autoPlay loop muted className='m-20 h-[500px]'></video>
        </div>
      </div>
    </div>
  )
}

export default Gauranted
