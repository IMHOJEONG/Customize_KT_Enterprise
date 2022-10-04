import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../../utils/SectionProps";
import Image from "../../../components/elements/Image";
import "./Configuration.scss";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const Configuration = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "configuration",
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <img
        className="pattern-img pattern-img-1"
        src={require("../../../assets/images/pattern1.png")}
        alt="configuration-gigaGenie"
      />
      <div className="configuration-container">
        <div className={innerClasses}>
          <p className="title">
            AI 호텔은 <br />
            이렇게 구성되어 있어요.
          </p>
          <img
            className="img reveal-from-left"
            src={require("../../../assets/images/configuration.png")}
            alt="configuration-gigaGenie"
          />
          <div className="tiles-wrap center-content">
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("../../../assets/images/feature-tile-icon-01.svg")}
                      alt="Features tile icon 01"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="item-title mt-0 mb-8">24시간 인공지능 비서</h4>
                  <p className="item-content m-0 text-sm">
                    비대면 어메니티/컨시어지 요청 호텔 정보, <br />
                    체크인/체크아웃 프로세스 제공
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("../../../assets/images/feature-tile-icon-02.svg")}
                      alt="Features tile icon 02"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="item-title mt-0 mb-8">스마트 객실 제어</h4>
                  <p className="item-content m-0 text-sm">
                    조명, 커튼, 침대 등 객실 기기 제어 <br />
                    음성 명령, 화면 터치 모두 가능
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("../../../assets/images/feature-tile-icon-03.svg")}
                      alt="Features tile icon 03"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="item-title mt-0 mb-8">
                    다국어 / 엔터테인먼트
                  </h4>
                  <p className="item-content m-0 text-sm">
                    한국어, 영어, 중국어, 일본어 서비스 <br />
                    지니뮤직/YouTube 서비스 제공
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("../../../assets/images/feature-tile-icon-04.svg")}
                      alt="Features tile icon 04"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="item-title mt-0 mb-8">
                    객실-호텔 간 내선 전화
                  </h4>
                  <p className="item-content m-0 text-sm">
                    객실-호텔 업무 부서 간 전화 연결
                    <br /> 호텔 시설 이용 문의, 예약
                    <br /> 별도의 객실 전화 불필요
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("../../../assets/images/feature-tile-icon-05.svg")}
                      alt="Features tile icon 05"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="item-title mt-0 mb-8">유료 물품 판매</h4>
                  <p className="item-content m-0 text-sm">
                    호텔의 굿즈, 상품을 기가지니로 판매 <br />
                    유료 상품 판매를 통한 부가수익 기대
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("../../../assets/images/feature-tile-icon-06.svg")}
                      alt="Features tile icon 06"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="item-title mt-0 mb-8">
                    호텔 통합 관리 솔루션
                  </h4>
                  <p className="item-content m-0 text-sm">
                    Front-Back office 하나의 솔루션
                    <br /> 앱을 통한 하우스키퍼 업무/요청 관리
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="pattern-img pattern-img-2"
        src={require("../../../assets/images/pattern2.png")}
        alt="configuration-gigaGenie"
      />
    </section>
  );
};

Configuration.propTypes = propTypes;
Configuration.defaultProps = defaultProps;

export default Configuration;
