import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Button, Title } from './index';
import Img1 from './img/1.PNG';
import Img2 from './img/2.PNG';
import Img3 from './img/3.PNG';
import { MenuBox } from './MenuBox';
import GlobalStyle from './GlobalStyle';
import { Cursor } from './cursor';
const Layout = styled.div`
    display: flex;
`;

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
            <Box backgroundImg={'https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}>
                <Button
                    onClick={()=>setIsOpen({
                        left: !left,
                        middle: false,
                        right: false
                    })}
                >Click!</Button>
                <MenuBox show={left}></MenuBox>
            </Box>
            <Box backgroundImg={ 'https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}>
                <Button
                    onClick={()=>setIsOpen({
                        left: false,
                        middle: !middle,
                        right: false
                    })}
                >Click!</Button>
                <MenuBox show={middle}></MenuBox>
            </Box>
            <Box backgroundImg={'https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
}>
                <Button
                    onClick={()=>setIsOpen({
                        left: false,
                        middle: false,
                        right: !right
                    })}
                >Click!</Button>
                <MenuBox show={right}></MenuBox>
            </Box>
            <Title />
        </Layout>

    )

} 