import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SideB from "./Components/SideBar/SideBar";
import Display from './Components/MainDisplay/Display';
import Empolyee from './Components/Employee/Empolyee';
import Home from './Components/Leave_section/Leave';
import LastSection from './Components/FootContact/LastSection';

const Main =()=>{
 return(
   <div>
     <SideB/>
     <Home/>
     
     <Display/>
     <Empolyee/>
     <LastSection/>
   </div>
   
  
 )
}

ReactDOM.render(<Main/>,document.getElementById('root'));


