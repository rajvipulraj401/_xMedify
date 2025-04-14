import React from "react";
import styles from "./TimingBlock.module.css";
const TimingBlock = ({ time }) => {
  return (
    <>
      <div className={styles.timeContainer}>{time}</div>
    </>
  );
};

export default TimingBlock;
