//Also at updates the getDerivedStateFromProps method is called.
// This is the first method that is called when a component gets updated.

// when we are using onclick fun and getDerivedStateFromProps() it will excute the method() only 
import React from "react"

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    static getDerivedStateFromProps(props, state) {
        return {favoritecolor: props.favcol };
      }
    changeColor = () => {
      this.setState({favoritecolor: "blue"});
    }
    render() {
      return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>Change color</button>
        </div>
      );
    }
  }
  


  export default Header;

