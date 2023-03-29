import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Login from './components/Login'
import Main from './components/Main';

export default function App() {
  

  return <>

    <Routes>
          
          <Route path="/" element={ <Login/> } />
          <Route path="/home" element={ <Main/> } />
          <Route path="*" element={<Login/>}/>      
      
    </Routes>

  </>
}


