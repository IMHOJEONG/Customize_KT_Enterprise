import React from "react";
import "./Intro.scss";

export const Intro = () => {
  return (
    <>
      <div className="intro-container">
        <div className="header">
          <p className="title title-small">
            이런 <span className="title-blue">고민</span>을 한 적 있는
          </p>
          <p className="title title-big">
            <span className="title-blue">호텔 오너</span>라면?
          </p>
        </div>

        <div className="content">
          <div className="box">
            <p className="box-title">
              더 효율적으로
              <br />
              호텔 관리를 할 순 없을까?
            </p>
            <img
              src="https://enterprise.kt.com/resource/images/pd/CC_CM_008_svdt_02_03.png"
              alt="person"
              className="box-img"
            />
          </div>
          <div className="box box-left">
            <p className="box-title">
              특색있는 호텔로 <br />
              고객을 끌어오고 싶은데...
            </p>
            <img
              src="https://enterprise.kt.com/resource/images/pd/CC_CM_008_svdt_02_04.png"
              alt="person"
              className="box-img box-img-left"
            />
          </div>
          <div className="box">
            <p className="box-title">
              비대면 서비스를 <br />
              찾는 고객이 많은데 어쩌지?
            </p>
            <img
              src="https://enterprise.kt.com/resource/images/pd/CC_CM_008_svdt_02_02.png"
              alt="person"
              className="box-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};
