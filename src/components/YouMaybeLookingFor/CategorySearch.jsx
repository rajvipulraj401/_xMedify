import React from "react";
import styles from "./CategorySearch.module.css";
import Button from "../Button/Button";
import {
  FaSearch,
  FaTooth,
  FaAmbulance,
  FaHospital,
  FaCapsules,
  FaVials,
} from "react-icons/fa";
import SpecialisationCard from "../SpecialisationCard/SpecialisationCard";

const CategorySearch = () => {
  return (
    <div className={styles.searchContainer}>
      <form className={styles.searchForm}>
        <input type="text" placeholder="State" />
        <input type="text" placeholder="City" />

        <Button width="120px" height="50px" background="var(--color-primary)">
          <div className={styles.iconDownload}>
            <FaSearch />
          </div>
          <div>Search</div>
        </Button>
      </form>

      <p className={styles.subHeading}>You may be looking for</p>

      <div className={styles.cardWrapper}>
        <SpecialisationCard icon={<FaTooth />} label="Doctors" />
        <SpecialisationCard icon={<FaVials />} label="Labs" />
        <SpecialisationCard
          icon={<FaHospital />}
          background="#eef8ff"
          border="1px solid var(--color-primary)"
          label="Hospitals"
        />
        <SpecialisationCard icon={<FaCapsules />} label="Medical Store" />
        <SpecialisationCard icon={<FaAmbulance />} label="Ambulance" />
      </div>
    </div>
  );
};

export default CategorySearch;
