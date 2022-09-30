import React, { useState } from "react";
import classNames from "classnames";
import "./ChargeInfo.scss";

export const ChargeInfo = () => {
  const BULID_MONEY = "build_money";
  const SERVICE_MONEY = "service_money";
  const [tab, setTab] = useState(BULID_MONEY);

  const buildTabClasses = classNames(
    "content",
    tab === SERVICE_MONEY && "not-display"
  );
  const serviceTabClasses = classNames(
    "content",
    tab === BULID_MONEY && "not-display"
  );

  return (
    <>
      <div className="ChargeInfo-container">
        <p className="title">요금 안내</p>
        <div className="content-box">
          <div className="tabs">
            <div
              className={
                tab === BULID_MONEY
                  ? "tab tab-selected"
                  : "tab tab-not-selected"
              }
              onClick={() => setTab(BULID_MONEY)}
            >
              구축비
            </div>
            <div
              className={
                tab === SERVICE_MONEY
                  ? "tab tab-selected"
                  : "tab tab-not-selected"
              }
              onClick={() => setTab(SERVICE_MONEY)}
            >
              서비스 요금
            </div>
          </div>
          <div className={buildTabClasses}>
            <img
              src={require("../../../assets/images/built-charge.png")}
              alt="built-charge"
              className="content-img"
            />
            <div className="content-para">
              <div className="paragraph">
                <p className="paragraph-title">
                  * 객실 당, 1회성 비용
                  <br />* 기본 구축 항목
                  <p className="paragraph-content">
                    - 기가지니 단말기(프리미엄/비즈니스) <br />
                    - 서비스 연동 <br />
                    - TV Gateway <br />- 상용 작업 및 매뉴얼 제공
                    <br />
                  </p>
                  * 3rd Party 연동
                  <p className="paragraph-content">
                    - 조명, 침대, 커튼/블라인드, TV 연동 제어
                    <br />- 기가지니 이외의 3rd Party 연동 장비 및 설치 비용은
                    별도
                  </p>
                  * 도입 객실 규모 및 개발 난이도에 따라 변동될 수 있음
                </p>
              </div>
              <img
                src="https://www.ilovepc.co.kr/news/photo/201907/30895_53557_1447.jpg"
                alt="giga-genie"
                className="giga-genie-img"
              />
            </div>
          </div>
          <div className={serviceTabClasses}>
            <img
              src={require("../../../assets/images/service-charge.png")}
              alt="content-old"
              className="content-img"
            />
          </div>
        </div>
        <div className="space"></div>
      </div>
    </>
  );
};
