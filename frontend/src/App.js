import 'bootstrap/dist/css/bootstrap.css';
import Home from "./viewComponent/Home";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from "./viewComponent/Login";
import SignUp from "./viewComponent/SignUp"
import CardAddItem from './Components/CardAddItem';
// import Cart from './viewComponent/Cart';



const App = () => {
  return (
    <CardAddItem>
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<SignUp/>}/>
          {/* <Route exact path="/cart" element={<Cart/>}/> */}

        </Routes>
      </div>
    </Router>
    </CardAddItem>
  )
}

export default App
