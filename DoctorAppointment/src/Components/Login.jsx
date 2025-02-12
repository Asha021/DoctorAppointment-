import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setError] = useState('')
  const navigate = useNavigate()

  useEffect(()=>{
    const auth = localStorage.getItem("users")
    if (auth) {
      navigate('/')
    }
  })

  const handleFocus = () => {
    setError('');
  };

const handleData = async()=>{
        console.warn("email,password",email,password)
        let result = await fetch("http://localhost:2000/login",{
        method:"post",
        body:JSON.stringify({email,password}),
        headers:{
            'Content-Type':'application/json'
          },
    });
    
    try {
      let resultData = await result.json();
      if (resultData.name) {
         console.log(resultData);  // Log parsed JSON
         localStorage.setItem("users",JSON.stringify(resultData))
         navigate('/')
      }
     }catch (error) {
      setEmail("")
      setPassword("")
      setError("Pls Enter a valid Email and Password:");
     }

    // let resultData = await result.json();
    // console.log(resultData);
    // if (result.name) {
    //     localStorage.setItem('users', JSON.stringify(result));
    //     navigate('/');
    //     console.log(result);
    // }else{
    //     alert("Result Not Found");
    // }
    }
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-md  p-8 rounded-lg hover:shadow-2xl w-96">
        <h2 className="text-3xl  font-bold text-center mb-2">Login</h2>
          <div className="mb-4">
            <label htmlFor="em" className="LoginLabel">Email<i className='text-red-600'>*</i></label>
            <input
              type="email"
              id="em"
              value={email}
              placeholder='Email Address'
              onFocus={handleFocus}
              onChange={(e)=>setEmail(e.target.value)}
              className='LoginInput'
              autoComplete="current-email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="ps" className="LoginLabel">Password<i className='text-red-600'>*</i></label>
            <input
              type="password"
              id="ps"
              onFocus={handleFocus}
              value={password}
              placeholder='Password'
              autoComplete="current-password"
              onChange={(e)=>setPassword(e.target.value)}
              className="LoginInput"
            />
          </div>
          <button
            type="submit"
            className="button py-3 text-lg"
            onClick={handleData}
          >
            Login
          </button>
          <span className='text-sm text-red-600 '>
            {errors} 
          </span>
          <div className='mt-2 justify-center flex'>
          <span className='h-fit text-sm '>Dont have an account? <span className='text-blue-400 cursor-pointer' onClick={()=>navigate('/signup')}>Sign Up</span></span>
          </div>
       </div> 
    </div>
  )
}

export default Login
