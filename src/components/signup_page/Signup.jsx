import './index.css'
import { useState } from 'react';
import userSignUp from '../../auth/userSignup/UserSignUp';
import { useNavigate, useLocation } from 'react-router-dom';




const Signup = (props) => {
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");

  const [errorMessage, setErrorMessage]=useState(null);

  const navigate=useNavigate();
  const location=useLocation();

  const from=location.state?.from?.pathname  || "/dashboard";

  const {error, SignUp}=userSignUp();

  const handleSignOut=async(e)=>{
    e.preventDefault();

    await SignUp(email, password)

    if(!error){
      navigate(from, {replace:true})
      setEmail("")
      setPassword("")

      return
    }else{
      setErrorMessage(error)
    }
    
  }


  return (
    <>
    <h2>Create your account</h2>
  <form onSubmit={handleSignOut}>
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

    <button type='submit'>Sign Up</button>
  </form>

  <p>Have an account?</p>
  
  <button onClick={props.toggleForm}>Log in</button>
  
  </>
  );
  
};
export default Signup