import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';

const Login = () => {

  const [credentials, setCredentials] = useState({email: "",password: "",});
  const navigate=useNavigate()

   
const handleSubmit = async (e) => {
  e.preventDefault();


  const response = await fetch("http://localhost:8000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: credentials.email,
      password: credentials.password,
    }),
  });

  const json = await response.json();
  console.log(json)
  if (!json.success) {
    // localStorage.setItem("Email",credentials.email)
   // localStorage.setItem("token",json.token)
    console.log(localStorage.getItem("token"))
     navigate("/")
  }
    else{
      alert("Invalid Credentials")

    }
};

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit}>
           <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={credentials.email}
              onChange={onChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={credentials.password}
              onChange={onChange}
            />
            </div>
            <button type="submit" className="m-3 btn btn-success">
            Submit
          </button>
          <Link to="/signup" className="m-3 btn btn-danger">
            New User
          </Link>
            </form>
          </div>
    </div>
  )
}

export default Login