import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4"

function App() {
  return (
    <Router>
    <div className="App">
    <ul>
      <li><Link to="/">Page1</Link></li>
      <li><Link to="/about">Page2</Link></li>
      <li><Link to="/contact">Page3</Link></li>
    </ul>
   

<Routes>
  <Route exact path="/" element={<Page1/>}></Route>
  <Route exact path="/about" element={<Page2/>}></Route>
  <Route exact path="/contact" element={<Page3/>}></Route> 
  <Route exact path="/any" element={<Page4/>}/>
  {/* replace={true} will replace the component data*/}
</Routes>
             
    </div>
    </Router>
  );
}

export default App;
