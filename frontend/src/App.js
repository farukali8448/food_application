import 'bootstrap/dist/css/bootstrap.css';
import Home from "./viewComponent/Home";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from "./viewComponent/Login";
import SignUp from "./viewComponent/SignUp"
import CardAddItem from './Components/CardAddItem';



const App = () => {
  return (
    <CardAddItem>
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<SignUp/>}/>
        </Routes>
      </div>
    </Router>
    </CardAddItem>
  )
}

export default App
