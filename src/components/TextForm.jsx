import React, { useState } from 'react'

export default function TextForm() {
    const handleClick=()=>{
       let newText = text.toUpperCase();
       alert('converted to Uppercase');
        setText(newText);

    }
   
     const handleClickLower=()=>{
        let newText = text.toLowerCase();
        alert('converted to LowerCase');
         setText(newText);
 
     }
     const handleClickClear=()=>{
        // let newText = text.Clear();
        // alert('converted to Uppercase');
         setText("");
 
     }
     const handleClickCopy=()=>{
        let newText = document.getElementById("myBox");
        newText.select();

        alert('Copied to Clipboard');
         navigator.clipboard.writeText(newText.value);
 
     }
     const handleClickRemove=()=>{
        let newText = text.split(/[ ]+/);
         setText(newText.join(" "));
 
     }

    const handleOnchange = (e) =>{
        setText(e.target.value);

    }
      


    const [text, setText] = useState('');

  return (
    <>
  <div class="mb-3 my-3">
    <h1 className='my-3'>Enter Text to analyze</h1>
    <label for="text" class="form-label">Enter Text </label>
    <textarea class="form-control" id="myBox"value={text} onChange={handleOnchange}  rows={8} cols={6}></textarea>
     
  </div>
  <div classname='btn-container' style={{
    display:'flex',
    justifyContent:'space-evenly',
    alignItems:'center',
   
  }}>
  <button type="button" class="btn btn-primary" onClick={handleClick}> CONVERT TO UPPERCASE</button>

  <button type="button" class="btn btn-warning" onClick={handleClickLower}>Convert to lowercase</button>
  <button type="button" class="btn btn-info" onClick={handleClickClear}>Clear Text</button>
  <button type="button" class="btn btn-success" onClick={handleClickCopy}>Copy Text </button>
  <button type="button" class="btn btn-dark" onClick={handleClickRemove}>Remove Extra Space</button>

  </div>
  <div className="container" style={{
    border:'1px solid blue',
    margin:'20px 0',
    fontSize:'20px'
  }}>
    <h2>Summary Of Your Text</h2>
    <p> Words : {text.split(" ").length}</p>
    <p> Characters : {text.length}</p>
    <p>Reading Time : {0.008* text.split(" ").length}</p>
    </div>
    <h2>Preview</h2>
    <div className='preview' style={{
    border:'2px solid grey',
    width:'100%',
    height:'auto',
    backgroundColor:'lightgrey',
   

   
  }}><p style={{
    padding:'20px',
    
  }}>{text}</p></div>
  
 </>
  
  )
}
