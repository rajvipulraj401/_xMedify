import React, { useState } from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import FindDoctor from "./pages/FindDoctor/FindDoctor";
import "./App.css";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import Download from "./components/Download/Download";

const App = () => {
  const [stateSelected, setStateSelected] = useState(null);
  const [CitySelected, setCitySelected] = useState(null);

  const handleSearch = function () {
    // return();
    // when both State and City are selected do api call and send results
    // to FindDoctor component
  };

  return (
    <div className="AppContainer">
      <Routes>
        <Route
          path="/"
          element={<Home onSearchClick={handleSearch}> </Home>}
        ></Route>
        <Route
          path="/FindDoctor"
          element={<FindDoctor onSearchClick={handleSearch} />}
        ></Route>
      </Routes>

      <Faq></Faq>
      <Download></Download>
      <Footer></Footer>
    </div>
  );
};

export default App;
