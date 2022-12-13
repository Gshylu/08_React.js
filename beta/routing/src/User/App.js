import {BrowserRouter as Router,Routes,Route,Link } from "react-router-dom"
import User from "./user"

function App(){
    return(
        <Router>
        <div>
        <ul>
        <li>
          <Link to="/1">User1</Link>
        </li>
        <li>
          <Link to="/2">User2</Link>
        </li> </ul>
        <Routes>
            <Route exact path="/:id" element={<User/>} ></Route>
        </Routes>
       
        </div>
        </Router>
    )
}

export default App;
