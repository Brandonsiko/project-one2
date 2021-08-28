import {React , useState} from 'react'
import "./Employee.css"
import MoSnapPics from "./Weddings/menuItem"
import CarsPics from './Cars/Cars'


const  Empolyee=()=> {
   const [ page,setPage ]=useState(1)
    
    const NextPage =()=>{
        
        setPage(page>4 ? 1:page+1)
    }
    const BackPage =()=>{
        setPage(page<2 ? 5:page-1)
    }
    const Weddings =()=>{
        setPage(1)
    }
    const Animals =()=>{
        setPage(2)
    }
    const Cars =()=>{
        setPage(3)
    }
    const Portraits =()=>{
        setPage(4)
    }
    const Artisitic =()=>{
        setPage(5)
    }

    console.log(page)
    return (

        <div className="blackBackground">

                    <br/>
                    <hr/>
                    <h1 onClick={BackPage}>Mo Snaps</h1>
                    <div>
                    <ul className="CenterText ">
                        <li onClick={Weddings}>Weddings</li>
                        <li onClick={Animals}>Animals</li>
                        <li onClick={Cars}>Cars</li>
                        <li onClick={Portraits}>Portraits</li>
                        <li onClick={Artisitic}>Artisitic</li>
                        </ul>
                    </div>
                    {page===1?<div className="ShadeBlock">
                    {MoSnapPics.map((goat, nji)=>{
                        return(
                                <div className="ImageCatch"> 
                                <img src={goat.image} key={nji} alt="my my my" className="MiniPic"/>
                                </div>
                            ) })}
                    </div>:null}

                    {page===2?<div className="ShadeBlock">
                    <div>Animal Page </div>
                    </div>:null}

                    {page===3?<div className="ShadeBlock">
                    {CarsPics.map((car, numC)=>{
                        return(
                                <div className="ImageCatch"> 
                                <img src={car.image} key={numC} alt="my my my" className="MiniPic"/>
                                </div>
                            ) })}
                    </div>:null}

                    {page===4?<div className="ShadeBlock">
                   <div>Portraits Page</div>
                    </div>:null}

                    <div className="CenterText" onClick={NextPage}>01 next</div>
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
