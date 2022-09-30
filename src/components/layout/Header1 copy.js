import React from 'react';
import { Link } from 'react-router-dom';
import './Header1.css';
import FadeInOut from './FadeInOut';

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
                <div className='list'>
                    <li>
                        <FadeInOut className="service-lis" to="Section1" name="상품/서비스"/>
                    </li>
                    <li>
                        <FadeInOut className="list-name" to="Section1" name="산업"/>
                    </li>
                    <li>
                        <FadeInOut className="list-name" to="Section1" name="DX Information"/>
                    </li>
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
                </div>
            </div>
        </div>
    )
}

export default Header;