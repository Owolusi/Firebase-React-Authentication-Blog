import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/homepage/Home'
import Authentication from './pages/authenticationPage/Authentication'
import Error from "./pages/errorPage/Error"
import Dashboard from "./pages/dashboardPage/Dashboard"
import PrivateRoutesLayout from './layouts/PrivateRoutesLayout'
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/headerpage/NavbarComp'
import Footer from './pages/footerPage/Footer'



import SignUp from "./components/signup_page/Signup";
import LogIn from './components/logIn_Page/LogIn'



function App() {

  return (
    <div>
      <Header />
      <Home />


        <Routes>
        {/* PLUBLIC PAGES */}        
        
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/LogIn' element={<LogIn/>}/>


        <Route path='/authentication' element={<Authentication/>}/>
        <Route path='*' element={<Error/>}/>


                {/* PRIVATE PAGES */}
                <Route element={<PrivateRoutesLayout/>}>
                  

        <Route path='/dashboard' element={<Dashboard/>}/>
        
        </Route>
    </Routes>
    <Footer />
    </div>
  )
}

export default App
