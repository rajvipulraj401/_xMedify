import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router";
import Home from "./pages/Home/Home";
import FindDoctor from "./pages/FindDoctor/FindDoctor";
import "./App.css";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import Download from "./components/Download/Download";
import MyBookings from "./pages/MyBookings/MyBookings";
import Modal from "./components/Modal/Modal";
import { useSnackbar } from "notistack";

const App = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar(); // This function triggers the snackbar
  // This useSnackbar hooks returns two properties inside the object one is a function to show a snackbar and other one is optional
  // to close the snackBar
  const navigate = useNavigate(); // hook to navigate to diff pagess
  const [Hospital, setHospital] = useState([]);
  const [bookingId, setBookingId] = useState("");
  const [timeVal, setTimeVal] = useState(null);
  const [dateVal, setDateVal] = useState(null);

  const handleSearch = function (data) {
    //--- this is only getting the data this function

    // console.log(data);

    // step1 : if i receive the booking id in the object data received

    if (data.bookingId) {
      // Do something with bookingId
      // console.log("Booking ID:", data.bookingId);
    }

    // Step 2: if i get hospital data setHospital data and navigate to FindDoctor page
    else {
      // console.log("Hosptial:", data.hospitals);
      setHospital(data.hospitals);
      // ✅ Redirect to FindDoctor page after setting hospitals
      // navigate("/FindDoctor");
    }
    navigate("/FindDoctor");
    // console.log("mujhe Dabaya gaya hai");
  };

  const handleDateClick = (currentDate) => {
    // console.log(currentDate);
    setDateVal(currentDate);
  };
  const handleTimeClick = (currentTime) => {
    // console.log(currentTime);
    setTimeVal(currentTime);
  };

  // NOWwe have all the data of booking time , booking id , booking date and hospital date

  // sTEP TO DO booking

  /*
  1. Now when the date and time are not null then show the modal 
  2. After the confirm button is clicked add data in local storage to make data persist.
  */
  const handleCloseBooking = () => {
    setDateVal(null);
    setTimeVal(null);
  };

  const handleConfirmBooking = (email) => {};
  // ----
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
            <FindDoctor
              onSubmit={handleSearch}
              hospitalData={Hospital}
              handleDateClick={handleDateClick}
              handleTimeClick={handleTimeClick}
            />
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
      {/* Agr value selected hai tbhi modal dikhega */}
      {dateVal && timeVal && (
        <div className="modalContainer">
          <Modal
            onClose={handleCloseBooking}
            onConfirm={handleConfirmBooking}
          ></Modal>
        </div>
      )}
    </div>
  );
};

export default App;
