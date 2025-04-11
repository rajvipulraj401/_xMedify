import React from "react";
import Footer from "../../components/Footer/Footer";
import Download from "../../components/Download/Download";
import Family from "../../components/Family/Family";
import Blogs from "../../components/Blogs/Blogs";

const Home = () => {
  return (
    <>
      {/* <div>Home</div> */}
      <Blogs></Blogs>
      <Family></Family>
      <Download></Download>
      <Footer></Footer>
    </>
  );
};

export default Home;
