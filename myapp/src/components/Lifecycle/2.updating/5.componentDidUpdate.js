import React from "react";

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    } 
    componentDidMount() {
      setTimeout(() => {
        this.setState({favoritecolor: "yellow"})
      }, 1000)
    }
    componentDidUpdate() {
      document.getElementById("mydiv").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
    }
    render() {
      return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="mydiv"></div>
        </div>
      );
    }
  }
  
  export default Header;

  /*The componentDidUpdate method is called after the component is updated in the DOM.

The example below might seem complicated, but all it does is this:

When the component is mounting it is rendered with the favorite color "red".

When the component has been mounted, a timer changes the state, and the color becomes "yellow".

This action triggers the update phase, and since this component has a componentDidUpdate method, this method is executed and writes a message in the empty DIV element:*/