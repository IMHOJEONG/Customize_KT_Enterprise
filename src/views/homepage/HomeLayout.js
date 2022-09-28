import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Button, Title } from './index';
import { MenuBox } from './MenuBox';
import GlobalStyle from './GlobalStyle';
import { Cursor } from './cursor';
import Img1 from './img/1.PNG';
import Img2 from './img/2.PNG';
import Img3 from './img/3.PNG';

const Layout = styled.div`
    display: flex;
`;

const menuTitle = ['상품/서비스', '산업','DX Infomation'];

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
            {   
                left === false && 
                middle === false && 
                right === false ? 
                <>
                    <Box backgroundImg={Img1} show={true} name={"left"}>
                        <Button
                            onClick={()=>setIsOpen({
                                left: !left,
                                middle: false,
                                right: false
                            })}
                            isKR={true}
                        >{menuTitle[0]}</Button>
                        <MenuBox show={left}></MenuBox>
                    </Box>
                    <Box backgroundImg={Img2} show={true} name={"middle"}>
                        <Button
                            onClick={()=>setIsOpen({
                                left: false,
                                middle: !middle,
                                right: false
                            })}
                            isKR={true}
                        >{menuTitle[1]}</Button>
                        <MenuBox show={middle}></MenuBox>
                    </Box>
                    <Box backgroundImg={Img3} show={true} name={"right"}>
                        <Button
                            onClick={()=>setIsOpen({
                                left: false,
                                middle: false,
                                right: !right
                            })}
                            isKR={false}
                        >{menuTitle[2]}</Button>
                        <MenuBox show={right}></MenuBox>
                    </Box>
                </>
                :
                <>
                    <Box backgroundImg={Img1} show={left} name={"left"}>
                        <Button
                            onClick={()=>setIsOpen({
                                left: !left,
                                middle: false,
                                right: false
                            })}
                            isKR={true}
                        >{menuTitle[0]}</Button>
                        <MenuBox show={left}></MenuBox>
                    </Box>
                    <Box backgroundImg={Img2} show={middle} name={"middle"}>
                        <Button
                            onClick={()=>setIsOpen({
                                left: false,
                                middle: !middle,
                                right: false
                            })}
                            isKR={true}
                        >{menuTitle[1]}</Button>
                        <MenuBox show={middle}></MenuBox>
                    </Box>
                    <Box backgroundImg={Img3} show={right} name={"right"}>
                        <Button
                            onClick={()=>setIsOpen({
                                left: false,
                                middle: false,
                                right: !right
                            })}
                            isKR={false}
                        >{menuTitle[2]}</Button>
                        <MenuBox show={right}></MenuBox>
                    </Box>
                </>
            }
            <Title />
        </Layout>

    )

} 