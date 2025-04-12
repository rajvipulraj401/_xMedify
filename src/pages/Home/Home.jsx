import React from "react";
import Footer from "../../components/Footer/Footer";
import Download from "../../components/Download/Download";
import Family from "../../components/Family/Family";
import Blogs from "../../components/Blogs/Blogs";
import Specialisation from "../../components/Specialisation/Specialisation";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import PatientCaring from "../../components/PatientCaring/PatientCaring";
import MedicalSpecialist from "../../components/MedicalSpecialist/MedicalSpecialist";
import Coupon from "../../components/Coupon/Coupon";
import Faq from "../../components/Faq/Faq";

const Home = () => {
  return (
    <>
      {/* <div>Home</div> */}
      <Navbar></Navbar>
      <Hero></Hero>
      <Coupon></Coupon>
      <Specialisation></Specialisation>
      <Blogs></Blogs>
      <PatientCaring></PatientCaring>
      <MedicalSpecialist></MedicalSpecialist>
      <Family></Family>
      <Faq></Faq>
      <Download></Download>
      <Footer></Footer>
    </>
  );
};

export default Home;
