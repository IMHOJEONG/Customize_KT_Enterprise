import React from "react";
import "./ClientList.scss";

export function linearComponent() {
  return (
    <ul className="list">
      <li className="list-item">
        <img
          src="https://gigagenie.kt.com/images/main/partnerHotel_logo01.png"
          alt="노보텔 앰배서더 동대문"
        />
      </li>
      <li className="list-item">
        <img
          src="https://gigagenie.kt.com/images/main/partnerHotel_logo02.png"
          alt="레스케이프 호텔"
        />
      </li>
      <li className="list-item">
        <img
          src="https://gigagenie.kt.com/images/main/partnerHotel_logo03.png"
          alt="앰배서더 레지던스"
        />
      </li>
      <li className="list-item">
        <img
          src="https://gigagenie.kt.com/images/main/partnerHotel_logo04.png"
          alt="베이몬드호텔"
        />
      </li>
      <li className="list-item">
        <img
          src="https://gigagenie.kt.com/images/main/partnerHotel_logo05.png"
          alt="베스트루이스해밀턴 광안점"
        />
      </li>
      <li className="list-item">
        <img
          src="https://gigagenie.kt.com/images/main/partnerHotel_logo06.png"
          alt="헤이, 서귀포"
        />
      </li>
      <li className="list-item">
        <img
          src="https://gigagenie.kt.com/images/main/partnerHotel_logo07.png"
          alt="메이필드 호텔"
        />
      </li>
      <li className="list-item">
        <img
          src="https://gigagenie.kt.com/images/main/partnerHotel_logo08.png"
          alt="로얄호텔 서울"
        />
      </li>
    </ul>
  );
}

export const ClientList = () => {
  return (
    <>
      <div className="cliet-container">
        <div className="header">
          이미 많은 AI 호텔이 성공적으로 운영중입니다.
        </div>
        <div className="wrap">
          <div className="roller">
            {linearComponent()}
            {linearComponent()}
          </div>
        </div>
      </div>
    </>
  );
};
