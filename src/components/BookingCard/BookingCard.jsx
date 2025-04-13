import React from "react";
import styles from "./BookingCard.module.css";
import hospitalImg from "../../assets/hospital.png";
import Button from "../Button/Button";

const BookingCard = () => {
  return (
    <div className={styles.card}>
      {/* Left: Image */}
      <div className={styles.leftSection}>
        <div className={styles.imageWrapper}>
          <img
            src={hospitalImg}
            alt="hospital"
            className={styles.hospitalImg}
          />
          <span className={styles.tick}>✔</span>
        </div>
      </div>

      {/* Center: Hospital Info */}
      <div className={styles.middleSection}>
        <h3 className={styles.title}>Fortis Hospital Richmond Road</h3>
        <p className={styles.location}>
          <strong>Banglore, Karnataka</strong>
        </p>
        <p className={styles.description}>
          Smilessence Center for Advanced Dentistry + 1 more
        </p>
        <p className={styles.fee}>
          <span className={styles.free}>FREE</span>
          <span className={styles.strike}> ₹500</span> Consultation fee at
          clinic
        </p>
        <div className={styles.rating}>
          👍 <span>5</span>
        </div>
      </div>

      {/* Right: Availability + Button */}
      <div className={styles.rightSection}>
        <p className={styles.available}>Available Today</p>
        <Button
          width="250px"
          height="45px"
          background="var(--color-primary)"
          aria-label="Book Center"
        >
          Book FREE Center Visit
        </Button>
      </div>
    </div>
  );
};

export default BookingCard;
