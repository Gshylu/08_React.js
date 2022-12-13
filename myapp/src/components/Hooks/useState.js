



/*
import { useState } from "react";


function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
    </>
  )
}

export default Car;*/





// we can directly use spread operator
//for change anything


import {useState} from "react"

function Myfun(){
  
  const [hook , setHook] = useState({
    name : "Gannoji shylu",
    Age  : 22,
    city :"Hyderbad",
    text : "i am here for learing React.js"  // we can use object
  });
  
  const update = () => {
    setHook(previousState => {
      return { ...previousState, city : "new city" }
    });
  }

  return (
    <><h1>
        here we go....
        <br/><br/>
        my name is {hook.name} , am {hook.Age} old and i live in {hook.city}
          , and {hook.text};
        <br/><br/>
        <button type="button" onClick={update()}>we can change easyly by spread operator</button> 
    
     </h1>
    </>
  ) // we can also update the state of object 

}

export default Myfun;
























/*
// we can create an object instead of mutiple hooks

import {useState} from "react"

function Myfun(){
  const [hook , setHook] = useState({
    name : "Gannoji shylu",
    Age  : 22,
    city :"Hyderbad",
    text : "i am here for learing React.js"  // we can use object
  });

  return (
    <><h1>
        here we go....
        <br/><br/>
        my name is {hook.name} , am {hook.Age} old and i live in {hook.city}
          , and {hook.text};
        <br/><br/>
    <button onClick={()=>setHook({text:"any new text "})}>we can change the text if i need</button> 
    
</h1>
    </>
  ) // we can also update the state of object 

}

export default Myfun;*/














/*import { useState } from "react";


function FavoriteColor() {
  const [color , setColor] = useState("red");   
  const [newhook1 , setNewhook1] = useState(" hook1")
  const [newhook2 , setNewhook2] = useState(" hook2")
  const [newhook3 , setNewhook3] = useState(" hook3")
  const [newhook4 , setNewhook4] = useState(" hook4")

  return (
  <>
  <h1>My favorite color is {color}!</h1>
  <h1>we can use mutilplehooks{newhook1}</h1>
  <h1>we can use mutilplehooks{newhook2}</h1>
  <h1>we can use mutilplehooks{newhook3}</h1>
  <h1>we can use mutilplehooks{newhook4} and also can change their state</h1>


  <button
    type="button"
    onClick={() => setColor("blue")}   /// to update we use setanything("")
  >Blue</button>
 


  </>)
}

 //The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!


              

export default FavoriteColor;*/