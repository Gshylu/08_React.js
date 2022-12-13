import "./style.css"
import React,{useState} from "react";

function Inc(){
  const date = new Date().toLocaleTimeString()
  const [count , setCount] = useState(0);
  const [todate , setTodate]= useState(date);
  
 
 function on(){
     setCount(count + 1)
     
 }
 function oN(){
  setTodate(date)
}

 //setInterval(on,1000);  // it will call the function for evry second
  return (
    <>
    <div>
      <h1 onClick={on}>{count}</h1>
      <h1 onClick={oN}>{todate}</h1>
      </div>
    </>
  )
}

export default Inc