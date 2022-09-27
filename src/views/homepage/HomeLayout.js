import React from 'react';
import styled from 'styled-components';
import { Box, Img, Button } from './index';

const Layout = styled.a`
    display: flex;
`;

export function HomeLayout() {
    
    return (
        
        <Layout>
            <Box>
                <Img src="./img/1.PNG"></Img>
                <Button>Click!</Button>
            </Box>
            <Box >
                <Img src="./img/2.PNG"></Img>
                <Button>Click!</Button>
            </Box>
            <Box >
                <Img src="./img/3.PNG"></Img>
                <Button>Click!</Button>

            </Box>
        </Layout>

    )

} 