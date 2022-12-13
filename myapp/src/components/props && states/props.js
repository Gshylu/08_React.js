import React from "react"

class Car extends React.Component {
    constructor(props) {
     super(props)
    }
    render() {
      return <h2>I am a {this.props.name}!</h2>;
    }
  }

  export default Car
  

  