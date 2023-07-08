import React, { useState } from 'react'

const TextForm = (props) => {
   const handleUpClick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
   }
   const handleLoClick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");
   }
   const handleClearClick = () =>{
    let newText = '';
    setText(newText);
   }
   const handleCopyClick = () =>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
     }
   const handleRemoveXtraSpaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
     }
   const handleOnChange = (event) =>{
    // console.log("On change");
    setText(event.target.value)
   }
   const [text, setText] = useState('Enter text here'); 
//    text = "new text"; // wrong way to change the state
//    setText("new text"); // correct way to change the state
   return (
    <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}} > 
          <h1>{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleOnChange} 
              style={{backgroundColor: props.mode ==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lowercase</button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>        
          <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy text</button>        
          <button className="btn btn-primary mx-1 my-1" onClick={handleRemoveXtraSpaces}>Remove extra spaces</button>        
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
           <h2>Your text summery</h2>
           <p>{text.split(/(?:\n| )+/).filter((element)=>{return element.length!==0}).length} words and {" "}
              {text.length - (text.match(/\n/g) || []).length - (text.match(/ /g) || []).length } characters
           </p>
           {/* <p>{text.split(' ').join(',').split('\n').join(',').split(',').filter((element)=>{return element.length!==0}).length}</p> */}
           <p>{0.008 * text.split(/(?:\n| )+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
           <h1>Preview</h1>
           <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
    </>     

   )
}

export default TextForm
