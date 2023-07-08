import './App.css';
import Navbar from './components/Navbar';
import Person from './Person';
import TextForm from './components/TextForm';
import { useState } from 'react';
// import About from './components/About';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";



const moods = ['😂','😡','😲','😢','😟'];
const mood = moods[Math.floor(Math.random()*moods.length)];
const mooding =  moods.map((item)=>{
  return <li>{item}</li>
});

function App(props) {
  const [mode,setMode] = useState('light'); //Whether dark mode is enabled or not
  
  const [alert,setAlert] = useState(null);

//   {
//     color:'black',
//     backgroundColor:'white'
// }

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    }, 1500)
  }

  const toggleMode = ()=>{
     if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#021525e8";
      showAlert("Dark mode has been enabled","success");
     }
     else{
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","success");
     }
  }

  // const changeMode = ()=>{
  //   if(mode === 'light')
  // }

  return (
      <> 
         {/* <Router> */}
            <Navbar title="textutils" mode={mode} 
                    toggleMode={toggleMode} aboutText="about"/>
            
            <Alert alert={alert}/>
            <div className="container my-3">
            <TextForm showAlert={showAlert} mode={mode} toggleMode={toggleMode} heading="Enter the text to analyse"/>   
                 
              {/* <Routes> */}
                  {/* <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode} toggleMode={toggleMode} heading="Enter the text to analyse"/>}> */}
                  {/* </Route> */}
                  
                  
                  {/* <Route exact path="/about" element={<About />} /> */}
                  {/* <About /> */}
                  
              {/* </Routes> */}
            </div>

         {/* </Router> */}
                 



         <div>
          <Person name="Ashish" age="26" favColor="blue"></Person>
          <h1>Your mood is: {mood}</h1>

          <ul>
            {mooding}

          </ul>
         </div>
         
      </> 
    ); 
}

export default App;
