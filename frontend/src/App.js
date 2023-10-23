import 'bootstrap/dist/css/bootstrap.css';
import Home from "./viewComponent/Home";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from "./viewComponent/Login";
import SignUp from "./viewComponent/SignUp"


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<SignUp/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
