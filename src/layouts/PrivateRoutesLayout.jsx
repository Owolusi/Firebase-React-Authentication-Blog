import {Outlet, useLocation, Navigate} from "react-router-dom"
import { projectAuth } from "../firebase/config";
//import { useLocation } from "react-router-dom";

const PrivateRoutesLayout = () => {
    const location=useLocation();
  return (

    projectAuth.currentUser ? (<Outlet/>):
    (
        <Navigate to="/authentication" state={{from:location}} replace/>
  )
  )
}

export default PrivateRoutesLayout;