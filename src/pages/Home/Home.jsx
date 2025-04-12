import React from "react";
import Footer from "../../components/Footer/Footer";
import Download from "../../components/Download/Download";
import Family from "../../components/Family/Family";
import Blogs from "../../components/Blogs/Blogs";
import Specialisation from "../../components/Specialisation/Specialisation";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <>
      {/* <div>Home</div> */}
      <Navbar></Navbar>
      <Hero></Hero>
      <Specialisation></Specialisation>
      <Blogs></Blogs>
      <Family></Family>
      <Download></Download>
      <Footer></Footer>
    </>
  );
};

export default Home;
