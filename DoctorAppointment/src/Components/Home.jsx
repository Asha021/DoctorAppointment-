import React, { useEffect, useState } from 'react';
import { CiLocationOn, CiSearch } from "react-icons/ci";
import Safety from './Safety';
import HomeLast from './HomeLast';
import DoctarData from './DoctrsData';
import  Specialization  from './Specility'; // Named import
import { useNavigate } from 'react-router-dom';
import DoctorPage from './DoctarPage';
import SearchDoc from './SearchDoc';

const Home = () => {
  const locations = ["Delhi", "Mumbai","Haryana","Asam","Shri Nagar","Keral", "Bangalore","Gujrat", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad", "Jaipur", "Chandigarh"];
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [drop, setDrop] = useState(false);
  const navigate = useNavigate();
  
  const [clinicSearch, setClinicSearch] = useState('');
  const [clinicSugg, setClinicSugg] = useState([]);
  const [showClinicSugg, setShowClinicSugg] = useState(false);
  // input effect
  const texts = ["Search for best Clinics.","Search Doctars","Book your appointment."]
  const [write,setWrite]=useState('')
  const [index,setIndex]=useState(0);
  const [charIndex,setCharIndex]=useState(0);
  const [deletes,setDelete]=useState(false);


  // input effect
  useEffect(()=>{
      const currentText = texts[index]
      let delay = 100;
      if (!deletes && charIndex===currentText.length) {
          delay=1000;
          setDelete(true);
      }else if (deletes && charIndex === 0) {
        setDelete(false);
        setIndex((prev)=>(prev+1)%texts.length);
        delay = 500
      }

      const timeOut = setTimeout(() => {
          if (!deletes) {
            setWrite(currentText.substring(0,charIndex + 1));
            setCharIndex((prev)=>prev+1)
          }else{
            setWrite(currentText.substring(0,charIndex - 1));
            setCharIndex((prev)=>prev-1)
          }
      }, delay);
      return () => clearTimeout(timeOut);
  },[texts,index,deletes,write])

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filtered = value 
      ? locations.filter(city => city.toLowerCase().includes(value.toLowerCase()))
      : [];
    setSuggestions(filtered);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (city) => {
    setSearchTerm(city);
    setShowSuggestions(false);
  };

  const handleClinic = (e) => {
    const value = e.target.value;
    setClinicSearch(value);

    // Specialization filter 
      const filtered = value 
      ? Specialization.filter(item =>
          item.specialization.toLowerCase().includes(value.toLowerCase())
        )
      : [];
    setClinicSugg(filtered);
    setShowClinicSugg(true);
  };

  const clickClinicSuggestion = (item) => {
    setClinicSearch(item.specialization);
    setShowClinicSugg(false);
  };

  const arrow = (category) => {
    navigate('/doctarPage', { state: { category: category } });
  };

  const dropDown = () => {
    setDrop(!drop);
  };


  const doctr=()=>{
      // navigate('/searchDoctar',{state:{category:{ searchTerm:searchTerm,clinicSearch:clinicSearch}}} )
      navigate('/doctarPage', { state: { searchTerm: searchTerm, clinicSearch : clinicSearch } });
      console.log(searchTerm);
      console.log(clinicSearch);
      console.log();
  }

  return (
    <div className='h-screen bg-gray-100'>
      <div className='contrast-150 h-[545px] w-full'>
        <div className='text-center pt-12'>
          <p className='text-4xl font-bold text-gray-800 pt-8 pb-6 mb-5 my-14 md:mb-3'>
            Find And Book
          </p>

          {/* Location and Clinic Search Inputs */}
          <div className='justify-center md:flex'>
            {/* Location Input */}
            <div className='relative'>
              <CiLocationOn size={30} className='hidden lg:block absolute pt-3 left-2 text-gray-500' />
              <input
                type="text"
                value={searchTerm}
                // onKeyDown={(e) => e.key === 'Enter' && doctr()}
                onChange={handleLocationChange}
                placeholder='Search Your Location'
                className='h-10 focus:outline-none border border-gray-400 indent-10 text-gray-700 w-80 md:w-52'
              />
              {showSuggestions && suggestions.length > 0 && (
                <div className='absolute top-12 left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg z-50'>
                  {suggestions.map((city, index) => (
                    <div
                      key={index}
                      className='p-2 hover:bg-gray-100 cursor-pointer'
                      onClick={() => handleSuggestionClick(city)}
                    >
                      {city}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Clinic (Specialization) Search Input */}
            <div className='relative'>
              <CiSearch onClick={doctr} size={30} className='hidden lg:block absolute pt-3 left-2 text-gray-500' />
              <input
                type="text"
                value={clinicSearch}
                onChange={handleClinic}
                onKeyDown={(e) => e.key === 'Enter' && doctr()}
                placeholder={write}
                className='border border-gray-400 h-10 focus:outline-none w-80 indent-10 text-gray-700'
              />
              {showClinicSugg && clinicSugg.length > 0 && (
                <div className='absolute top-12 left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg z-50'>
                  {clinicSugg.map((item, ind) => (
                    <div 
                      key={ind} 
                      className='p-2 hover:bg-gray-100 cursor-pointer'
                      onClick={() => clickClinicSuggestion(item)}
                    >
                      {item.specialization}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Popular Searches Section */}
            {/* Popular Searches Section */}
            <div className='w-auto pl-0 text-left md:flex lg:mx-80 lg:mr-96 m-5'>
            <div className='text-gray-700 hover:text-gray-900 text-sm flex md:ml-20 text-left ml-16 hidden lg:block'>
              Popular Searches:
              {drop && (
                <div className='grid grid-cols-2 md:grid-cols-4 indent-3 bg-white mt-28 lg:mt-8 w-96 md:w-[650px] h-auto left-30 absolute pb-5'>
                  <div className='leading-relaxed'>
                    <p className='font-semibold indent-2 my-2 ml-7'>General Physicians and Specialists</p>
                    <p className='Hother indent-5'></p>
                    <p className='Hother indent-5' onClick={() => arrow('Cardiologist')}>Cardiologist</p>
                    <p className='Hother indent-5' onClick={() => arrow('Dermatologist')}>Dermatologist</p>
                    <p className='Hother indent-5' onClick={() => arrow('Psychiatrist')}>Psychiatrist</p>
                    <p className='Hother indent-5' onClick={() => arrow('Gastroenterologist')}>Gastroenterologist</p>
                    <p className='Hother indent-5' onClick={() => arrow('Ear-Nose-Throat')}>Ear-Nose-Throat</p>
                    <p className='Hother indent-5' onClick={() => arrow('Gynecologist/Obstetrician')}>Gynecologist/Obstetrician</p>
                    <p className='Hother indent-5' onClick={() => arrow('Neurologist')}>Neurologist</p>
                    <p className='Hother indent-5' onClick={() => arrow('Urologist')}>Urologist</p>
                  </div>
                  <div>
                    <p className='my-2 font-semibold ml-14 indent-0'>Dentists</p>
                    <p className='Hother indent-14' onClick={() => arrow('Dentist')}>Dentist</p>
                    <p className='Hother indent-14' onClick={() => arrow('Prosthonotist')}>Prosthodontist</p>
                    <p className='Hother indent-14' onClick={() => arrow('Orthodontist')}>Orthodontist</p>
                    <p className='Hother indent-14' onClick={() => arrow('Pediatric')}>Pediatric</p>
                    <p className='Hother indent-14' onClick={() => arrow('Endodontist')}>Endodontist</p>
                    <p className='Hother indent-14' onClick={() => arrow('Implantologist')}>Implantologist</p>
                  </div>
                  <div>
                    <p className='my-2 font-semibold indent-0 leading-relaxed'>Alternative Medicine</p>
                    <p className='Hother indent-3' onClick={() => arrow('Ayurveda')}>Ayurveda</p>
                    <p className='Hother indent-3' onClick={() => arrow('Homeopath')}>Homeopath</p>
                    <p className='Hother indent-3' onClick={() => arrow('Siddha')}>Siddha</p>
                    <p className='Hother indent-3' onClick={() => arrow('Unani')}>Unani</p>
                    <p className='Hother indent-3' onClick={() => arrow('Yoga & Naturopathy')}>Yoga & Naturopathy</p>
                  </div>
                  <div>
                    <p className='my-2 font-semibold indent-0 leading-relaxed'>Therapists & Nutritionists</p>
                    <p className='Hother indent-3' onClick={() => arrow('Audiologist')}>Audiologist</p>
                    <p className='Hother indent-3' onClick={() => arrow('Acupuncturists')}>Acupuncturists</p>
                    <p className='Hother indent-3' onClick={() => arrow('Speech')}>Speech</p>
                    <p className='Hother indent-3' onClick={() => arrow('Dietitian/Nutritionist')}>Dietitian/Nutritionist</p>
                  </div>
                </div>
              )}
            </div>
            <div className='lg:flex lg:block hidden md:mt-0 mt-2 text-left ml-16 w-72 md:gap-4 text-gray-600 text-sm'>
              <p className='hover:text-gray-900 cursor-pointer' onClick={() => arrow('Dermatologist')}>Dermatologist</p>
              <p className='hover:text-gray-900 cursor-pointer' onClick={() => arrow('Pediatrician')}>Pediatrician</p>
              <p className='hover:text-gray-900 cursor-pointer' onClick={() => arrow('Gynecologist/Obstetrician')}>Gynecologist/Obstetrician</p>
              <details className='text-gray-700 text-sm relative hidden z-[100] lg:block'>
                <summary onClick={dropDown} className='text-gray-600 cursor-pointer w-20 text-sm hover:text-gray-900'>Others</summary>
              </details>
            </div>
          </div>
         
        </div>
      </div>
      <HomeLast />
    </div>
  );
};

export default Home;
