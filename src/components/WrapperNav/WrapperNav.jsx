import React from "react";
import styles from "./WrapperNav.module.css";

const WrapperNav = ({ text }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <h2>{text}</h2>
      </div>
    </>
  );
};

export default WrapperNav;
