// Phase-1 Mounting : Mounting means putting elements into the DOM
import React from "react";

 class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
      }
      render() {
        return (
          <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        );
      }
    }
   export default Header;

 /*import Header from "./components/Lifecycle/Mounting/constructor";
import Headers from "./components/Lifecycle/Mounting/getDerivedStateFromProps";
import Headerss from "./components/Lifecycle/Mounting/compoentDidMount"



  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<><Header favcol="yellow"/>,<Headers />,<Headerss/></>);*/  
  
  
  