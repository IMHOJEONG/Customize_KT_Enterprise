import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/web'
import styles from './styles.module.css';

import Logo from './img/logo.png';

const AnimFeTurbulence = animated('feTurbulence')
const AnimFeDisplacementMap = animated('feDisplacementMap')

const StyledTitleLayout = styled.div`
    width: 100vw;
    height: 10vh;
    margin: 10vh 0;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index:2;
    
`;

// const StyledTitle = styled.div`
//     background: lightgray;
//     font-family: 'Noto_Sans';
//     padding: 4vh 4vw;
//     color: black;
//     font-size: 5vw;
//     opacity: 0.8;
//     border-radius: 15px;
// `

const StyledImg = styled.img`
    width: 20vw;
    height: 20vh;
    object-fit: contain;
`

export function Title() {

    const [open, toggle] = useState(false)
    const [{ freq, factor, scale, opacity }] = useSpring(() => ({
      reverse: open,
      from: { factor: 10, opacity: 0, scale: 0.9, freq: '0.0175, 0.0' },
      to: { factor: 150, opacity: 1, scale: 1, freq: '0.0, 0.0' },
      config: { duration: 3000 },
    }))
  
    return (
        <StyledTitleLayout>
          <StyledImg src={Logo}/>
        </StyledTitleLayout>
    )
}


