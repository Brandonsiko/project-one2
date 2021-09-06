import React from 'react'
import { useState } from 'react'
import "./SideB.css"
import Icon from "./Mosnaps.jpg"
import MenuIcon from "./menu.png"

const SideB =()=>{
const [clicked,setClicked]=useState(true);


const OpenWhenClicked =()=>{
    setClicked(prev=>!prev)
}



    return(
        <div className="white">
            <div className="NavBar">

                <img src={Icon} alt="Moleboheng Mosnaps Logo Icon" id="Icon"/>
                <img src={MenuIcon} alt="Menu icon" id="MenuIcon" onClick={OpenWhenClicked}/>
                
               {clicked===false ? 
               <ul className="NavList">
                   
                <li><a  href="/">Home</a></li>
                <br/>
                <li><a  href="/about">About</a></li>
                <br/>
                <li><a  href="/contact">Contact</a></li>
                <br/>
                <li><a  href="/gallery">Gallery</a></li>
                <br/>
                <li><a  href="/service">Service</a></li>
                <br/>
                
               </ul>
               :null}
           </div>
        </div>
    )
}
export default SideB