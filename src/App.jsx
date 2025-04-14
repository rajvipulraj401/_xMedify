import React, { useState } from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import FindDoctor from "./pages/FindDoctor/FindDoctor";
import "./App.css";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import Download from "./components/Download/Download";
import MyBookings from "./pages/MyBookings/MyBookings";

const App = () => {
  const [stateSelected, setStateSelected] = useState(null);
  const [CitySelected, setCitySelected] = useState(null);

  const handleSearch = function (e) {
    // return();
    // when both State and City are selected do api call and send results
    // to FindDoctor component

    e.preventDefault();

    if (type === "input") {
      // If type is input, submit bookingId
      onSearch({ bookingId });
    } else {
      // Else submit selected state and city
      onSearch({ selectedState, selectedCity });
    }
  };

  return (
    <div className="AppContainer">
      {/* Home page */}
      <Routes>
        <Route
          path="/"
          element={<Home onSearchClick={handleSearch}> </Home>}
        ></Route>
        {/* FindDoctor page */}
        <Route
          path="/FindDoctor"
          element={<FindDoctor onSubmit={handleSearch} />}
        ></Route>
        {/* booking page */}
        <Route
          path="/my-bookings"
          element={<MyBookings onSubmit={handleSearch} />}
        ></Route>
      </Routes>

      <Faq></Faq>
      <Download></Download>
      <Footer></Footer>
    </div>
  );
};

export default App;
