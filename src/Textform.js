
import React,{useState} from 'react'


function Textform() {
    const[text,setText]=useState("Enter Your Text")
    function handleUpClick(){
        console.log("handleUpClick is clicked");    
        let txt=text.toUpperCase();
        setText(txt)
    }
    function handleLowClick(){
        console.log("handlelowClick is clicked");    
        let txt=text.toLowerCase();
        setText(txt)
    }

    function handleClClick(){
        console.log("handleClClick is clicked");    
        let txt=" ";
        setText(txt)
     }
    function handleOnChange(event){
        console.log("HandleOnChange");
        setText(event.target.value);
    }
  return (
    <div>
<div className="container">
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label"><h1>Enter Text To Analysis</h1></label>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="6"></textarea>
</div>
<button className="btn btn-primary m-2" onClick={handleUpClick}   >Convert to Uppercase</button>
<button className="btn btn-primary m-2" onClick={handleLowClick} >Convert to Lowercase</button>
<button className="btn btn-primary m-2"onClick={handleClClick} >Convert to Clear</button>
    <h1>YOUR SUMMARY</h1>
    <p>words:{text.split(" ").filter((element)=>{element.length!==0}).length} char:{text.length}  
    </p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    </div>
  )
}

export default Textform