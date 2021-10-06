import React,{useState} from 'react'
import "./ContactPage.css"
import emailjs from 'emailjs-com'


export default function ContactPage() {
 
const [Fname,setFname] = useState("Name");
const [Emails,setEmails] = useState("Email");
const [ShootDate,setShootDate] = useState("Date");
const [Messages,setMessages] = useState("Message...");
const [Numbers,setNumbers] = useState(+27);
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
    if(Fname==="Name"){
        setFname("")
    }else{
    setFname(event.target.value);
    }
}
const ChangedSn =(event)=>{
    if(ShootDate==="Date"){
        setShootDate("")
    }else{
    setShootDate(event.target.value)
}
    
}
const ChangedEm =(event)=>{
    if(Emails==="Email"){
        setEmails("")
    }
    
    else{
    setEmails(event.target.value)
    }
    if(Emails.length===0){
        
    }
}
const ChangedLc =(event)=>{
    if(Location==="Location"){
        setLocation("");
          
    }else{
    setLocation(event.target.value);
    }
   
}
const Changedsv =(event)=>{
    Number(Location)
    if(Numbers.length>13 || Numbers.length<4){
        alert("Number isnt valid")
          
    }else{
    setNumbers(event.target.value);
    }
    
}
const ChangedMg=(event)=>{
    setMessages(event.target.value)
    
}


const SendEmail =(event)=>{
    /* init("user_ssOoa5rYPR1UQSprPCVIU");  
     //Access token 64624564a187acbbf8728d52af44a81e
 */
  event.preventDefault();
    emailjs.send('service_9gi31u7', 'template_hfnm8hk',{
        first_name:Fname,
        Client_location:Location,
        BookDate:ShootDate,
        email:Emails,
        number:Numbers,
        message:Messages,
    }, 'user_ssOoa5rYPR1UQSprPCVIU')
    .then((response)=>{
        console.log(response.text);
    },(error)=>{
        console.log(Error)
    })
   /*.then(()=>{
       ClearInput()
   })*/
   
}


    return (
        <div className="ContactPage">
            <br/>
            {page===1?<div className="ContactSection">
                <div className="CenterTextC"><h2>Contact Section</h2>
                <hr/>
                </div>
                <input type="text" value={Fname}  required onChange={ChangedFn}/>
                <input type="text" value={ShootDate}  required  onChange={ChangedSn}/>
                <input type="text" value={Emails}  required="Please enter valid email address"  onChange={ChangedEm}/>
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
                {"Surname :"+ShootDate}<br/>
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
