import React from 'react';
/* Create a new Context */
const ProductsContext = React.createContext();

/* A "smart" container to hold state */
export default class ProductsContainer extends React.Component {
  state = {
    id : 1,
    Title : "world",
    Rating : 4.5,
    Description :"it is a very good book",
    Price:359
  }
  render() {
    const { id,Title,Rating,Description,Price } = this.state;
    
    return (
      // Create a Provider from the Context, pass in state values
      <ProductsContext.Provider
        value={{
            id,
          Title,
          Rating,
          Description,
          Price
        }} >
       <Products/>
      </ProductsContext.Provider>
    )
  }
}

/* Dumb Components */
const Products = () => (
  // Use the Consumer to pop out whatever you need from the Context
  <ProductsContext.Consumer>
  {({ id , Title , Rating ,Description,Price})=>(
  <React.Fragment>

    <h1>products id :{id}</h1>
    <h1>products Title:{Title}</h1>
    <h1>products Rating:{ Rating}</h1>
    <h1>products Description:{Description}</h1>
    <h1>products Price:{Price}</h1>
  
  </React.Fragment>
  )}
</ProductsContext.Consumer>
)

