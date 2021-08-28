import React,{useState} from 'react'
import "./ContactPage.css"

export default function ContactPage() {
const [theVal,setTheVal]=useState({
    fname:"",
    surname:"",
    email:"",
    location:'',
    service:"",
    message:"",

})
const [page ,setPage]=useState(1)
const NextPage =()=>{
    setPage(page>3 ? 1:page+1)
}
const BackPage =()=>{
    setPage(page<2 ? 4:page-1)
}

const Changed =(event)=>{
    //setTheVal(event.target.name:event.target.value)
    
}

    return (
        <div className="ContactPage">
            <br/>
            {page===1?<div className="ContactSection">
                <div className="CenterTextC"><h2>Contact Section</h2>
                <hr/>
                </div>
                <input type="text" value="Name"/>
                <input type="text" value="Surname"/>
                <input type="text" value="Email"/>
                <button onClick={NextPage}>next</button>
                <br/>
            </div>:null}
            
            {page===2?<div className="InfoSection">
            <div className="CenterTextC"><h2>Info Section</h2>
                <hr/>
                </div>
                <input type="text" value="Location"/>
                <input type="text" value="Service"/>
                <input type="text" value="Message"/>
                <div>
                    <button onClick={BackPage}>back</button><button onClick={NextPage}>next</button>
                </div>
                <br/>
            </div>
            :null}
            {page===3 ?<div className="ConfirmSection">
            <div className="CenterTextC"><h2>Confirm Info Section</h2>
                <hr/>
                </div>
                <input type="text" value="Name"/>
                <input type="text" value="Surname"/>
                <input type="text" value="Email"/>
                <div>
                    <button onClick={BackPage}>back</button><button onClick={NextPage}>Submit</button>
                </div>
                <br/>
            </div>:null}
            
            {page===4?<div className="SuccessSection">
            <div className="CenterTextC"><h2>Message Sent!</h2>
                <article>We'll be in contact soon!</article>
                <hr/>

                </div>
               
            </div>:null}
            <br/>
        </div>
    )
}
