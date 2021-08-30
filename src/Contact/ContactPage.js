import React,{useState} from 'react'
import "./ContactPage.css"

export default function ContactPage() {
 
const [Fname,setFname] = useState("Name");
const [Emails,setEmails] = useState("Email");
const [Surname,setSurname] = useState("Surname");
const [Messages,setMessages] = useState("Message...");
const [Numbers,setNumbers] = useState("Numbers");
const [Location,setLocation] = useState("Location");



const [page ,setPage]=useState(1)
const NextPage =(event)=>{
    event.preventDefault();
    setPage(page>3 ? 1:page+1)
}
const BackPage =()=>{
    setPage(page<2 ? 4:page-1)
}
const Sent=()=>{
    setPage(page>3 ? 1:page+1)
   setMessages("")
    
}

const ChangedFn =(event)=>{
    setFname(event.target.value)
    
}
const ChangedSn =(event)=>{
    setSurname(event.target.value)
    
}
const ChangedEm =(event)=>{
    setEmails(event.target.value)
    
}
const ChangedLc =(event)=>{
    setLocation(event.target.value)
    
}
const Changedsv =(event)=>{
    setNumbers(event.target.value)
    
}
const ChangedMg=(event)=>{
    setMessages(event.target.value)
    
}


    return (
        <div className="ContactPage">
            <br/>
            {page===1?<div className="ContactSection">
                <div className="CenterTextC"><h2>Contact Section</h2>
                <hr/>
                </div>
                <input type="text" value={Fname} defaultValue="fname" required="Enter your Name" onChange={ChangedFn}/>
                <input type="text" value={Surname} defaultValue="surname" required="Enter your Surname"  onChange={ChangedSn}/>
                <input type="text" value={Emails} defaultValue="email" required="Please enter valid email address"  onChange={ChangedEm}/>
                <button onClick={NextPage} className="primary-btn">next</button>
                <br/>
            </div>:null}
            
            {page===2?<div className="InfoSection">
            <div className="CenterTextC"><h2>Info Section</h2>
                <hr/>
                </div>
                <input type="text" value={Location} defaultValue={Location} required="Enter Location"  onChange={ChangedLc}/>
                <input type="text" value={Numbers} defaultValue={Numbers} required="Enter Service"  onChange={Changedsv}/>
                <input type="text" value={Messages} defaultValue={Messages} required="Enter more details regarding the shoot"  onChange={ChangedMg}/>
                <div>
                    <button onClick={BackPage} className="primary-btn">back</button><button onClick={NextPage} className="primary-btn">next</button>
                </div>
                <br/>
            </div>
            :null}
            {page===3 ?<div className="ConfirmSection">
            <div className="CenterTextC"><h2>Confirm Info Section</h2>
                <hr/>
                </div>
                <div className="TextDisplay">{"Name : "+Fname }<br/>
                {"Surname :"+Surname}<br/>
                {"Email :"+Emails}<br/>
                {"Photoshoot scheduled  at :"+Location}<br/>
                {"contact No :"+Numbers}<br/>
                {" :"+Messages}</div>
                <div>
                <button onClick={BackPage} className="primary-btn">back</button><button onClick={Sent} className="primary-btn">Submit</button>
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
