import React from 'react';
import { useSpring, animated } from "react-spring";
import styled from 'styled-components';
import { FirstMenuLayout } from '../../components/menu/FirstMenuLayout';
import Menu from '../../components/menu/Menu';
import { SecondMenuLayout } from '../../components/menu/SecondMenuLayout';
import { ThirdMenuLayout } from '../../components/menu/ThirdMenuLayout';

const StyledBox = styled.div`

    width: 100vw;
    height: 90vh;
    position: absolute;
    z-index: 3;
    border-radius: 15px;
    background: rgba(255, 255, 255,.2);
    overflow-y: ${props => props.overflow === "false"? 'hidden' : 'scroll'};
    overflow-x: hidden;

    &::-webkit-scrollbar-track
    {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      border-radius: 10px;
      background-color: #F5F5F5;
    }
    
    &::-webkit-scrollbar
    {
      width: 12px;
      background-color: #F5F5F5;
    }
    
    &::-webkit-scrollbar-thumb
    {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
      background-color: #555;
    }
    
`

export function MenuBox({ show, menu, index }) {
  const propsData = (show) => {
    return {
        top: show ?  0 : window.innerHeight,
        left: 0,
        position: "absolute"
    }
}
    const props = useSpring(propsData(show));

      if(index === 1){
        return (
          <animated.div style={props}>
            <StyledBox overflow={"false"}>
              {show ? <SecondMenuLayout menu={menu} /> : <></>}
            </StyledBox>
          </animated.div>
        );
      }
      else if(index === 2) {
        return (
          <animated.div style={props}>
            <StyledBox overflow={"false"}>
              {show ? <ThirdMenuLayout menu={menu} open={show} /> : <></>}
            </StyledBox>
          </animated.div>
        );
      }
      else {
        return (
          <animated.div style={props}>
            <StyledBox>
              {show ? <FirstMenuLayout menu={menu}/> : <></>}
            </StyledBox>
          </animated.div>
        );
      }
}