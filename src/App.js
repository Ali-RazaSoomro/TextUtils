import React, { useState } from 'react';



import './App.css';
import Navbar from './Navbar';
import Textform from './Textform';



function App() {
  
    const [mode, setMode] = useState("light");

    
    const toggleMode=()=>{
      if(mode ==='light')
      {
        setMode('dark');
      }else{
        setMode('light');
      }
    }
    return (
      <div>
        
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Textform/>
            
       </div>
       
     
    );
  }


export default App;
