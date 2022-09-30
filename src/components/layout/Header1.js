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
                        <Link className="list-name2" to="#0" onClick={openMenu}>검색</Link>
                    </li>
                    <li>
                        <img className = "middle" src={require('./../../assets/images/k_talk_icon.png')}
                            height="30px"
                            width="30px"
                            alt="">
                        </img>
                        <Link className="list-name2" to="#0" onClick={openMenu}>케이톡</Link>
                        
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Header;