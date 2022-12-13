import Child from './child2';

function App() {
  
  const pull_data = (data) => {
    console.log(data); 
  }
  
  return (
    <div className='App'>
      <Child
        func={pull_data}
      />
    </div>
  );
}

export default App;