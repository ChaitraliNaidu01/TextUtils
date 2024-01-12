import React from 'react'
import { useState } from 'react';

function About(props) {

    const [mystyle, setmystyle]=useState({
        backgroundColor:'white',
         color:'black'
        })

    // let mystyle = {
    //     color: props.mode === 'dark' ? 'white' : '#042743',
    //     backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
    // }

       const toggleBtn=()=>{
         if(mystyle.color==='black'){
            setmystyle({
                backgroundColor:'black',
                color:'white',
                border: '1px solid white'
            })
         }
         else{
            setmystyle({
                backgroundColor:'white',
                color:'black'
            })
         }
       }
    return (
        <div className='container'>
            <h1 className="my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>About Us</h1>
            <div class="accordion" id="accordionExample" >
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze Your text </strong>
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body" style={mystyle}> Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use </strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body " style={mystyle}>
                            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible </strong>
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body" >
                            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                        </div>
                    </div>
                </div>
            </div>

            <div classNameName='container'>
                <button onClick={toggleBtn} type="button" className="btn btn-primary my-3">Enabble Dark Mode</button>
            </div>
        </div>
    )
}

export default About


