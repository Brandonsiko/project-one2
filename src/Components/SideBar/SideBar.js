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
        <div>
            <div className="NavBar">

                <img src={Icon} alt="Moleboheng Mosnaps Logo Icon" id="Icon"/>
                <img src={MenuIcon} alt="Menu icon" id="MenuIcon" onClick={OpenWhenClicked}/>
               {clicked===false ? <div  id="NavList">
               <ul className="NavList">
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
               </div>:null}
           </div>
        </div>
    )
}
export default SideB