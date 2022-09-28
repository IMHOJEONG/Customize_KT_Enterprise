import React, { useState } from 'react'
import { useSpring, a } from '@react-spring/web'
import styles from './styles.module.css';
import styled from 'styled-components';

const StyledDiv = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    
`;  

export default function SecondMenu({ menu, image }) {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(100vw) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  return (
    
        <StyledDiv className={styles.container} 
            onMouseOver={() => set(state => !state)}
            onMouseOut={() => set(state => !state)}
        >
            <a.div
                className={`${styles.c} ${styles.back}`}
                style={{ 
                    opacity: opacity.to(o => 1 - o), 
                    transform,
                    backgroundImage: `url(${image})`,
                    
                }}
            />
            <a.div
                className={`${styles.c} ${styles.front}`}
                style={{
                    opacity,
                    transform,
                    rotateX: '180deg',
                    backgroundImage: `url(${image})`,
                    
                }}
            />
        </StyledDiv>
  )
}
