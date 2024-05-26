import pfpPhoto from "../assets/IMG_0938.jpg";

import { useEffect } from "react";
export default function Photo({ style }) {
  return (
    <>
      <img
        src={pfpPhoto}
        id="pheader"
        className={`mt-20 mb-20 ml-20 rounded-full 
          flex justify-center items-center 
          drop-shadow-2xl
          transition ease-in-out duration-300
          hover:scale-110
          `}
      ></img>
    </>
  );
}
