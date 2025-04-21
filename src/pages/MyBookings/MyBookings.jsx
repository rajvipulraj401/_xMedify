import React from "react";
import SearchContainer from "../../components/SearchContainer/SearchContainer";
import Navbar from "../../components/Navbar/Navbar";
import WrapperNav from "../../components/WrapperNav/WrapperNav";
import HospitalInfo from "../../components/HospitalInfo/HospitalInfo";
import styles from "./MyBookings.module.css";

const MyBookings = ({ onSubmit }) => {
  return (
    <div className={styles.myBookingsContainer}>
      {/* <div>MyBookings</div> */}
      <Navbar />
      <WrapperNav text="My Bookings" />
      <SearchContainer
        type="input"
        onSubmit={onSubmit}
        width="500px"
        padding="20px"
      />
      {/* <HospitalInfo /> */}
    </div>
  );
};

export default MyBookings;
