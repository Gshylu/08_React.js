import React from 'react'; 

import Child from './chlid'
class App extends React.Component{ 

      
       state = { fname: "" , lname:"" } 

    handleCallback = (childData) =>{ 
      
        this.setState({ fname:childData ,lname:childData})
      
    } 
    render(){ 
   
   
    
         return( 
            <div> 
                <Child parentCallback = {this.handleCallback}/> 
              
                
            </div> 
        ) 
    } 
} 

export default App