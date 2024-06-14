/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import './App.css'
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
import About from './components/about';
import Alert from './components/alert';
import { useState } from 'react';
import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes
} from "react-router-dom";
// import { Routes } from 'react-router-dom/cjs/react-router-dom.min';
function App() {
  // eslint-disable-next-line no-undef
  const [alert, setAlert]= useState(null);
  const showAlert=(Message,type)=>{
    setAlert({
      msg: Message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    },1500);
  }
  const [darkmd, setDarkMd] = useState('light');
  const click=()=>{
    if(darkmd==='light')
    {setDarkMd('dark')
    document.body.style.backgroundColor="#31363F"
    document.body.style.color="white"
    showAlert("Dark Mode Enabled","success")
   
  }
    else{setDarkMd('light')
    document.body.style.backgroundColor="white"
    document.body.style.color="black"
    showAlert("Light Mode Enabled","success")
    
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About" mode={darkmd} click={click}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
      <Routes>
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/" element={<TextForm mode={darkmd} showAlert={showAlert} />} />
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
 
