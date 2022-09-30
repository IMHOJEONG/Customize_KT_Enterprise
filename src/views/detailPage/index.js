import React from "react";
import { Intro } from "./intro";
import { IntroImage } from "./introImage";
import Configuration from "./configuration/Configuration";
import { InstallInfo } from "./installInfo";
import { Video } from "./video";
import { ChargeInfo } from "./chargeInfo";
import { MoreInfo } from "./moreInfo";

const Detail = () => {
  return (
    <>
      <Intro />
      <IntroImage />
      <Configuration />
      <InstallInfo />
      <Video />
      <ChargeInfo />
      <MoreInfo />
    </>
  );
};

export default Detail;
