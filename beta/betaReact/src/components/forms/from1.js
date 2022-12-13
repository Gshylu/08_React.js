import React,{useState} from 'react'
import "./style.css"
const Form = () => {

  const [name ,  setName] = useState("");
  const [fulName , setFulName] = useState();

  const inputEvent = (event) =>{
    setName(event.target.value);
  };

  const onSubmit = () =>{
    setFulName(name);
  }

  return (
    <div className ="div1">
         <h1><i>{fulName}</i></h1>
        <input type="text" id="input" placeholder='Enter your name' onChange={inputEvent} value={name}></input><br></br><br></br>
        <button onClick={onSubmit}>Click</button>
    </div>
  )
}

export default Form ;