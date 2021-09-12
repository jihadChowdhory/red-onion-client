import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Foods from "../Foods/Foods";
import Header from "../Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import Speciality from "../Speciality/Speciality";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Foods></Foods>
      <Speciality></Speciality>
      <Footer></Footer>
    </div>
  );
};

export default Home;
