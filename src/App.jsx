import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import FindDoctor from "./pages/FindDoctor/FindDoctor";
import "./App.css";

const App = () => {
  return (
    <div className="AppContainer">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/FindDoctor" element={<FindDoctor />}></Route>
      </Routes>
    </div>
  );
};

export default App;
