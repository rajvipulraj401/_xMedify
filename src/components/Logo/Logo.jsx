import React from "react";
import styles from "./Logo.module.css";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.safetyIconBox}>
        <IoShieldCheckmarkSharp />
      </div>
      <div>
        <span>Medify</span>
      </div>
    </div>
  );
};

export default Logo;
