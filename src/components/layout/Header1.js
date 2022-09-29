import React from 'react';
import { Link } from 'react-router-dom';
import './Header1.css';

const Header = () => {
    const openMenu = () => {
        console.log("열림")
    }
    return (
        <div className="header">
            <div className="header-container" color='white'>
                <div>
                    <img src={require('./../../assets/images/kt_enterprise_logo.png')}
                        alt="">
                    </img>
                </div>
                  
                <ul className="list">
                    <li onMouseOver={openMenu}>
                      <Link className="list-name" to="Section1">About us</Link>
                    </li>
                    <li>
                      <Link className="list-name" to="#0"  onClick={openMenu}>상품/서비스</Link>
                    </li>
                    <li>
                      <Link className="list-name" to="#0" color='black' onClick={openMenu}>산업</Link>
                    </li>
                    <li>
                      <Link className="list-name" to="#0" color='black' onClick={openMenu}>DX insight</Link>
                    </li>
                    <li>
                      <Link className="list-name" to="#0" color='black' onClick={openMenu}>고객지원 </Link>
                    </li>
                </ul>

                <ul className="list">
                    <li>
                        <div>
                            <img src={require('./../../assets/images/search_icon.png')}
                                height="50px"
                                width="50px"
                                alt="">
                            </img>
                        </div>
                        <div>
                            <Link className="list-name" to="#0" color='black' onClick={openMenu}>검색</Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={require('./../../assets/images/k_talk_icon.png')}
                                height="50px"
                                width="50px"
                                alt="">
                            </img>
                        </div>
                        <div>
                            <Link className="list-name" to="#0" color='black' onClick={openMenu}>케이톡</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;