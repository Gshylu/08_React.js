import React,{useState} from "react"
import "./style.css"

function Todo(){
 
   
  const [name ,  setName] = useState("");
  const [newname , setNewname] = useState([]); //we are creating a by initaling state new array 
  

  const add = (event) =>{
    setName(event.target.value);
  };

  /// we can fetch any input data by creating an event and by using states


  const onSubmit = () =>{
    setNewname((oldelem)=>{       // we are using this arrow function for joining the data into the new array by set state
      return [...oldelem , name];
    })
  }
// here we are adding the new data into an array which is created by states
// ...  is spared operator is used here for fetching the all the data
  const deletelem = (id) =>{

    console.log("deleted");
    setNewname((oldelem)=>{      
        return oldelem.filter((arrElem , index)=>{
              return index !== id;
        })
      })

  }
  

    return(
        <> 
           
           {newname.map( (elem ) => { 
            return (
                <>
                
                <div ><li id={Math.random()} >{elem}{" "}</li>
                <button   onClick={deletelem}>x</button>
                </div>
                </>
                ) }) }

           {/* here we are creating an new array map for fetching data  */ }
           
            <input type="text" id="s" placeholder="search..." onChange={add}></input>
            <button type="submit" onClick={onSubmit} >Add</button>
        </>
    )

}

export default Todo;