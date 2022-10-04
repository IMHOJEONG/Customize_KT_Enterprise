import React from "react";
import "./MoreInfo.scss";

const openConsult = () => {
  window.open("https://enterprise.kt.com/cs/P_CS_CQ_001.do");
};

const openChatBot = () => {
  window.open(
    "https://ibot.kt.com/client/chat.html?channelToken=b6841d2830b64f328fdc61c387b7021c",
    "windowPop",
    "width=422, height=712, left=500, top=10, resizable=yes"
  );
};

export const MoreInfo = () => {
  return (
    <div class="moreInfo-container">
      <div class="header">
        <p class="title">AI 호텔을 더 알고 싶다면?</p>
      </div>
      <div class="content">
        <a
          href={require("../../../assets/KT AI 호텔_브로슈어.pdf")}
          download="KT AI 호텔_브로슈어.pdf"
        >
          <div class="box box-left reveal-from-left" data-reveal-delay="200">
            <img
              class="box-icon"
              alt="icon_pdf"
              src={require("../../../assets/images/icons/icon_pdf.png")}
            />
            <div class="box-content">
              <p class="box-content-title">
                브로슈어
                <br />
                다운받기
              </p>
              <img
                class="box-content-icon"
                alt="icon_arrow"
                src={require("../../../assets/images/icons/icon_arrow.png")}
              />
            </div>
          </div>
        </a>
        <div onClick={openConsult} style={{ cursor: "pointer" }}>
          <div class="box box-middle reveal-from-left" data-reveal-delay="400">
            <img
              class="box-icon"
              alt="icon_person"
              src={require("../../../assets/images/icons/icon_person.png")}
            />
            <div class="box-content">
              <p class="box-content-title">
                전문가와
                <br />
                상담하기
              </p>
              <img
                class="box-content-icon"
                alt="icon_arrow"
                src={require("../../../assets/images/icons/icon_arrow.png")}
              />
            </div>
          </div>
        </div>
        <div onClick={openChatBot} style={{ cursor: "pointer" }}>
          <div class="box box-right reveal-from-left" data-reveal-delay="600">
            <img
              class="box-icon"
              alt="icon_qna"
              src={require("../../../assets/images/icons/icon_qna.png")}
            />
            <div class="box-content">
              <p class="box-content-title">
                챗봇에게
                <br />
                질문하기
              </p>
              <img
                class="box-content-icon"
                alt="icon_arrow"
                src={require("../../../assets/images/icons/icon_arrow.png")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
