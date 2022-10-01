import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components';
import { FirstMenu } from './FirstMenu';
import { HEADERS, SUBHEADERS } from "./mainData/Header.json";
import * as CategoryData from "./mainData/Category.json";

const GridFirstStyleDiv = styled.div`
    
    width: 90vw;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
    
const GridLastStyleDiv = styled.div`
    
    width: 90vw;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const StyledBox = styled.div`

    width: 100vw;
    height: 90vh;
    padding: 5vh 6vw;
    display: grid;
    grid-gap: 1vh 1vw;
    grid-template-columns: repeat(1, 1fr);
    background: rgba(255,255,255,0.5);
   
`
export function FirstMenuLayout({ menu }) {

    const subHeadersArr = SUBHEADERS[menu].map((sumHeader) => {
        const header = sumHeader.name;
        return header;
    });

    const upperArray = subHeadersArr.slice(0,4);
    const lowerArray = subHeadersArr.slice(4);

  return (
    <StyledBox>
        <GridFirstStyleDiv>
            {upperArray.map((header, index) => {
                
               return <FirstMenu header={header} key={index} />

            })}
        </GridFirstStyleDiv>
        <GridLastStyleDiv>
            {lowerArray.map((header, index) => {
                return <FirstMenu header={header} key={index} />
            })}
        </GridLastStyleDiv>
    </StyledBox>
  )
}