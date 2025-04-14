import React, { useState, useEffect } from "react";
import styles from "./FormContainer.module.css";
import Button from "../Button/Button";
import { FaSearch } from "react-icons/fa";

const FormContainer = ({ onSearch, type = "input" }) => {
  // Accept type prop
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
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

  const fetchData = async (endpoint, setter) => {
    try {
      const res = await fetch(endpoint);
      const data = await res.json();
      setter(data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (type === "input") {
      // If type is input, submit bookingId
      onSearch({ bookingId });
    } else {
      // Else submit selected state and city
      onSearch({ selectedState, selectedCity });
    }
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
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
        <>
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
