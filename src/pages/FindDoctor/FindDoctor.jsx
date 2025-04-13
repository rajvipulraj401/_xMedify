import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import WrapperNav from "../../components/WrapperNav/WrapperNav";
import SearchContainer from "../../components/SearchContainer/SearchContainer";
import HospitalInfo from "../../components/HospitalInfo/HospitalInfo";
import styles from "./FindDoctor.module.css";
const FindDoctor = () => {
  return (
    <div className={styles.findDoctorPage}>
      <Navbar></Navbar>
      <WrapperNav></WrapperNav>
      <SearchContainer
        inputs={[
          { placeholder: "State", name: "state" },
          { placeholder: "City", name: "city" },
        ]}
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.target);
          console.log("State:", data.get("state"));
          console.log("City:", data.get("city"));
        }}
      />

      {/* <SearchContainer
        inputs={[{ placeholder: "Search By Hospital", name: "hospital" }]}
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.target);
          console.log("Hospital:", data.get("hospital"));
        }}
      /> */}

      <HospitalInfo></HospitalInfo>
    </div>
  );
};

export default FindDoctor;
