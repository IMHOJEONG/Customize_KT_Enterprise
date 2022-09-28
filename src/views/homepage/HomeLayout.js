import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Button, Title } from './index';
import { MenuBox } from './MenuBox';
import GlobalStyle from './GlobalStyle';
import { Cursor } from './cursor';
// import Img1 from './img/1.PNG';
// import Img2 from './img/2.PNG';
// import Img3 from './img/3.PNG';
import Img1Webp from './img/1.webp';
import Img2Webp from './img/2.webp';
import Img3Webp from './img/3.webp';

const Layout = styled.div`
    display: flex;
`;

const menuTitle = ['상품/서비스', '산업','DX Information'];

export function HomeLayout() {

    const [isOpen, setIsOpen] = useState({
        left: false, 
        middle: false,
        right: false
    })

    const { left, middle, right } = isOpen;

    return (
        <Layout>
            <GlobalStyle />
            <Cursor />
            <Title show={[left,middle,right].some((item)=>item)}/>
            {   
                left === false && 
                middle === false && 
                right === false ? 
                <>
                    <Box backgroundImg={Img1Webp} show={true} name={"left"}>
                        <Button
                            onClick={()=>setIsOpen({
                                left: !left,
                                middle: false,
                                right: false
                            })}
                            isKR={true}
                        >{menuTitle[0]}</Button>
                        <MenuBox show={left} menu={menuTitle[0]}></MenuBox>
                    </Box>
                    <Box backgroundImg={Img2Webp} show={true} name={"middle"}>
                        <Button
                            onClick={()=>setIsOpen({
                                left: false,
                                middle: !middle,
                                right: false
                            })}
                            isKR={true}
                        >{menuTitle[1]}</Button>
                        <MenuBox show={middle} menu={menuTitle[1]} index={1}></MenuBox>
                    </Box>
                    <Box backgroundImg={Img3Webp} show={true} name={"right"}>
                        <Button
                            onClick={()=>setIsOpen({
                                left: false,
                                middle: false,
                                right: !right
                            })}
                            isKR={false}
                        >{menuTitle[2]}</Button>
                        <MenuBox show={right} menu={menuTitle[2]}></MenuBox>
                    </Box>
                </>
                :
                <>
                    <Box backgroundImg={Img1Webp} show={left} name={"left"}>
                        <Button
                            onClick={()=>setIsOpen({
                                left: !left,
                                middle: false,
                                right: false
                            })}
                            isKR={true}
                        >{menuTitle[0]}</Button>
                        <MenuBox show={left} menu={menuTitle[0]}></MenuBox>
                    </Box>
                    <Box backgroundImg={Img2Webp} show={middle} name={"middle"}>
                        <Button
                            onClick={()=>setIsOpen({
                                left: false,
                                middle: !middle,
                                right: false
                            })}
                            isKR={true}
                        >{menuTitle[1]}</Button>
                        <MenuBox show={middle} menu={menuTitle[1]} index={1}></MenuBox>
                    </Box>
                    <Box backgroundImg={Img3Webp} show={right} name={"right"}>
                        <Button
                            onClick={()=>setIsOpen({
                                left: false,
                                middle: false,
                                right: !right
                            })}
                            isKR={false}
                        >{menuTitle[2]}</Button>
                        <MenuBox show={right} menu={menuTitle[2]}></MenuBox>
                    </Box>
                </>
            }
            
        </Layout>

    )

} 