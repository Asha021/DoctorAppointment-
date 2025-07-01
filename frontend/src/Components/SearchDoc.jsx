import React,{useEffect} from 'react';
import DoctrsData from './DoctrsData';
import Bottom from './Bottom';
import { useLocation } from 'react-router-dom';

const SearchDoc = () => {
    const location = useLocation();
    const [selectedDoctr,setSelectedDoctr] = React.useState([]);
    const one =  location.state || {}
    const {searchTerm='', clinicSearch =''} = one
    console.log(one);

useEffect(() => {
    if (searchTerm && clinicSearch) {
      const filtered = DoctrsData.filter(item =>
        item.specialization === clinicSearch &&
        item.location === searchTerm
    );
    setSelectedDoctr(filtered);
      console.log(filtered);
      
    }
  }, []);


  return (
    <div className="mx-8 md:mx-20 lg:mx-40 justify-center mt-8 items-center bg-gray-100 py-8">
      
      {selectedDoctr.map((doctor, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row gap-5 bg-white p-5 w-full m-2 rounded-lg shadow-lg"
        >
          {/* Doctor Info Section */}
          <div className="flex flex-col items-center md:items-start md:w-1/3 gap-5 mb-4 md:mb-0">
            <img
            
              src={doctor.img}
              alt={`${doctor.name} Profile`}
              className="w-40 h-40 object-cover rounded-md border-2 border-gray-300"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center md:text-left">{doctor.name}</h3>
            <p className="text-gray-600 mb-1"><strong>Specialization:</strong> {doctor.specialization}</p>
            <p className="text-gray-600 mb-1"><strong>Experience:</strong> {doctor.experience}</p>
            <p className="text-gray-600 mb-1"><strong>Location:</strong> {doctor.location}</p>
          </div>

          {/* Doctor Details Section */}
          <div className="w-full md:w-2/3 pt-8 md:pt-16">
            <p className="text-gray-600 mb-1"><strong>Consultation Fee:</strong> {doctor.consultationFee}</p>
            <p className="text-gray-600 mb-1"><strong>Rating:</strong> {doctor.rating}</p>
            <p className="text-gray-600 mb-1"><strong>Clinic:</strong> {doctor.clinic}</p>
            <p className="text-gray-600 mb-1"><strong>Availability:</strong> {doctor.availability}</p>
            <p className="text-gray-600 mb-3"><strong>Patient Stories:</strong> {doctor.patient_stories}</p>

            <div className="flex flex-col sm:flex-row gap-2">
              <button className="w-full sm:w-1/2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 mb-2">
                Book Appointment
              </button>
              <button className="w-full sm:w-1/2 bg-blue-200 hover:text-white py-2 rounded-lg hover:bg-blue-400 mb-2">
                Contact Hospital
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className='space-y-10 py-20 bg-white'></div>
      <Bottom />
    </div>
  );
};

export default SearchDoc;
