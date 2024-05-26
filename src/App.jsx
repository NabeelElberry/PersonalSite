import "./App.css";
import PhotoAndHeader from "./components/PhotoAndHeader.jsx";
import InfoPanel from "./components/InfoPanel.jsx";
import { data } from "./data.js";
import { useEffect } from "react";
import { Fragment } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import Description from "./components/Description.jsx";
import { useState } from "react";

function App() {
  return (
    <div
      className="scroll-smooth font-serif drop-shadow-custom
    "
    >
      <div className="flex flex-row pb-10 h-screen" id="pheader">
        <PhotoAndHeader />
      </div>
      <p
        className="
          mt-10 pt-24 flex justify-center 
          md:text-5xl sm:text-3xl xl:text-7xl text-textgreen"
      >
        About Me
      </p>
      <div>
        <InfoPanel data={data} />
      </div>
    </div>
  );
}

export default App;
