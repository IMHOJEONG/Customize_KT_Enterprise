import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import FadeInOut from './FadeInOut';

const Header = () => {

    const openChatBot = () => {
        window.open(
            "https://ibot.kt.com/client/chat.html?channelToken=b6841d2830b64f328fdc61c387b7021c",
            "windowPop",
            "width=422, height=712, left=500. top = 10, resizable=yes"
        );
    }

    return (
        <div className="header">
            <div className="header-container" color='white'>
                    <img className = "logo"src={require('./../../assets/images/kt_enterprise_logo.png')}
                        alt="">
                    </img>
                <div className='list'>
                    <li>
                        <FadeInOut className="list-name" to="Section1" name="상품/서비스"/>
                    </li>
                    <li>
                        <FadeInOut className="list-name" to="Section1" name="산업"/>
                    </li>
                    <li>
                        <FadeInOut className="list-name" to="Section1" name="DX Information"/>
                    </li>
                </div>
                    
                <div className='list2'>
                    <li>
                        <img className = "middle" src={require('./../../assets/images/search_icon.png')}
                            height="30px"
                            width="30px"
                            alt="">
                        </img>
                        <a className="list-name2" to="#0" >검색</a>
                    </li>
                    <li onClick={openChatBot}>
                        <img className = "middle" src={require('./../../assets/images/k_talk_icon.png')}
                            height="30px"
                            width="30px"
                            alt="">
                        </img>
                        <a className="list-name2">케이톡</a>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Header;