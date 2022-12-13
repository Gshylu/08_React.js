import React ,{useState} from "react"
import "./style.css"
const Form4 = () => {

    const [fullName ,  setFullName] = useState({
        fname : "",
        lname : "",
        gmail : "",
        radio : "",
        checkbox:"",
    });

    const inputEvent = (event) =>{
      console.log(event.target.value);
      console.log(event.target.name);

      const target = event.target
      const value =target.type === "checkbox"? target.checked : target.value;
      const name  = target.name;
     
 
        
      
 

      setFullName((preValue) =>{
       
       return{
           ...preValue,
          [name]:value,
        };
       
     

       /* if(name === "fName"){
          return  {
            fname : value ,
            lname : preValue.lname,
            gmail :  preValue.gmail,
          };
        }else if(name === "lName"){
          return {
            fname : preValue.fname,
            lname : value,
            gmail :  preValue.gmail,
          };
        }else if(name === "gMail"){
            return {
              fname : preValue.fname,
              lname :  preValue.lname,
              gmail : value,
            };
        }*/
      });
    };

    const onSubmit = (event) =>{
        event.preventDefault();
       alert("form submitted");
     };
    return (
      <>
      <div className ="div1">
      <form onSubmit={onSubmit}>
          
        <p> {fullName.fname}{fullName.lname}{fullName.gmail}
        <h1> {fullName.radio}</h1>
        <h1>{fullName.checkbox}</h1></p>
        
          <input type="text" id="input" placeholder='Enter your fname' onChange={inputEvent} value={fullName.fname} name="fname"></input><br></br><br></br>
          <input type="text" id="pw" placeholder='Enter your lname' onChange={inputEvent} value={fullName.lname} name="lname"></input><br></br><br></br>
          <input type="gmail" id="gm" placeholder='Enter your gmail' onChange={inputEvent} value={fullName.gmail} name="gmail"></input><br></br><br></br>
          <input type="radio" id="r1"  onChange={inputEvent}  name="radio" value="male"></input>male
          <input type="radio" id="r2"  onChange={inputEvent}  name="radio" value="female"></input>female<br></br><br></br>
          <input type="checkbox" id="c1"  onChange={inputEvent} value={fullName.checkbox}  name="checkbox" ></input>HTML
          <input type="checkbox" id="c2"  onChange={inputEvent} value={fullName.checkbox}  name="checkbox" ></input>CSS
          <input type="checkbox" id="c3"  onChange={inputEvent} value={fullName.checkbox}  name="checkbox" ></input>JS
          <input type="checkbox" id="c4"  onChange={inputEvent} value={fullName.checkbox} name="checkbox"  ></input>NODE.JS<br></br><br></br>
          <button type="submit">Click</button>
        </form>
      </div>
      </>
    )
  }

  export default Form4;