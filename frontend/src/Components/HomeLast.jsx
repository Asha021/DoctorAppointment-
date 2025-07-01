import React from 'react'
import { BiMessageDetail } from "react-icons/bi";
import { SlBasket } from "react-icons/sl";
import { FaBookMedical } from "react-icons/fa";
import { GrTest } from "react-icons/gr";
import { GrArticle } from "react-icons/gr";
import { IoBagAddSharp } from "react-icons/io5";
import Safety from './Safety';
import {useNavigate} from 'react-router-dom'

const HomeLast = () => {
    const navigate = useNavigate()
  return (
    <div className=''>
        <div className='w-full z-40 py-5 bg-blue-500 text-gray-700  md:h-24  md:flex justify-evenly items-center'>
            <div className='HlastFirst'  onClick={()=>{navigate('./ConsultDoctar')}}>
                <p className='HlastSec'><BiMessageDetail size={25}/></p>
                <p className='text-sm text-center'  >Consult With a doctar</p>
            </div>
            <div className='HlastFirst' onClick={()=>{navigate('/Ordernow')}}>
                <p className='HlastSec'><SlBasket size={25} /></p>
                <p className='text-sm text-center'>Our medicine</p>
            </div>
            <div className='HlastFirst'  onClick={()=>{navigate("/service")}}>
                <p className='HlastSec'><FaBookMedical size={25}/></p>
                 <p className='text-sm text-center'>View medical records</p>
            </div>
            <div className='HlastFirst' onClick={()=>{navigate('./ConsultDoctar')}}>
            <p className='  HlastSec'><GrTest size={25}/></p>
            <p className='text-sm text-center'>Book test</p>
            </div>
            <div className='HlastFirst' onClick={()=>{navigate('./blog')}}>
            <p className='HlastSec'><GrArticle size={25}/></p>
            <p className='text-sm text-center'  >Read article</p>
            </div>
            <div className='HlastFirst' onClick={()=>{navigate("/doctarPage")}}>
                <p className=' HlastSec'><IoBagAddSharp size={25}/></p>
                <p className='text-sm text-center'>For healthcare provider</p>
                </div>
        </div>
        <Safety />
    </div>
  )
}

export default HomeLast
