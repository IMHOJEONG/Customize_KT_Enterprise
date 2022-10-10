import React, { useState } from 'react'
import styled from 'styled-components';
import { useTrail, animated as a } from "react-spring";

const StyledBoxButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    font-size: 1.20vw;
    cursor: pointer;
    padding: 1vh 1vw;
    background : rgba(255,255,255,0.5);
    border-radius: 15px;
    border: 2px solid rgba(255,255,255,0.5);
    font-family: "Noto Sans", "Noto Sans KR";
    `;  
    
const StyleBoxFirstButton = styled.div`
    
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    font-weight: bold;
    font-size: 1.50vw;
    margin: 2vh 2vw;
    font-family: "Noto Sans", "Noto Sans KR";
`;

const goNextPage = (url) => {
    window.location.href = url;
} 

const FirstButton = (menus, index, isKR) => {
    return (
        <StyleBoxFirstButton onClick={()=>goNextPage(menus[index].url)} isKR>
            {menus[index].name}
        </StyleBoxFirstButton>
    )
}
const Button = (menus, index, isKR) => {
    return (
        <StyledBoxButton  onClick={()=>goNextPage(menus[index].url)} isKR>
            {menus[index].name}
        </StyledBoxButton>
    )
}

const LayoutComponent = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
`
const SubLayoutComponent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    margin: 2vh 0;
`;

export const ThirdMenu = ({ menus }) => {

    const [open, set] = useState(true);

    const trail = useTrail(menus.length, {
      config: { mass: 7, tension: 2000, friction: 300 },
      opacity: open ? 1 : 0,
      x: open ? 0 : 20,
      height: open ? 50 : 0,
      from: { opacity: 0, x: 20, height: 0 },
    });

    return (
        <LayoutComponent>
            {trail.slice(0,1).map(({ height, ...style }, index) => {
                return (<div onClick={() => set(state => !state)} key={index}>
                    {FirstButton(menus, index)}
                </div>);
            })}
            <SubLayoutComponent>
            {trail.slice(1).map(({ height, ...style }, index) => {
                return (
                    <a.div key={index} style={{height, ...style,
                        margin: '1vh 0'
                    }}>
                        {Button(menus, index)}
                    </a.div>
                ) 
            })}
            </SubLayoutComponent>
      </LayoutComponent>
    )
}