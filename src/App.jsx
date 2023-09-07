
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/homepage/Home'
import Authentication from './pages/authenticationPage/Authentication'
import Error from "./pages/errorPage/Error"
import Dashboard from "./pages/dashboardPage/Dashboard"
import PrivateRoutesLayout from './layouts/PrivateRoutesLayout'

function App() {

  return (
      <Routes>
        {/* PLUBLIC PAGES */}
        <Route path='/' element={<Home/>}/>
        <Route path='/authentication' element={<Authentication/>}/>
        <Route path='*' element={<Error/>}/>


                {/* PRIVATE PAGES */}
                <Route element={<PrivateRoutesLayout/>}>
                  

        <Route path='/dashboard' element={<Dashboard/>}/>
        
        </Route>
    </Routes>
  )
}

export default App
