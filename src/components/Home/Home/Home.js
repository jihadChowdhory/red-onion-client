import React from "react";
import Foods from "../Foods/Foods";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Foods></Foods>
    </div>
  );
};

export default Home;
