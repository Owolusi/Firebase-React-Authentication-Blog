import './index.css'
import LogIn from '../../components/logIn_Page/LogIn'
import Signup from '../../components/signup_page/Signup'
import { useState } from 'react'

const Authentication = () => {
  const [toggle, setToggle]=useState(true);

  const handleToggle= ()=>{
    setToggle(!toggle);
}
  return (
  <div>
    {toggle ? (
    <LogIn toggleForm={handleToggle}/>
    ):(
  <Signup toggleForm={handleToggle} />
  )}
  </div>
  );
  
};

export default Authentication