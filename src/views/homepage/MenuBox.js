import React from 'react';
import { useSpring, animated } from "react-spring";
import styled from 'styled-components';
import { FirstMenuLayout } from '../../components/menu/FirstMenuLayout';
import { SecondMenuLayout } from '../../components/menu/SecondMenuLayout';
import { ThirdMenuLayout } from '../../components/menu/ThirdMenuLayout';

const StyledBox = styled.div`

    width: 100vw;
    height: 90vh;
    position: absolute;
    z-index: 3;
    border-radius: 15px;
    background: rgba(255, 255, 255,.2);
    overflow-y: hidden;
    overflow-x: hidden;
    
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
              {show ? <SecondMenuLayout menu={menu} /> : <></>}
            </StyledBox>
          </animated.div>
        );
      }
      else if(index === 2) {
        return (
          <animated.div style={props}>
            <StyledBox>
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