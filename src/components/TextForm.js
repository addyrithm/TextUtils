import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked "+text);
    let newText1 = text.toUpperCase();
    setText(newText1);
    props.showAlert('Converted to UpperCase','success');
  };
  const handleDownClick = () => {
    // console.log("Uppercase was clicked "+text);
    let newText2 = text.toLowerCase();
    setText(newText2);
    props.showAlert('Converted to LowerCase','success');
  };
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const handleOnReverse = () => {
    let newText3 = text.split("").reverse().join("");
    //with loops
    // let newText3 = "";
    // for (var i = text.length - 1; i >= 0; i--) {
    //     newText3 += text[i];
    // }
    setText(newText3);
    props.showAlert('String Reversed','success');
  };
  const handleOnRemoveSpaces = () => {
    let newText5 = text.split(/[ ]+/);
    setText(newText5.join(" "));
    props.showAlert('Extra space removed','success');
  };
  const handleOnClear = () => {
    let newText4 = "";
    setText(newText4);
    props.showAlert('Cleared!!','success');
  };
  const handleOnCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Copied!!','success');
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <div className="conatiner mb-3">
          <h2 >{props.heading}</h2>
        </div>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
          style={{backgroundColor : props.mode==='dark'?'#000000':'white', color : props.mode==='dark'?'white':'#000000'}}
        ></textarea>
        <button disabled={text.length===0} className="btn btn-primary my-3" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleDownClick}>
          Convert to LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleOnReverse}>
          Reverse
        </button>
        <button
          disabled={text.length===0}
          className="btn btn-primary my-3 mx-2"
          onClick={handleOnRemoveSpaces}
        >
          Remove Extra Spaces
        </button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleOnClear}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleOnCopy}>
          Copy Text
        </button>
      </div>
      <div className="conatiner my-3">
        <h2> Your Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{(text.split(/\s+/).filter((element)=>{return element.length!==0}).length) * 0.008} Minutes to read</p><br />
        <h2>Preview</h2><hr />
        <p>{text.length>0?text:"Nothing to Preview"}</p>
      </div>
    </>
  );
}
