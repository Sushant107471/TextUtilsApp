import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick =()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to UpperCase", "success");
  }

  const handleLowerCase = ()=>{
    let newText = text.toLowerCase();
    setText(newText);  
    props.showAlert("Text converted to LowerCase", "success");

}
  const handleOnChange =(event)=>{
    setText(event.target.value);
  }

  const handleClearClick =()=>{
    let newText = '';
    setText(newText);
  }

    const handleCopyClick=()=>{
      let text= document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }
 
const [text,setText] = useState('');
        
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <div className="mb-3">
        <h1>{props.heading}</h1>
          <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#ff971d':'white' , color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="7" value={text} onChange={handleOnChange}></textarea><br />
          <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-3" onClick={handleLowerCase}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear</button>
          <button className="btn btn-primary mx-3" onClick={handleCopyClick}>Copy Text</button>
        
        </div>
        </div>
        
        <div className="container my-5" style={{color:props.mode ==='dark'?'white':'#042743'}}>
          <h1>Your text Summary</h1>
          <p>{text.split(" ").length} words and {text.length} character</p>
          <p>{0.008 * text.split(" ").length}Minutes to Read</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
</>
    )
}


