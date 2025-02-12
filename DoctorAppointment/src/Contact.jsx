import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Bottom from "./Components/Bottom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Contact = () => {
  
const [name,setName] = useState('')
const [msg,setMsg] = useState('')
const [pn,setPn] = useState('')
const [errors,setError] = useState('')
 const auth = localStorage.getItem("users")
 const navigate = useNavigate()
 console.log(auth);
 
 const nullFun=()=>{
  setError("")
 }
const collectData = async (e) =>{
 e.preventDefault()
 console.log(name,msg,pn,"hyyyyyyyyyyyyyyyyyy");

    if (name==="" || msg==="" ||  pn===''){ 
            console.log('.......................');           
            setError("Pls Enter All These Field")
    }else{
      let result = await fetch("http://localhost:2000/contactus",{
        method: 'post',
        body: JSON.stringify({name,msg,pn}),
        headers:{
         'Content-Type':'application/json'
        }
      })
    
        let resultData = await result.json();
       try{
         if (auth) {        
             if (resultData.name) {
               localStorage.setItem("contact", JSON.stringify(resultData));
               setError("Message Send it..")
               setTimeout(()=>{
                navigate('/');
               },1000)
              
             }
          } else {
             navigate('/login')
          }
       }
       catch(error){
         console.error("Error in the process:", error);
       }
    
    }
   
   }         

return (
<div>
  <div className="max-w-4xl mt-28 mb-24 mx-auto p-5  bg-white rounded-lg shadow-2xl">
 <div className="grid grid-cols-1 pb-7  lg:grid-cols-2 gap-8">
   {/* Contact Form */}
   <div>
     <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Contact Us</h2>

     <form>
       {/* Name Field */}
       <div className="shadow-md rounded-lg px-1">
       <div className="mb-4">
         <label htmlFor="name" className="block text-gray-700">Your Name</label>
         <input
           type="text"
           onFocus={nullFun}
           id="name"
           value={name}
           onChange={(e)=>(setName(e.target.value))}
           name="name"
           className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
           placeholder="Enter your name"
         />
       </div>
       

       <div className="mb-4">
         <label htmlFor="pn" className="block text-gray-700">Phone No</label>
         <input
           type="text"
           id="pn"
           onFocus={nullFun}
           name="pn"
           value={pn}
           onChange={(e)=>(setPn(e.target.value))}
           className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
           placeholder="Enter Your No"
         />
       </div>

       {/* Message Field */}
       <div className="mb-4">
         <label htmlFor="message" className="block text-gray-700">Your Message</label>
         <textarea
           id="message"
           name="message"
           value={msg}
           onFocus={nullFun}
           onChange={(e)=>(setMsg(e.target.value))}
           className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
           placeholder="Enter your message"
           rows="4"
         />
       </div>

       {/* Submit Button */}
       <div className="grid grid-rows-2 text-center">
         <button
           type="submit"
           onClick={collectData}
           className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
         >
           Send Message
         </button>
        <span className="text-red-600 pt-3 h-fit">{errors}</span>
       </div>
       </div>
     </form>
   </div>

   {/* Image Section */}
   <div className="hidden lg:block lg:mt-16">
     <img
       src="illustration.webp"
       alt="Contact Illustration"
       className="w-full h-auto  rounded-lg shadow-md"
     />
   </div>
 </div>
</div>
 <Bottom />
</div>
);
};

export default Contact;
