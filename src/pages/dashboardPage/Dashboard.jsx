import React from 'react'
import './index.css'
import userLogOut from '../../auth/userLogout/UserLogOut';
import { useNavigate } from 'react-router-dom';
import Blogs from '../../components/ListBlog/ListBlog'


const Dashboard = () => {
  const navigate=useNavigate()
  const {error, logOut}=userLogOut();


  const handleLogOut=async()=>{
    await logOut();

    if(!error){
      navigate("/");
    }
  };


  return (
    <div>
      <h1>welcome to dashboard</h1>
      
      <button onClick={handleLogOut}>Log out</button>
      <Blogs />
      
      </div>
  )
}

export default Dashboard