import React from "react";
import { Intro } from "./intro";
import { IntroImage } from "./introImage";
import Configuration from "./configuration/Configuration";
import { InstallInfo } from "./installInfo";
import { Video } from "./video";
import { MoreInfo } from "./moreInfo";

const Detail = () => {
  return (
    <>
      <Intro />
      <IntroImage />
      <Configuration />
      <InstallInfo />
      <Video />
      <MoreInfo />
    </>
  );
};

export default Detail;
