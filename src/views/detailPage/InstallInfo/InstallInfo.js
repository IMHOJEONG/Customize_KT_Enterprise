import React, { useState } from "react";
import classNames from "classnames";
import "./InstallInfo.scss";

export const InstallInfo = () => {
  const NEW = "new";
  const OLD = "old";
  const [tab, setTab] = useState(NEW);

  const newTabClasses = classNames("content", tab === OLD && "not-display");

  const oldTabClasses = classNames("content", tab === NEW && "not-display");

  return (
    <>
      <div className="InstallInfo-container">
        <p className="title">어떻게 설치가 되나요?</p>
        <div className="content-box">
          <div className="tabs">
            <div
              className={
                tab === NEW ? "tab tab-selected" : "tab tab-not-selected"
              }
              onClick={() => setTab("new")}
            >
              신축
            </div>
            <div
              className={
                tab === NEW ? "tab tab-not-selected" : "tab tab-selected"
              }
              onClick={() => setTab("old")}
            >
              기축
            </div>
          </div>
          <div className={newTabClasses}>
            <img
              src={require("../../../assets/images/install-new.png")}
              alt="content-new"
              className="content-img reveal-from-left"
            />
            <div className="space"></div>
            <div className="paragraph reveal-from-bottom">
              <div className="text-box">
                <p className="text">
                  기가 지니 연동을 위한 배선 공사가 가능해 <br />
                  <span className="orange">저렴한 비용</span>으로 RCU - 기가지니
                  <br /> <span className="orange">유선 연동 환경</span>을
                  구성합니다.
                </p>
              </div>
              <p className="sub-text">
                *RCU : Room Control Unit <br />
                *3rd Party 플랫폼 : 서비스를 연결하는 중간 다리 역할
              </p>
            </div>
          </div>
          <div className={oldTabClasses}>
            <img
              src={require("../../../assets/images/install-old.png")}
              alt="content-old"
              className="content-img"
            />
            <div className="space"></div>
            <div className="paragraph">
              <div className="text-box">
                <p className="text">
                  배선 공사가<span className="orange"> 불가능</span>하므로,
                  <br />
                  별도의 3rd Party 플랫폼을 통해
                  <br /> <span className="orange">무선 연동 환경</span>을
                  구성합니다.
                </p>
              </div>
              <p className="sub-text">
                *RCU : Room Control Unit <br />
                *3rd Party 플랫폼 : 서비스를 연결하는 중간 다리 역할
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
