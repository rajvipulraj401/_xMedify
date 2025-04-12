import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

const Navbar = ({ background }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topStrip}>
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </div>
      <nav className={styles.navbar} style={{ background }}>
        <Logo></Logo>
        <ul className={styles.navLinks}>
          <li>Find Doctors</li>
          <li>Hospitals</li>
          <li>Medicines</li>
          <li>Surgeries</li>
          <li>Software for Provider</li>
          <li>Facilities</li>

          <Button
            width="130px"
            height="50px"
            background="var(--color-primary)"
            aria-label="My Bookings"
          >
            My Bookings
          </Button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
