import React from 'react'
import { useState } from 'react'
import './index.css'
import userLogin from '../../auth/userLogin';
import { useNavigate, useLocation } from 'react-router-dom';

const LogIn = (props) => {

  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [errorMessage, setErrorMessage]= useState("null");


  const navigate=useNavigate();
  const location =useLocation();

  const from=location.state?.from?.pathname ||"/dasboard";

  const {error, login}=userLogin();
  const handleLogin=async (e)=>{
    e.preventDefault();
    await login(email, password);
    if(!error){
      navigate(from, {replace:true});
      setEmail("");
      setPassword("");
      return;
    }else{
          seterroeMessage(errorMessage)

    }
  };


  return (
    <>
    <h2>Login to your account</h2>
  <form onSubmit={handleLogin}>
    <input 
    type='email' 
    placeholder='email' 
    value={email} 
    onChange={(e)=>setEmail(e.target.value)}
    required
    />

    <input 
    type='password'  
    placeholder='password' 
    value={password} 
    onChange={(e)=>setPassword(e.target.value)}
    required

    />
    {error &&<p>{errorMessage}</p>}

    <button type='submit'>Login</button>



  </form>
  <p>Have no account?</p>

  <button onClick={props.toggleForm}>Sign up</button>
  </>
  );
  
};


export default LogIn