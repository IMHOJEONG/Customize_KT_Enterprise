import { HEADERS,SUBHEADERS } from "./mainData/Header.json";
import React from "react";
// import DxStory from './imgs/dxinfo/dx_story.webp';
// import Intro from './imgs/dxinfo/intro.webp';
// import MyBiz from './imgs/dxinfo/my_biz.webp';
import { ThirdMenu } from './ThirdMenu';
import styled from 'styled-components';

const ThirdMenuData = [

    // DxStory, Intro, MyBiz
    'About Us', 'DX Insight', '고객지원'
];

const StyledThirdMenuLayout = styled.div`

    width: 100vw;
    height: 90vh;
    display: grid; 
    grid-template-columns: repeat(3,1fr);
    padding: 15vh 25vw;
    grid-gap: 5vh 5vw;

`;

export function ThirdMenuLayout() {

    return (
        <StyledThirdMenuLayout>
            {
                ThirdMenuData.map((menu, index) => {
                   
                    const subArray = [HEADERS[menu], ...SUBHEADERS[menu]]
        
                    return <ThirdMenu menus={subArray} key={index} />
                })
            }
        </StyledThirdMenuLayout>
    )

}