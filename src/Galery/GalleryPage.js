import React, {useState} from 'react'
import "./GalleryPage.css"
import MoSnapPics from '../Components/Employee/Weddings/menuItem'
import CarsPics from '../Components/Employee/Cars/Cars'
import PortraitPics from '../Components/Employee/Portraits/Portraits'
export default function GalleryPage() {

    const [ page,setPage ]=useState(1)
    const [ placeholderd,setPlaceholder ]=useState(1)
     
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
 
     const Enlarge=(event)=>{
       setPlaceholder(event.target.id);
 }
    
    return (
        <div className="GalleryMainContainer">
            <h2 className="Texed">MoSnap Portfolio</h2>
             <div >
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
                                <div className="ImageCatch" id={goat.placeHolder}  key={nji} onClick={Enlarge}>
                                    
                                   {placeholderd}
                                <img src={goat.image} id={goat.placeHolder}  key={nji} onClick={Enlarge}  alt="my my my" className="MiniPic" />
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
                            {PortraitPics.map((places, numsC)=>{
                                return(
                                        <div className="ImageCatch"> 
                                        <img src={places.image} key={numsC} alt="my my my" className="MiniPic"/>
                                        </div>
                                    ) })}
                    </div>:null}
                    <div><button onClick={BackPage}>Back</button><button onClick={NextPage}>Next</button></div>
        </div>
    )
}
