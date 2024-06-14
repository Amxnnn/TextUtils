// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';


export default function About() {
    const [styleDiv, setstyleDiv]= useState({
        color: 'black',
        backgroundColor : 'white'
    })
    const Click =()=>{
        if(styleDiv.color == 'white'){
            setstyleDiv({
                color:'black',
                backgroundColor:'white'
            })
            setText("Enable Dark Mode ")
        }
        else{
            setstyleDiv({  
                color:'white',
                backgroundColor:'black'

            })
            setText("Disable Dark Mode ")
        }
    }
    const[Text,setText]=useState("Enable Dark Mode ")
  return (
    <>
    <div className='container' style={styleDiv}>
            <h2 className='my-3'>About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" style={styleDiv} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show"  style={styleDiv} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <strong>This is the first item accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={styleDiv} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse"  data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the second item accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={styleDiv} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the third item accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        </div>
        
        </div>
        <div className='container my-3'>
            <button type='button' onClick={Click} className='btn btn-primary'>{Text}</button>
        </div>

    </>
  )
}

