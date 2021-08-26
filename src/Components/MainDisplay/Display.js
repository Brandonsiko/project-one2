import React from 'react'
import "./Display.css"
import LeboArt from "./702159.jpg"
import Wedding from "./demo (1).jpeg"
import Portrait from "./demo (1).jpg"
import Fashion from "./demo (1).png"
import Artistic from "./demo (2).png"

const Display = () => {
    return (
        <div className="Display">
          
          <img src={LeboArt} alt="lekwd" id="LA"/>
          
            <article className="CenterText">Photography has been a way to express my feelings and to showchase my work and kills in how I view the world!</article>
          <br/>
          <div className="IntroWrap">
            <div className="Card">
              <h3>Wedding Photography</h3>
              <img src={Wedding} alt="Wedding Photography from MoSnaps" className="CardImage"/>
              <div className="CardText">Capture Beautiful memories of your special day!</div>
              <button>View More</button>
            </div>
            <div className="Card">
              <h3>Portrait Photography</h3>
              <img src={Portrait} alt="Wedding Photography from MoSnaps" className="CardImage"/>
              <div className="CardText">Have Your Portrait Taken And Always remember your Beautiful self!</div>
              <button>View More</button>
            </div>
            <div className="Card">
              <h3>Fasion Photography</h3>
              <img src={Fashion} alt="Wedding Photography from MoSnaps" className="CardImage"/>
              <div className="CardText">Capture Beautiful memories of your special day!</div>
              <button>View More</button>
            </div>
            <div className="Card">
              <h3>Artisitic Photography</h3>
              <img src={Artistic} alt="Wedding Photography from MoSnaps" className="CardImage"/>
              <div className="CardText">Capture Beautiful memories of your special day!</div>
              <button>View More</button>
            </div>
          </div>
          <br/>
        </div>
    )
}

export default Display
