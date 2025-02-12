import { Route, Routes } from "react-router-dom";
import Nav from './Components/Nav'
import Blog from './Blog'
import Login from './Components/Login'
import SignUp from './SignUp'
import Home from './Components/Home'
import Contact from './Contact'
import PrivateComponent from './PrivateComponent'
import LogOut from './LogOut'
import ConsultDoctar from './ConsultDoctar'
import Sec2 from './Components/Service/Sec2'
import Order_Med from "./Components/Order_Med";
import Migran from './BlogItem/Migran'
import DotarHome from './Components/Service/DoctarHome/DotarHome'
import Clinic from './Components/Service/DoctarHome/Clinic'
import OnlineConsult from "./Components/Service/DoctarHome/OnlineConsult/OnlineConsult";
import Diebities from "./BlogItem/Diebities";
import HealthyLifestyle from "./BlogItem/HealthyLifestyle";
import PainfulSymtons from "./BlogItem/PainfulSymtons";
import SummarFood from "./BlogItem/SummarFood";
import Sunburn from "./BlogItem/Sunburn";
import SunburnCause from "./BlogItem/SunburnCause";
import Treatment from "./BlogItem/Treatment";
import ProtectYourSkin from "./BlogItem/ProtectYourSkin";
import About from "./About";
import Service from './Service'
import DoctorPage from "./Components/DoctarPage";
import DoctarData from "./Components/DoctrsData";
import SearchDoc from "./Components/SearchDoc";
import TermAndCondition from "./Components/TermAndCondition";
import PhoneNo from "./Components/PhoneNo";
import AppointmentFixed from "./Components/AppontmentFixed";



function App() {
  return (
    
    <>
    
      <Nav />
      <Routes>
        
        {/* Public Routes */}
        <Route path="/logout" element={<LogOut />} />   
        <Route path="/signup" element={<SignUp />} />   
        <Route path="/login" element={<Login />} />   

        {/* Protected Routes */}
        {/* <Route element={<PrivateComponent />}> */}
          <Route path="/" element={<Home />} />   
          <Route path="/about" element={<About /> } />   
          <Route path="/service" element={<Service /> } />   
          <Route path="/blog" element={<Blog />} />   
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/ConsultDoctar" element={<ConsultDoctar />} /> 
          <Route path="/records" element={<Sec2 />} /> 
          <Route path="/Ordernow" element={<Order_Med />} /> 
          <Route path="/migran" element={<Migran />} /> 
          <Route path="/Docateathome" element={<DotarHome />} /> 
          <Route path="/clinic" element={<Clinic />} /> 
          <Route path='/onlineConsult' element={<OnlineConsult />} /> 
          <Route path="/diebities" element={<Diebities />} />
          <Route path="/healthyLifestyle" element={<HealthyLifestyle />} />
          <Route path="/painfulSymtons" element={<PainfulSymtons />} />
          <Route path="/summarFood" element={<SummarFood />} />
          <Route path="/sunburn" element={<Sunburn />} />
          <Route path="/sunburnCause" element={<SunburnCause />} />
          <Route path="/treatment" element={<Treatment />} />
          <Route path="/protectYourSkin" element={<ProtectYourSkin />} />
          <Route path="/doctarPage" element={<DoctorPage />} />
          <Route path="/locationPage" element={<Location />} />
          <Route path="/DoctarData" element={<DoctarData />} />
          <Route path="/searchDoctar" element={<SearchDoc />} />
          <Route path="/company/terms" element={<TermAndCondition />} />
          <Route path="/contact-direct-doctar" element={<PhoneNo />} />
          <Route path="/appointment/fixed/succesfull" element={<AppointmentFixed />} />
          

          
        {/* </Route> */}
      </Routes> 
    </>
  );
}

export default App;
