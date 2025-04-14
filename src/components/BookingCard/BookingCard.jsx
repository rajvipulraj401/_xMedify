import React, { useState } from "react";
import styles from "./BookingCard.module.css";
import hospitalImg from "../../assets/hospital.png";
import Button from "../Button/Button";
import TimingBlock from "../TimingBlock/TimingBlock";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

const BookingCard = () => {
  const [activeTab, setActiveTab] = useState(null); //  Initially no tab is selected

  const handleDateClick = (index) => {};

  return (
    <section className={styles.cardContainer}>
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

      <div className={styles.tabContainer}>
        <div className={styles.tabSwitchContainer}>
          <div className={styles.arrow} onClick="">
            <FaCircleChevronLeft />
          </div>
          {/* individual Timing */}
          <div className={styles.tabSwitch} onClick={handleDateClick}>
            <h4>Today</h4>
            <span>11 Slots Available</span>
          </div>
          <div className={styles.tabSwitch} onClick={handleDateClick}>
            <h4>Tomorrow</h4>
            <span>17 Slots Available</span>
          </div>
          <div className={styles.tabSwitch} onClick={handleDateClick}>
            <h4>Fri, 5 May</h4>
            <span>19 Slots Available</span>
          </div>
          {/* <div className={styles.tabSwitch}>
            <h4>Today</h4>
            <span>11 Slots Available</span>
          </div>
          <div className={styles.tabSwitch}>
            <h4>Tomorrow</h4>
            <span>17 Slots Available</span>
          </div>
          <div className={styles.tabSwitch}>
            <h4>Fri, 5 May</h4>
            <span>19 Slots Available</span>
          </div> */}
          {/* individual Timing */}
          <div className={styles.arrow} onClick="">
            <FaCircleChevronRight />
          </div>
        </div>

        {/*  This is the tracker line which will move*/}
        <div className={styles.dateTrackerLine}></div>

        {/* tHIS IS the grid layout of all the times and shifts */}
        <div className={styles.tabContainerTiming}>
          {/* <div> Morning</div>
          <div>Afternooon</div>
          <div>Evening</div> */}

          <div className={styles.row1}>
            <div> Morning</div>
            <TimingBlock time="11:30AM"></TimingBlock>
          </div>
          <div className={styles.row1}>
            <div>Afternooon</div>
            <TimingBlock time="12:00PM"></TimingBlock>
            <TimingBlock time="12:30PM"></TimingBlock>
            <TimingBlock time="01:30PM"></TimingBlock>
            <TimingBlock time="02:00PM"></TimingBlock>
            <TimingBlock time="02:30PM"></TimingBlock>
          </div>
          <div className={styles.row1}>
            <div>Evening</div>
            <TimingBlock time="06:00PM"></TimingBlock>
            <TimingBlock time="06:30PM"></TimingBlock>
            <TimingBlock time="07:00PM"></TimingBlock>
            <TimingBlock time="07:30PM"></TimingBlock>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCard;
// -------------------2nd version of doing this --------------------
// -----------------------------------
// -----------------------------------
