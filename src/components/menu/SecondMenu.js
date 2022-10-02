import React, { useState } from 'react'
import { useSpring, a } from '@react-spring/web'
import styled, { css, keyframes } from 'styled-components';

const SharedDivStyle = css`
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
    will-change: transform, opacity;
    border-radius: 15px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
`

const StyledDiv = styled.div`
    width:100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;  

const StyledBackDiv = styled(a.div)`
    ${SharedDivStyle}
    ${props => props.opacity}
    ${props => props.transform}
    ${props => props.backgroundImage}
`;

const StyledFrontDiv = styled(a.div)`
    ${SharedDivStyle}
    ${props => props.opacity}
    ${props => props.transform}
    ${props => props.backgroundImage}
`;

const StyledFrontShadowBox = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.5);
    color: black; 
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px; 
    font-family: 'Noto_SansKR_Bold';
    font-size: 2vw;
`;

const goNextPage = (url) => {
    window.open(`${url}`, "_blank")
} 


export default function SecondMenu({ menu, image }) {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(100vw) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })
//   console.log(transform, opacity);
  return (
        
        <StyledDiv
            onMouseOver={() => set(state => !state)}
            onMouseOut={() => set(state => !state)}
        >
            <StyledBackDiv
                style={{
                    opacity: opacity.to(o => 1 - o), 
                    transform,
                    backgroundImage: `url(${image})`,
                }} 
            />
            <StyledFrontDiv 
                style={{
                    opacity,
                    transform,
                    rotateX: '180deg',
                    backgroundImage: `url(${image})`,
                }}
            >
                <StyledFrontShadowBox onClick={()=>goNextPage(menu.url)}>
                    {menu.name}
                </StyledFrontShadowBox>
            </StyledFrontDiv>
        </StyledDiv>
  )
}
