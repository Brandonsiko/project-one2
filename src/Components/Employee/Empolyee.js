import React from 'react'
import "./Employee.css"
import wedding01 from "./demo2 (1).jpg"
import wedding02 from "./demo2 (2).jpg"
import wedding03 from "./demo2 (3).jpg"
import wedding04 from "./demo2 (4).jpg"
import wedding05 from "./demo2 (5).jpg"
import wedding06 from "./demo2 (6).jpg"
import wedding07 from "./demo2 (7).jpg"



function Empolyee() {
    return (
        <div className="blackBackground">

            <br/>
           <hr/>
           <h1>Mo Snaps</h1>
           <div>
               <ul className="CenterText ">
                   <li>Weddings</li>
                   <li>Animals</li>
                   <li>Cars</li>
                   <li>Portraits</li>
                   <li>Artisitic</li>
                </ul>
            </div>
            <div className="ShadeBlock">
                <div className="Table">
                    <img src={wedding01} alt="Mosnaps wedding picture display" className="MiniPic"/>
                    <img src={wedding02} alt="Mosnaps wedding picture display" className="MiniPic"/>
                    <img src={wedding03} alt="Mosnaps wedding picture display" className="MiniPic"/>
                    <img src={wedding04} alt="Mosnaps wedding picture display" className="MiniPic"/>
                </div>
                <div className="Table">
                    <img src={wedding01} alt="Mosnaps wedding picture display" className="MiniPic"/>
                    <img src={wedding02} alt="Mosnaps wedding picture display" className="MiniPic"/>
                    <img src={wedding05} alt="Mosnaps wedding picture display" className="MiniPic"/>
                    <img src={wedding06} alt="Mosnaps wedding picture display" className="MiniPic"/>
                </div>
                <div className="Table">
                    <img src={wedding07} alt="Mosnaps wedding picture display" className="MiniPic"/>
                    <img src={wedding02} alt="Mosnaps wedding picture display" className="MiniPic"/>
                    <img src={wedding03} alt="Mosnaps wedding picture display" className="MiniPic"/>
                    <img src={wedding04} alt="Mosnaps wedding picture display" className="MiniPic"/>
                </div>
                <div className="Table">
                    <img src={wedding01} alt="Mosnaps wedding picture display" className="MiniPic"/>
                    <img src={wedding05} alt="Mosnaps wedding picture display" className="MiniPic"/>
                    <img src={wedding06} alt="Mosnaps wedding picture display" className="MiniPic"/>
                    <img src={wedding07} alt="Mosnaps wedding picture display" className="MiniPic"/>
                </div>
                
            </div>
            <div className="CenterText">01 next</div>
            <br/>
            <hr/>
            <div className="Dimond"></div>
            <div className="Dimond D2"></div>
            <div className="BookCard">
                <h3>How to get Photographed</h3>
                <div className="BookCardInner">
                <div className="SecondInnerCard">Get online on any social media platform<h4>01</h4></div>
                <div className="SecondInnerCard">choose a date and book<h4>02</h4></div>
                <div className="SecondInnerCard">Enjoy an amazing photoshoot as I work<h4>03</h4></div>
                <div className="SecondInnerCard">Enjoy Your memories for a lifetime<h4>04</h4></div>
                </div>
            </div>
        </div>
    )
}

export default Empolyee
