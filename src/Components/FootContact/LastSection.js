import React from 'react'
import Instagram from "./Instagram_icon.png"
import Whatsapp from "./whatsapp.png"
import Facebook from "./facebook.png"
import "./LastSection.css"

const LastSection=()=> {
    return (
        <div className="Display FLast">
            <br/>
           <div className="Socials"><a href="https://www.instagram.com/leebow_monye" target="_blank" rel="noreferrer"><img src={Instagram} alt="Instagram handle" id="Insta"/></a>
           <a href="https://www.facebook.com/MoSnap-Photography-58112416244851/" target="_blank" rel="noreferrer"><img src={Facebook} alt="Facebook page"/></a>
           <a href="https://wa.me/c/27677752817" id="Wapp" ><img src={Whatsapp} alt=""/></a>
           </div>
           
           <br/>
           
           <div><h5 className="CopyRight"> copyright All Rights Reserved || built by blackbow.co.za</h5> </div>
        </div>
    )
}

export default LastSection
