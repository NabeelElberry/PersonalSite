import { Fragment } from "react";
import Panel from "./Panel.jsx";
import { useEffect } from "react";
import BIRDS from "vanta/src/vanta.birds.js";
import { useState } from "react";
import Description from "./Description.jsx";
import { descriptions } from "../data.js";

let topicText = null;
let topicTitle = null;
function getContent(topic) {
  if (topic === "umd") {
    topicText = descriptions[0].desc;
    topicTitle = descriptions[0].title;
  } else if (topic === "coding") {
    topicText = descriptions[1].desc;
    topicTitle = descriptions[1].title;
  } else {
    topicText = descriptions[2].desc;
    topicTitle = descriptions[2].title;
  }
}

export default function InfoPanel({ data }) {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelectedTopic(topic) {
    console.log(topic);
    setSelectedTopic(topic);
    getContent(topic);
  }
  let descContent = undefined;

  if (selectedTopic) {
    descContent = (
      <Description topicText={topicText} topicTitle={topicTitle}></Description>
    );
  }

  return (
    <>
      <div className="flex flex-row pl-20 pr-20 mt-24 text-white h-1/3 justify-center pb-20 space-x-10">
        {data.map((d) => (
          <Panel
            image={d.image}
            description={d.description}
            onClick={() => handleSelectedTopic(d.title)}
            key={d.title}
          ></Panel>
        ))}
      </div>
      <div>{descContent}</div>
    </>
  );
}
