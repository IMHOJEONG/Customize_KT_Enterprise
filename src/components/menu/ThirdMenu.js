import React, { useState } from 'react'
import styled from 'styled-components';
import { useTrail, animated as a } from "react-spring";
import styles from './styles.thirdmenu.module.css';

const StyledBoxButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    font-size: 1.20vw;
    padding: 1vh 1vw;
    background : rgba(255,255,255,0.5);
    border-radius: 15px;
    border: 2px solid rgba(255,255,255,0.5);
`;  

const StyleBoxFirstButton = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.20vw;
    margin: 3vh 3vw;
`;

const FirstButton = (menus, index) => {
    return (
        <StyleBoxFirstButton onClick={()=> window.open(`${menus[index].url}`, "_blank")}>
            {menus[index].name}
        </StyleBoxFirstButton>
    )
}
const Button = (menus, index) => {
    return (
        <StyledBoxButton  onClick={()=> window.open(`${menus[index].url}`, "_blank")}>
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
    justify-content: space-around;
    align-items: stretch;
`

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
            {trail.map(({ height, ...style }, index) => {
                if(index === 0) {
                    return (<div onClick={() => set(state => !state)} key={index}>
                        {FirstButton(menus, index)}
                    </div>);
                }
                else {
                    return (
                        <a.div key={index} className={styles.trailsText} style={{height, ... style}}>
                            {Button(menus, index)}
                        </a.div>
                    ) 
                }
            })}
      </LayoutComponent>
    )
}