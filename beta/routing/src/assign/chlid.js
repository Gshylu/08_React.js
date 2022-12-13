import React from 'react'
class Child extends React.Component{ 

    

    onClick = (event) => { 
       this.props.parentCallback(event.target.firstname.value); 
       this.props.parentCallback(event.target.lastname.value); 
       
      
       event.preventDefault(); 
    } 

  

    render(){ 
        return( 
        <div> 
            <form onSubmit = {this.onClick}> 
                <input type = "text" name = "firstname" placeholder = "Enter fName"/> <br></br><br></br> 
                <input type = "text" name = "lastname" placeholder = "Enter lName"/> <br></br><br></br> 

                <input type = "submit" value = "Submit"/> <br></br><br></br> 
            </form> 
        </div> 
         )} 
} 

export default Child