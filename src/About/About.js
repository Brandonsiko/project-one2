import React from 'react'
import "./About.css"
import LeboM from "./Moleboheng.jpg"

export default function About() {
    return (
        <div className="CenterTextC">
            <hr/>
            <div className="Card AlignSpace">
                <img src={LeboM} alt="MoSnap Owner!" className="AboutPic"/>
                <div>
                <label className="CenterText AbM">About Me</label>
                <br/>
                <br/>
                <label className="Signature">MoSnap's photographer</label>
                <div><button className="SpecialBtn">View More</button></div>
                </div>
               
            </div>
            <div className="SpaceEvenly"><div className="line"/>
            <div className="downLine"/></div>
            
            <hr/>
            <div className="AboutCard purple" >
                <article>I am passionate photographer, who loves to take imaculant pictures of my mediate surrounding!</article>
                <br/>
                <article>Aside from taking pictures I love spending time with Family. Hanging with My friends and going out!</article>
                <br/>
                <article></article>
            </div>
        </div>
    )
}
