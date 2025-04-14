import React from "react";
import styles from "./HospitalInfo.module.css";
import BookingCard from "../BookingCard/BookingCard";
import AdCard from "../AdCard/AdCard";
const HospitalInfo = ({ hospitalData }) => {
  return (
    <>
      <div className={styles.hospitalInfoContainer}>
        <div className={styles.hospitalInfoContent}>
          <div className={styles.infoText}>
            <h3>15 medical centers available in Alaska</h3>
            <h5>
              {" "}
              <span>✔</span> Book appointments with minimum wait-time & verified
              doctor details
            </h5>
          </div>

          <div className={styles.gridContainer}>
            <div className={styles.column1}>
              {/* display Bookingcard here yaar */}

              {/* NOw we get the hospital so as many hospital we loop and create that no of
               */}

              {hospitalData.map((hospital, index) => {
                return (
                  <BookingCard
                    key={index}
                    Name={hospital["Hospital Name"]}
                    City={hospital.City}
                    State={hospital.State}
                    Rating={hospital["Hospital overall rating"]}
                  ></BookingCard>
                );
              })}
            </div>

            {/* Booking card rendering ends here */}

            <div className={styles.column2}>
              {/* display ad card here yaar */}

              <AdCard></AdCard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HospitalInfo;
