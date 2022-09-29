import React from "react";
import { Intro } from "./Intro";
import { IntroImage } from "./introImage";
import Configuration from "./configuration/Configuration";
import { MoreInfo } from "./MoreInfo";
const Detail = () => {
  return (
    <>
      <Intro />
      <IntroImage />
      <Configuration />
      <MoreInfo />
    </>
  );
};

export default Detail;
