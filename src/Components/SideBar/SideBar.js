import React from 'react'
import { useState } from 'react'
import "./SideB.css"
import Icon from "./Mosnaps.jpg"
import MenuIcon from "./menu.png"

const SideB =()=>{
const [clicked,setClicked]=useState(1);


const OpenWhenClicked =()=>{
    setClicked(prev=>!prev)
}
console.log(clicked)


    return(
        <div>
            <div className="NavBar">
                <img src={Icon} alt="Moleboheng Mosnaps Logo Icon" id="Icon"/>
                <img src={MenuIcon} alt="Menu icon" id="MenuIcon" onClick={OpenWhenClicked}/>
               {clicked ? document.getElementById('NavList').style.visibility="visible":document.getElementById("NavList").style.visibility="hidden"}
               <ul className="NavList" id="NavList">
                <li>Home</li>
                <br/>
                <li>About</li>
                <br/>
                <li>Contact</li>
                <br/>
                <li>Gallery</li>
                <br/>
                <li>Services</li>
                <br/>
               </ul>
               
           </div>
        </div>
    )
}
export default SideB