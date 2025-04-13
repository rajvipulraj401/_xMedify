// import React from "react";
// import styles from "./SearchContainer.module.css";
// import Button from "../Button/Button";
// import { FaSearch } from "react-icons/fa";

// const SearchContainer = () => {
//   return (
//     <div>
//       <form className={styles.searchForm}>
//         <input type="text" placeholder="State" />
//         <input type="text" placeholder="City" />

//         <Button width="120px" height="50px" background="var(--color-primary)">
//           <div className={styles.iconDownload}>
//             <FaSearch />
//           </div>
//           <div>Search</div>
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default SearchContainer;
import React from "react";
import styles from "./SearchContainer.module.css";
import Button from "../Button/Button";
import { FaSearch } from "react-icons/fa";

const SearchContainer = ({ inputs = [], onSubmit, buttonText = "Search" }) => {
  return (
    <div className={styles.fullContainer}>
      <div className={styles.searchFormContainer}>
        <form className={styles.searchForm} onSubmit={onSubmit}>
          {inputs.map((input, index) => (
            <input
              key={index}
              type="text"
              placeholder={input.placeholder}
              name={input.name}
              className={styles.input}
            />
          ))}

          <Button
            width="250px"
            height="50px"
            background="var(--color-primary)"
            type="submit"
          >
            <div className={styles.iconDownload}>
              <FaSearch />
            </div>
            <div>{buttonText}</div>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SearchContainer;
