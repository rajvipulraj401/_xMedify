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
  const [Hospital, setHospital] = useState([]);
  const [bookingId, setBookingId] = useState("");

  const handleSearch = function (data) {
    //--- this is only getting the data this function

    console.log(data);

    // step1 : if i receive the booking id in the object data received

    if (data.bookingId) {
      // Do something with bookingId
      console.log("Booking ID:", data.bookingId);
    } else {
      // ✅ Save hospital and location data
      console.log("Hosptial:", data.hospitals);
      setHospital(data.hospitals);
      // setStateSelected(data.selectedState);
      // setCitySelected(data.selectedCity);
    }

    console.log("mujhe Dabaya gaya hai");
  };

  return (
    <div className="AppContainer">
      {/* Home page */}
      <Routes>
        <Route
          path="/"
          element={<Home onSubmit={handleSearch}> </Home>}
        ></Route>
        {/* FindDoctor page */}
        <Route
          path="/FindDoctor"
          element={
            <FindDoctor onSubmit={handleSearch} hospitalData={Hospital} />
          }
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
