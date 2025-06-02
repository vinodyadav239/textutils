import React,{useState} from 'react'

export default function TextForm(props) {
const [text,setText]=useState('');
const upperCase=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase","success");
}
const lowerCase=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase","success");
}
const handleClearText=()=>{
    let newText='';
    setText(newText);
    props.showAlert("text is cleared","success");
}
const speak=()=>{
    let msg=new SpeechSynthesisUtterance();
    msg.text=text;
    window.speechSynthesis.speak(msg);
    
}
const handleInverse=()=>{
    let newText=text.split('').reverse().join('');
    setText(newText);
}
const handleOnChange=(event)=>{
    
    setText(event.target.value);
}
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
     <div className="mb-3">
     
     <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange}  id="myBox" rows="8"></textarea>
      </div>
      <button type="button" onClick={upperCase} className="btn btn-primary">Convert to UpperCase</button>
      <button type="button" onClick={lowerCase} className="btn btn-primary mx-3" >Convert to LowererCase</button>
      <button type="button" onClick={handleClearText} className="btn btn-primary mx-3" >Clear Text </button>
      <button type="button" onClick={speak} className="btn btn-primary mx-3" >Speak </button>
      <button type="button" onClick={handleInverse} className="btn btn-primary mx-3" >Reverse </button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
     <h1>your text summary</h1>
     <p> {text.split(" ").length} words and {text.length} characters</p>
     <p>{0.008 *text.split(" ").length} minutes read </p>
     <h2>Preview</h2>
     <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}

