import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import FindDoctor from "./pages/FindDoctor/FindDoctor";
import "./App.css";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import Download from "./components/Download/Download";
import BookingCard from "./components/BookingCard/BookingCard";
import AdCard from "./components/AdCard/AdCard";

const App = () => {
  return (
    <div className="AppContainer">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/FindDoctor" element={<FindDoctor />}></Route>
      </Routes>

      <Faq></Faq>
      <Download></Download>
      <Footer></Footer>
    </div>
  );
};

export default App;
