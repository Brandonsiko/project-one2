import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch ,Route } from 'react-router-dom';
import './index.css';
import SideB from "./Components/SideBar/SideBar";
import LastSection from './Components/FootContact/LastSection';
import homePage from './HomePage/homePage';
import About from './About/About';
import ContactPage from "./Contact/ContactPage"
import ServicePage from './Services/ServicePage'
import GalleryPage from "./Galery/GalleryPage"


const Main =()=>{
 return(
   <div>
     <Router>
     <SideB/>
       <Switch>
          <Route path="/" exact component={homePage}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={ContactPage}/>
          <Route path="/service" component={ServicePage}/>
          <Route path="/gallery" component={GalleryPage}/>
        </Switch>
      <LastSection/>
     </Router>
   </div>
 )
}

ReactDOM.render(<Main/>,document.getElementById('root'));


