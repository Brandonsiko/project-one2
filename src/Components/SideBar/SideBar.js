import React from 'react'
import { useState } from 'react'
import "./SideB.css"
import Icon from "./Mosnaps.jpg"
import MenuIcon from "./menu.png"

const SideB =()=>{
const [clicked,setClicked]=useState(1);


const OpenWhenClicked =()=>{
    setClicked(clicked+1)
}
const CloseWhenClicked =()=>{

    setClicked(clicked-1)
    switch (clicked){
        case 1:
        (
            document.getElementById("NavList").style.visibility="visible"
        )
        case 2:
        (
            document.getElementById("NavList").style.visibility="hidden"
        )
    }
}


   

   


    return(
        <div>
            <div className="NavBar">
                <img src={Icon} alt="Moleboheng Mosnaps Logo Icon" id="Icon"/>
                <img src={MenuIcon} alt="Menu icon" id="MenuIcon" onClick={OpenWhenClicked}/>
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