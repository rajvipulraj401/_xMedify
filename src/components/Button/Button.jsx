import React from "react";
import styles from "./Button.module.css";

const Button = ({ background, width, height, children }) => {
  // Create a styles object and pass it as a styles object inside styles attribute (as styles attribute accepts an object)
  //   const btnStyles = {
  //     backgroundColor: background,
  //     width: width,
  //     height: height,
  //     // we cannot do like name : "name" (here it wont work incorrectl)
  //   };

  //   Shorthand

  const btnStyles = { backgroundColor: background, width, height };

  return (
    <>
      <div className={styles.buttonContainer} style={btnStyles}>
        {children}
      </div>
    </>
  );
};

export default Button;
