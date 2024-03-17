
import './App.css';
import About from './components/About';

import Alert from './components/Alert';
import Navebar from './components/Navebar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState("light")
  const [alert,setAlert]=useState(null);
  const showAlert = (message,type) =>{
    setAlert({msg:message,
    type:type})
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }
  
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.background="#021332";
    showAlert("Dark Mode Enabled","success")  
    
    
    }
    else{
      setMode("light")
      document.body.style.background="white";
      showAlert("Dark Mode is disabled","success")
     
    }
  }

   return (
<>

       
          
<Router>
<Navebar title='Cyber Gamer' list1="TextUtils" list2="About US" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}  />
<div className="container my-4">

  <Routes>
          <Route exact path="/about" element={ <About mode={mode}/>}/>
          
          
          <Route exact path="/" element={<TextForm showAlert={showAlert} title="Modify your text" mode={mode} />}/>
            
          
         
          </Routes>      
</div>
</Router>

</>
    
    
    
    
    
    
    
    
    
  );
}

export default App;
