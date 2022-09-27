import React from 'react';
import { useSpring, animated } from "react-spring";
import styled from 'styled-components';

const propsData = (show) => {
    return {
        top: show ?  0 : window.innerHeight,
        left: 0,
        position: "absolute"
    }
}

const StyledBox = styled.div`

    width: 100vw;
    height: 80vh;
    position: absolute;
    z-index: 3;
    border-radius: 15px;
    background: rgb(105,98,226);
background: linear-gradient(135deg, rgba(105,98,226,0.8046568969384629) 0%, rgba(12,106,196,1) 35%, rgba(15,104,184,1) 75%, rgba(0,212,255,1) 100%);

    
`

export function MenuBox({ show }) {
    const props = useSpring(propsData(show));

    return (
    <animated.div style={props}>
      <StyledBox>
        <div>BOX!</div>
      </StyledBox>
    </animated.div>
  );
}