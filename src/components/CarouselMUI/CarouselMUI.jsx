// // V0 STARTING ONE ONLY MUI1

// import React, { useRef, useState } from "react";
// // import Tabs from "@mui/material/Tabs";
// // import Tab from "@mui/material/Tab";
// import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
// import { Tabs, Tab, Box } from "@mui/material";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// // import required modules
// import { Navigation } from "swiper/modules";

// const CarouselMUI = () => {
//   const [value, setValue] = useState(0);

//   const handleDateClick = (index) => {
//     console.log(Tab ${index} clicked);
//     // Add your logic here (like navigating, opening modal, etc.)
//   };

//   // In This tabData put the data of 7 date as said in the requirement
//   const tabData = [
//     { date: "Today", slots: "10 Slots Available" },
//     { date: "Tomorrow", slots: "10 Slots Available" },
//     { date: "Day After", slots: "5 Slots Available" },
//   ];
//   return (
//     <>
//       <Box sx={{ width: "100%" }}>
//         <Tabs
//           value={value}
//           onChange={(e, newValue) => setValue(newValue)}
//           sx={{ width: "100%" }}
//           variant="fullWidth"
//         >
//           {tabData.map((tab, index) => (
//             <Tab
//               key={index}
//               label={
//                 <div
//                   onClick={() => handleDateClick(index)}
//                   style={
//                     {
//                       // cursor: "pointer",
//                       // textAlign: "center",
//                       // padding: "8px 0",
//                     }
//                   }
//                 >
//                   <h4
//                     style={{
//                       padding: "8px 0",
//                       margin: 0,
//                       fontWeight: value === index ? "bold" : "normal",
//                       color: "#000",
//                     }}
//                   >
//                     {tab.date}
//                   </h4>
//                   <span>{tab.slots}</span>
//                 </div>
//               }
//             />
//           ))}

//         </Tabs>
//       </Box>
//     </>
//   );
// };

// export default CarouselMUI;

// -----v 1 (using inline block but not vairable width)------
// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";

// const CarouselMUI = () => {
//   const [value, setValue] = useState(0);

//   const handleDateClick = (index) => {
//     console.log(`Tab ${index} clicked`);
//     setValue(index);
//   };

//   const tabData = [
//     { date: "Today", slots: "10 Slots Available" },
//     { date: "Tomorrow", slots: "10 Slots Available" },
//     { date: "Day After", slots: "5 Slots Available" },
//     { date: "4th Day", slots: "2 Slots Available" },
//     { date: "5th Day", slots: "1 Slot Available" },
//     { date: "6th Day", slots: "8 Slots Available" },
//     { date: "7th Day", slots: "0 Slot Available" },
//   ];

//   return (
//     <Swiper
//       navigation={true}
//       modules={[Navigation]}
//       spaceBetween={10}
//       style={{
//         "--swiper-navigation-size": "25px",
//         padding: "0 40px",
//       }}
//       breakpoints={{
//         0: { slidesPerView: 1 },
//         768: { slidesPerView: 2 },
//         1200: { slidesPerView: 3 },
//       }}
//     >
//       {tabData.map((tab, index) => (
//         <SwiperSlide key={index}>
//           <div
//             onClick={() => handleDateClick(index)}
//             style={{
//               cursor: "pointer",
//               borderBottom:
//                 value === index ? "3px solid var(--color-primary)" : "none",
//               padding: "10px 0",

//               display: "inline-block",
//               // By using inline blok we can make it adjust to its
//               // content width and also give margin and heigh
//               // margin: "0 auto",
//             }}
//           >
//             <h4
//               style={{
//                 margin: 0,
//                 fontWeight: value === index ? "bold" : "normal",
//                 color: "#000",
//               }}
//             >
//               {tab.date}
//             </h4>
//             <span>{tab.slots}</span>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default CarouselMUI;

// Using "inline-block" here because:
// 1. It allows the div to shrink-wrap around its content (i.e., the text inside it),
//    which means the underline (borderBottom) will only be as wide as the text,
//    instead of stretching the full width like a block element would.
// 2. Unlike pure "inline" elements, "inline-block" allows us to apply padding,
//    margin, height, width – so it gives us the best of both worlds.
// 3. We're also using "margin: 0 auto" here to center the element horizontally.
//    This works because "inline-block" elements respect horizontal margins
//    and don't need a fixed width to center themselves inside a parent.
// 4. This approach helps us make each tab's underline look clean and neat,
//    centered under the text, and avoids it spanning the entire slide width.

// ----------version 2 using pseudo element-----------

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const CarouselMUI = () => {
  const [value, setValue] = useState(0);

  const handleDateClick = (index) => {
    // console.log(`Tab ${index} clicked`);
    setValue(index);
  };

  const tabData = [
    { date: "Today", slots: "10 Slots Available" },
    { date: "Tomorrow", slots: "10 Slots Available" },
    { date: "Day After", slots: "5 Slots Available" },
    { date: "4th Day", slots: "2 Slots Available" },
    { date: "5th Day", slots: "1 Slot Available" },
    { date: "6th Day", slots: "8 Slots Available" },
    { date: "7th Day", slots: "0 Slot Available" },
  ];

  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      spaceBetween={10}
      style={{
        "--swiper-navigation-size": "25px",
        padding: "0 40px",
      }}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 },
      }}
    >
      {tabData.map((tab, index) => (
        <SwiperSlide key={index}>
          <div
            onClick={() => handleDateClick(index)}
            style={{
              cursor: "pointer",
              textAlign: "center",
              display: "inline-block",
              padding: "10px 0",
              margin: "0 auto",
              position: "relative", // This is important for positioning the border div
            }}
          >
            <h4
              style={{
                margin: 0,
                fontWeight: value === index ? "bold" : "normal",
                color: "#000",
              }}
            >
              {tab.date}
            </h4>
            <span>{tab.slots}</span>

            {/* Border control by using another divv */}
            <div
              style={{
                // position: "absolute",
                // bottom: 0, // Positioning the border below the content
                // left: "50%", // Center it horizontally
                // transform: "translateX(-50%)", // Align the border to the center
                // width: "138%", // Make the border larger than the content (control the width here)
                // height: "3px", // Height of the border (control thickness)
                // backgroundColor: value === index ? "#1976d2" : "transparent", // Color of the border when selected

                position: "absolute",
                bottom: 0, // Positioning the border below the content
                left: "-16%", // Center it horizontally
                // transform: "translateX(-50%)", // Align the border to the center
                width: "125%", // Make the border larger than the content (control the width here)
                height: "3px", // Height of the border (control thickness)
                backgroundColor: value === index ? "#1976d2" : "transparent", // Color of the border when selected
              }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselMUI;
