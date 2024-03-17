import React,{useState} from 'react';
export default function TextForm(props) {
  const [text,setText] = useState("");
  
 
  
  
   
    const handleupclick = ()=>{
       const newText = text.toUpperCase();
       setText(newText)
       props.showAlert("Converted To uppercase","success")
    }
    const handleonchane=(event)=>{
        setText(event.target.value)
    }
    const handlelowclick=()=>{
      const newText = text.toLowerCase();
       setText(newText)
       props.showAlert("Converted To lowercase","success")
    }
    const handleCopy=()=>{
      let  text = document.getElementById("floatingTextarea2");
      text.select();
      navigator.clipboard.writeText(text.value)
    }
    const handleSpaces=()=>{
      let  text = document.getElementById("floatingTextarea2");
      let newText = text.value.split(/[ ]+/);
      setText(newText.join(" "))
      
    }
    
    
       
    return (
    <>
      <div className={`form-floating`} style={{color: props.mode==="dark"? "white":"black"}} >
        <h1>{props.title}</h1>
        <textarea
          className="form-control my-4"
          value={text}
          id="floatingTextarea2"
          style={{color: props.mode==="dark"? "white":"black",background:props.mode==="dark"? "#f6f6f612":"white"}} // Use curly braces for inline styles
          onChange={handleonchane}
          
        ></textarea>
  
      </div>
      <button type="button" className="btn btn-primary mx-1 my-1"  onClick={handleupclick}>Uppercase</button>

      <button type="button" className="btn btn-primary mx-1 my-1"  onClick={handlelowclick}>LowerCase</button>
      <button type="button" className="btn btn-primary mx-1 my-1"  onClick={handleCopy}>Copy</button>
      <button type="button" className="btn btn-primary mx-1 my-1"  onClick={handleSpaces}>Remove extra spaces</button>
     
      
      <div className="container my-4" style={{color: props.mode==="dark"? "white":"black"}}>
        <h1>Summary</h1>
        <p>Number of chracters are {text.length}</p>
        <p>Number of words are {text.split(" ").filter((element)=>{return element.length!==0}).length}</p>
        <p>Number of minutes read {Math.round((text.split(" ").length)/3.33)}</p>
      </div>
      <div className="container my-4" style={{color:props.mode==="dark"?"white":"black"}}>
        <h1>Preview</h1>
        <p>{(text==="")? "Enter anything to preview here":text}</p>
      </div>
      
      
      
    </>
  );
}
