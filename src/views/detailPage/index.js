import React from "react";
import { Intro } from "./intro";
import { IntroImage } from "./introImage";
import Configuration from "./configuration/Configuration";
import { InstallInfo } from "./InstallInfo";
const Detail = () => {
  return (
    <>
      <Intro />
      <IntroImage />
      <Configuration />
      <InstallInfo />
    </>
  );
};

export default Detail;
