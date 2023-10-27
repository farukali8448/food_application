import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Badge from 'react-bootstrap/Badge'
import Model from "../Model";
import Cart from "../viewComponent/Cart";
import { useCart } from "./CardAddItem";

const Navbar = () => {
  const data=useCart()
  const navigate=useNavigate();
  const [cartView,setCartView]=useState(false)

  const handlelogout=()=>{
     localStorage.removeItem("token");
     navigate("/login")
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">
            GoodFood
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              {(localStorage.getItem("token"))?
              <li className="nav-item">
              <Link className="nav-link active fs-5" aria-current="page" to="/">
                My orders 
              </Link>
            </li>:""}
              </ul>
             
              {(!localStorage.getItem("token"))?
              <div className="d-flex">
                <Link className="btn bg-white text-success mx-1 " to="/login">Login</Link>
                <Link className="btn bg-white text-success mx-1" to="/signup">Signup</Link>
              </div>
              :
              <div>
                <div className="btn bg-white text-success mx-2 " onClick={()=>{setCartView(true)}}>
                  Cart  {" "}
                
                <sup><Badge pill bg="danger">{data.length}</Badge></sup>

                  </div>
                  {cartView?<Model onClose={()=>{setCartView(false)}}><Cart/></Model>:null}
                <div className="btn bg-white text-danger mx-2 " onClick={handlelogout}>Logout</div>
              </div>
              }

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
