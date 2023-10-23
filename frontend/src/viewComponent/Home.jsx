import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import Carsal from "../Components/Carsal";

const Home = () => {
  return (
    <div >
      <div><Navbar /></div>
      <div><Carsal/></div>
       <div className="m-3"><Card/></div>
        <div><Footer /></div>
      </div>
  );
};

export default Home;
