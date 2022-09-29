import { HEADERS,SUBHEADERS } from "./mainData/Header.json";
import React, { useState } from "react";
import DxStory from './imgs/dxinfo/dx_story.webp';
import Intro from './imgs/dxinfo/intro.webp';
import MyBiz from './imgs/dxinfo/my_biz.webp';
import { ThirdMenu } from './ThirdMenu';
import styled from 'styled-components';
import { useTrail, animated as a } from "react-spring";

const ThirdMenuData = [

    // DxStory, Intro, MyBiz
    'About Us', 'DX Insight', '고객지원'
];

const StyledThirdMenuLayout = styled.div`

    width: 100vw;
    height: 90vh;
    display: grid; 
    grid-template-columns: repeat(3,1fr);
    padding: 5vh 25vw;
    grid-gap: 5vh 5vw;

`;

export function ThirdMenuLayout() {

    return (
        <StyledThirdMenuLayout>
            {
                ThirdMenuData.map((menu) => {
                   
                    const subArray = [HEADERS[menu], ...SUBHEADERS[menu]]
                    // const array = subArray.reduce((sum, arr)=>{
                    //     sum = sum.concat(...arr); 
                    //     return sum;
                    // },[]);
                    console.log(subArray);
                    return <ThirdMenu menus={subArray} />
                })
            }
        </StyledThirdMenuLayout>
    )

}