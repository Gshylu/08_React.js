import React ,{useState} from "react"
import "./style.css"
const Form2 = () => {

    const [name ,  setName] = useState();
    const [fulName , setFulName] = useState();
    const [password , setPassword] = useState();
    const [storepw , setStorepw] = useState();
  
    const inputEvent = (event) =>{
    setName(event.target.value);

   
    };

    const inputEvent2 = (event) =>{
        setPassword(event.target.value);
       
        };
  
    const onSubmit = (event) =>{
        event.preventDefault();
      setFulName(name);
      setStorepw(password)
     
      
    }
    
    
    return (
      <div className ="div1">
      <form onSubmit={onSubmit}>
          
        <p> {fulName}{storepw}</p>
        
          <input type="text" id="input" placeholder='Enter your name' onChange={inputEvent} value={name}></input><br></br><br></br>
          <input type="password" id="pw" placeholder='Enter your password' onChange={inputEvent2} value={password}></input><br></br><br></br>
          <button type="submit">Click</button>
        </form>
      </div>
    )
  }

  export default Form2;