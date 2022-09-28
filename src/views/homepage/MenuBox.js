import React from 'react';
import { useSpring, animated } from "react-spring";
import styled from 'styled-components';
import Menu from '../../components/menu/Menu';
import { SecondMenuLayout } from '../../components/menu/SecondMenuLayout';

const StyledBox = styled.div`

    width: 100vw;
    height: 90vh;
    position: absolute;
    z-index: 3;
    border-radius: 15px;
    background: rgba(248, 245, 245,.5);
    overflow-y: scroll;
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
            <StyledBox>
              {show ? <SecondMenuLayout menu={menu}/> : <></>}
            </StyledBox>
          </animated.div>
        );
      }
      else {
        return (
          <animated.div style={props}>
            <StyledBox>
              {show ? <Menu menu={menu}/> : <></>}
            </StyledBox>
          </animated.div>
        );
      }
}