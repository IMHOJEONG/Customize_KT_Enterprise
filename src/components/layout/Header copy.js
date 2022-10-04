import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Logo from './partials/Logo';

import { SUBHEADERS } from "./temp_data/SubCategory.json";

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
}

const defaultProps = {
  navPosition: '',
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false
}

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {

  const [isActive, setIsactive] = useState(false);

  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', clickOutside);
      closeMenu();
    };
  });  

  const openMenu = () => {
    document.body.classList.add('off-nav-is-active');
    nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
    setIsactive(true);
  }

  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  }

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  }

  const clickOutside = (e) => {
    if (!nav.current) return
    if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
    closeMenu();
  }  

  const classes = classNames(
    'site-header',
    bottomOuterDivider && 'has-bottom-divider',
    className
  );

  return (
    <header
      {...props}
      className={classes}
    >
      {/* 헤더시작 */}
      <div className="container"> 
        <div className={
          classNames(
            'site-header-inner',
            bottomDivider && 'has-bottom-divider'
          )}>
          <Logo />
          {/* 버튼들 */}
          {!hideNav &&
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={
                  classNames(
                    'header-nav',
                    isActive && 'is-active'
                  )}>
                <div className="header-nav-inner" color='white'>
                  <ul className={
                    classNames(
                      'list-reset text-xs',
                      navPosition && `header-nav-${navPosition}`
                    )}>
                    <li>
                      <Link to="Section1" onMouseUp={openMenu}>About us</Link>
                    </li>
                    <li>
                      <Link to="#0" onClick={closeMenu}>상품/서비스</Link>
                    </li>
                    <li>
                      <Link to="#0" onClick={closeMenu}>산업</Link>
                    </li>
                    <li>
                      <Link to="#0" onClick={closeMenu}>DX insight</Link>
                    </li>
                    <li>
                      <Link to="#0" onClick={closeMenu}>고객지원 </Link>
                    </li>
                    <li>
                      <div>
                        <img src={require('./../../assets/images/search_icon.png')}
                         height="50px"
                         width="50px"
                          alt=""></img>
                      </div>
                      <div>
                        검색
                      </div>
                    </li>
                    <li>
                        <div>
                          <img src={require('./../../assets/images/k_talk_icon.png')}
                            height="50px"
                            width="50px"
                            alt=""></img>
                        </div>
                        <div>
                            케이톡
                        </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </>}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
