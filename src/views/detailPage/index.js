import React from "react";
import { Intro } from "./Intro";
import { IntroImage } from "./introImage";
import Configuration from "./configuration/Configuration";
import { InstallInfo } from "./InstallInfo";
import { Video } from "./video";
import { ChargeInfo } from "./chargeInfo";
import { MoreInfo } from "./MoreInfo";
import { ClientList } from "./clientList";

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
      <ClientList />
    </>
  );
};

export default Detail;
