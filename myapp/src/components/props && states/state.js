//, Class components were the only way to track state and lifecycle
// on a React component. Function components were considered "state-less".
//With the addition of Hooks, Function components are now 
//almost equivalent to Class components. The differences are so minor 
//that you will probably never need to use a Class component in React. 

import React from "react";


class Book extends React.Component {  // class component
    constructor(props) {   //This function is called when component is initiated and it will initiate the component's properties.
      super(props);// which executes the parent component's constructor function,
      this.state = {// component properties should be kept in an object called state.
        Title: "A New Book",
        Author: "Myself",
        pages: "78,000",
        year: 2098
      };
    }
    changePages = () => {
      this.setState({pages: "78,889"});  // we can change the value of state
    }
    render() {  // diplayes into js on windows
      return (  
        <div>
          <h1>I have Started reading a book called {this.state.Title}</h1>
          <p>
            it was written by {this.state.Author} and it contains
            {this.state.pages} and i am going to publish in the year    {this.state.year}.
         
          </p>
          <button
            type="button"
            onClick={this.changePages}  // we are adding a button which is use to call the function to change the state value
          >change the pages</button>
        </div>
      );
    }
  }

  export default Book; // it will export the component to render file

  