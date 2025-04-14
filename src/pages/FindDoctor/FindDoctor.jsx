// import React from "react";
// import Navbar from "../../components/Navbar/Navbar";
// import WrapperNav from "../../components/WrapperNav/WrapperNav";
// import SearchContainer from "../../components/SearchContainer/SearchContainer";
// import HospitalInfo from "../../components/HospitalInfo/HospitalInfo";
// import styles from "./FindDoctor.module.css";
// const FindDoctor = () => {
//   return (
//     <div className={styles.findDoctorPage}>
//       <Navbar></Navbar>
//       <WrapperNav></WrapperNav>
//       <SearchContainer
//         inputs={[
//           { placeholder: "State", name: "state" },
//           { placeholder: "City", name: "city" },
//         ]}
//       />

//       {/* // onSubmit={(e) => {
//         //   e.preventDefault();
//         //   const data = new FormData(e.target);
//         //   console.log("State:", data.get("state"));
//         //   console.log("City:", data.get("city"));
//         // }}
//       // /> */}

//       <SearchContainer
//         inputs={[{ placeholder: "Search By Hospital", name: "hospital" }]}
//       />

//       {/* <SearchContainer
//         inputs={[{ placeholder: "Search By Hospital", name: "hospital" }]}
//         onSubmit={(e) => {
//           e.preventDefault();
//           const data = new FormData(e.target);
//           console.log("Hospital:", data.get("hospital"));
//         }}
//       /> */}

//       <HospitalInfo></HospitalInfo>
//     </div>
//   );
// };

// export default FindDoctor;

// -----------------2nd version after making FormContainer-----------

import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import WrapperNav from "../../components/WrapperNav/WrapperNav";
import SearchContainer from "../../components/SearchContainer/SearchContainer";
import HospitalInfo from "../../components/HospitalInfo/HospitalInfo";
import styles from "./FindDoctor.module.css";

const FindDoctor = () => {
  const handleLocationSearch = ({ selectedState, selectedCity }) => {
    console.log("State:", selectedState);
    console.log("City:", selectedCity);
    // fetch hospitals etc.
  };

  const handleHospitalSearch = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const hospitalName = form.get("hospital");
    console.log("Hospital Search:", hospitalName);
    // fetch hospital info
  };

  return (
    <div className={styles.findDoctorPage}>
      <Navbar />
      <WrapperNav />

      {/* 1. Select State/City (FormContainer will be used internally) */}
      <SearchContainer type="select" onSubmit={handleLocationSearch} />

      {/*  2. Search by hospital name */}
      {/* <SearchContainer type="input" onSubmit={handleHospitalSearch} /> */}

      <HospitalInfo />
    </div>
  );
};

export default FindDoctor;
