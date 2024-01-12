import React, { useState } from 'react';

export default function Textform(props) {

    const HandleupClick = () => {
        //    settext("How u click on handle ." + text)
        let upp = text.toUpperCase();
        settext(upp)
        props.showAlert("Convert to UpperCase!","success")
    }
    const HandleloClick = () => {
        //    settext("How u click on handle ." + text)
        let lo = text.toLowerCase();
        settext(lo)
        props.showAlert("Convert to LowerCase!","success")
    }
    const HandleclClick = () => {
        //    settext("How u click on handle ." + text)
        let newtext = ''
        settext(newtext)
        props.showAlert("Removed Extra Spaces","success")
    }

    const HandleCopyClick = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
        
    }

    const HandleOnChange = (event) => {
        settext(event.target.value)
    }
    const [text, settext] = useState('');

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        settext(newText.join(' '))
        props.showAlert("Extra spaces removed!", "success");
    }
    return (
        <>
            <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={HandleOnChange}style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
                </div>
                <button  disabled={text.length===0}  className='btn btn-primary mx-1 my-1' onClick={HandleupClick}>Covert to uppercase</button>
                <button  disabled={text.length===0}  className='btn btn-primary mx-1 my-1' onClick={HandleloClick}>Covert to Lowercase</button>
                <button   disabled={text.length===0}  className='btn btn-primary mx-1 my-1' onClick={HandleclClick}>Clear</button>
                <button  disabled={text.length===0}  className='btn btn-primary mx-1 my-1' onClick={HandleCopyClick}>Copy</button>
                <button   disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpace}>Extra Space</button>
           
                </div>
            <div className="container my-3"style={{ color: props.mode === 'black' ? 'white' : 'black' }} >
                <h1>Your text summary</h1>
                <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} character</p>
                <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h1>Preview Text</h1>
                <p>{text.length>0? text: 'Enter someething in the text above'}</p>
            </div>
        
        </>
    )
}
