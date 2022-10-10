import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Footer.css";

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool,
};

const defaultProps = {
  topOuterDivider: false,
  topDivider: false,
};

const Footer = ({ className, topOuterDivider, topDivider, ...props }) => {
  const classes = classNames(
    "site-footer center-content-mobile",
    topOuterDivider && "has-top-divider",
    className
  );

  return (
    <footer {...props} className={classes}>
      <hr className="footer-line" />
      <div className="footer-container">
        <div
          className={classNames(
            "site-footer-inner2",
            topDivider && "has-top-divider"
          )}
        >
          <div className="footer-top text-xxs">
            <div>
              이용약관&nbsp; | &nbsp;기업상품 약관&nbsp; | &nbsp;법적고지&nbsp;
              |&nbsp; <b>개인정보처리방침</b> &nbsp;|&nbsp; 윤리위반신고
            </div>
            <div className="group-test">
              <div>그룹사 소개</div>
            </div>
          </div>
          <hr className="footer-line" />
          <div className="footer-bottom text-xxs">
            <div className="footer-copyright">
              Made by{" "}
              <a href="/">
                <b className="footer-copyright-hightlight">
                  임호정이 그립조...
                </b>
              </a>
              . All right reserved
            </div>
            <div className="footer-logo">
              <a
                href="https://blog.naver.com/ktenterprise"
                target="_blank"
                rel="noopener noreferrer"
                title="KT Enterprise 블로그 새창열림"
              >
                <img
                  src="https://enterprise.kt.com/resource/images/common/ico_sns_b.png"
                  alt="blog"
                />
              </a>
              &nbsp;&nbsp;
              <a
                href="https://www.facebook.com/kt.corp"
                target="_blank"
                title="KT 페이스북 새창열림"
                rel="noopener noreferrer"
              >
                <img
                  src="https://enterprise.kt.com/resource/images/common/ico_sns_f.png"
                  alt="facebook"
                />
              </a>
              &nbsp;&nbsp;
              <a
                href="https://twitter.com/kt_corp"
                target="_blank"
                rel="noopener noreferrer"
                title="KT 트위터 새창열림"
              >
                <img
                  src="https://enterprise.kt.com/resource/images/common/ico_sns_t.png"
                  alt="twitter"
                />
              </a>
              &nbsp;&nbsp;
              <a
                href="https://youtube.com/c/KTBiz"
                target="_blank"
                rel="noopener noreferrer"
                title="KT 유튜브 새창열림"
              >
                <img
                  src="https://enterprise.kt.com/resource/images/common/ico_sns_y.png"
                  alt="youtube"
                />
              </a>
              &nbsp;&nbsp;
              <a
                href="https://post.naver.com/my.nhn?memberNo=30305360"
                target="_blank"
                rel="noopener noreferrer"
                title="KT 네이버 포스트 새창열림"
              >
                <img src="https://enterprise.kt.com/resource/images/common/ico_sns_p.png"
                  alt="img"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
