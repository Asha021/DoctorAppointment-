import React, { useState ,useEffect } from 'react';
import { useNavigate} from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate()
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [ password,setPass] = useState("")
  const [ errors,setError] = useState("")
  
  const errorHandle=()=>{
    setError("")
  }
  
  useEffect(()=>{
    const auth = localStorage.getItem('users'); 
    if (auth) {
      navigate('/')
    }
  })

  const collectData = async ()=>{
    // console.log(name,email,password);

    if (name==""||email=="",password=="") {
      setError("Pls Enter these Fields");
    }else{
      const result = await fetch('http://localhost:2000/ragister',{
        method:"post",
        body: JSON.stringify({name,email, password}),
        headers:{
          'Content-Type':'application/json'
        },
      });
  
      const  data = await result.json();
      console.log(data) 
      if(data){
        navigate('/loginch')
      }
    }
   
    localStorage.setItem('users',JSON.stringify(data))
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md  bg-white p-8 rounded-lg hover:shadow-2xl shadow-md">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Register</h1>
        <form className="space-y-4">
          {/* Username Field */}
          <div>
            <label
              htmlFor="un"
              className="LoginLabel"
            >
              User Name: <i className="text-red-500">*</i>
            </label>
            <input
              type="text"
              id="un"
              onFocus={errorHandle}
              value={name}
              onChange={(e)=>
                setName(e.target.value)
              }
              placeholder="Enter Your Name"
              className='LoginInput'
              />
          </div>
          {/* Email Field */}
          <div>
            <label
              htmlFor="em"
              className="LoginLabel"
            >
              E-Mail: <i className="text-red-500">*</i>
            </label>
            <input
              type="email"
              id="em"
              onFocus={errorHandle}
              value={email}
              onChange={(e)=>
                setEmail(e.target.value)
              }
              placeholder="Enter Your Email"
              className="LoginInput"
            />
          </div>
          <div>
            <label
              htmlFor="ps"
              className="LoginLabel"
            >
              Password: <i className="text-red-500">*</i>
            </label>
            <input
              type="password"
              id="ps"
              value={password}
              onFocus={errorHandle}
              onChange={(e)=>
                setPass(e.target.value)
              }
              placeholder="Enter Your Password"
              className='LoginInput'
            />
          </div>
          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="button"
              onClick={collectData}
              className='button hover:scale-y-110 text-lg transition-transform duration-500'
                  >
              Register
            </button>
          </div>
        </form>
        <div className="text-center pt-1 text-red-500">{errors}</div>
        <div className='mt-2 justify-center flex'>
          <span className='h-fit text-sm '>Already have an account?<span className='text-blue-400 cursor-pointer' onClick={()=>navigate('/login')}> Login</span></span>
          </div>
      </div>
    </div>
  );
}

export default SignUp;
