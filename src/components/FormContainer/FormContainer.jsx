import React, { useState, useEffect } from "react";
import styles from "./FormContainer.module.css";
import Button from "../Button/Button";
import { FaSearch } from "react-icons/fa";

const FormContainer = ({ onSubmit, type = "input" }) => {
  // Accept type prop
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [Hospital, setHospital] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedHospital, setSelectedHospital] = useState("");
  const [bookingId, setBookingId] = useState("");

  // fetch states on mount
  useEffect(() => {
    fetchData("https://meddata-backend.onrender.com/states", setStates);
  }, []);

  // fetch cities when state changes
  useEffect(() => {
    if (selectedState) {
      fetchData(
        `https://meddata-backend.onrender.com/cities/${selectedState}`,
        setCities
      );
    }
  }, [selectedState]);

  // fetch cities when state changes
  useEffect(() => {
    if (selectedCity) {
      fetchData(
        // `https://meddata-backend.onrender.com/cities/${selectedState}`,
        `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`,
        setHospital

        // IN THIS we are getting array of objects
      );
    }
  }, [selectedCity]);

  const fetchData = async (endpoint, setter) => {
    try {
      const res = await fetch(endpoint);
      const data = await res.json();
      setter(data);
      // console.log(data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  return (
    <form className={styles.searchForm} onSubmit={onSubmit}>
      {type === "input" ? ( // Conditionally render input field
        <input
          type="text"
          name="hospital"
          className={styles.select}
          placeholder="Search By Hospital"
          value={bookingId}
          onChange={(e) => setBookingId(e.target.value)}
          required
        />
      ) : (
        // selecting state and city to fetch hospitals
        <>
          <div id="state">
            {" "}
            {/* Add div with id="state" */}
            <select
              className={styles.select}
              onChange={(e) => setSelectedState(e.target.value)}
              required
            >
              <option value="" hidden>
                Select State
              </option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          <div id="city">
            {" "}
            {/* Add div with id="city" */}
            <select
              className={styles.select}
              onChange={(e) => setSelectedCity(e.target.value)}
              disabled={!selectedState}
              required
            >
              <option value="" hidden>
                Select City
              </option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </>
      )}

      <Button width="120px" height="50px" background="var(--color-primary)">
        <div className={styles.iconDownload}>
          <FaSearch />
        </div>
        <div>Search</div>
      </Button>
    </form>
  );
};

export default FormContainer;
