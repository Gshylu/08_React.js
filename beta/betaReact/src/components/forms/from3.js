import React ,{useState} from "react"
import "./style.css"
const Form3 = () => {

    const [fullName ,  setFullName] = useState({
        fname : "",
        lname : "",
        gmail : "",
    });

    const inputEvent = (event) =>{
      console.log(event.target.value);
      console.log(event.target.name);

     // const value = event.target.value;
      //const name  = event.target.name;
     
    const {value , name } = event.target



      setFullName((preValue) =>{

        if(name === "fName"){
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
        }
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
          
        <p> {fullName.fname}{fullName.lname}{fullName.gmail}</p>
        
          <input type="text" id="input" placeholder='Enter your fname' onChange={inputEvent} value={fullName.fname} name="fName"></input><br></br><br></br>
          <input type="text" id="pw" placeholder='Enter your lname' onChange={inputEvent} value={fullName.lname} name="lName"></input><br></br><br></br>
          <input type="gmail" id="gm" placeholder='Enter your gmail' onChange={inputEvent} value={fullName.gmail} name="gMail"></input><br></br><br></br>
          <button type="submit">Click</button>
        </form>
      </div>
      </>
    )
  }

  export default Form3;
