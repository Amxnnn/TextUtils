/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
  const UppCase=()=>{
    console.log("btn was clicked");
    setText(text.toUpperCase());
    props.showAlert("Converted to UpperCase","success")
  }
  const lowCase=()=>{ 
    setText(text.toLowerCase());
    props.showAlert("Converted to LowerCase","success")
  }
  const ClrCase=()=>{
    setText("");

  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className="container">
      <div className="mb-3">
        <h1 htmlFor="myBox" className="form-label ">Enter the Text</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="14"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={UppCase}>Convert to UpperCase</button>
      <button className="btn btn-secondary mx-2" onClick={lowCase}>Convert to LowerCase</button>
      <button className="btn btn-secondary mx-2" onClick={ClrCase}>Clear</button>
    </div>
    <div className="container my-3">
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>

    </div>
    </>

  )
}
TextForm.protoTypes = {
  title:PropTypes.string,
  aboutText:PropTypes.string,
} 
