import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Login from './components/Login'
import Main from './components/Main';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {


  return <>

    <Routes>
         
          <Route path="/Calendar/" element={ <Main/> } />
      
    </Routes>

  </>
}


