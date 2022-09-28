import React from 'react';
import { useSpring, animated } from "react-spring";
import styled from 'styled-components';

const StyledBox = styled.div`

    width: 100vw;
    height: 80vh;
    position: absolute;
    z-index: 3;
    border-radius: 15px;
    background: rgba(248, 245, 245,.5);
   
`

export function MenuBox({ show }) {
  const propsData = (show) => {
    return {
        top: show ?  0 : window.innerHeight,
        left: 0,
        position: "absolute"
    }
}
    const props = useSpring(propsData(show));

    return (
    <animated.div style={props}>
      <StyledBox>
    
      </StyledBox>
    </animated.div>
  );
}