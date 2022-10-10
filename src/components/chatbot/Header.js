import styled from 'styled-components';
import React from 'react';
import KtalkImg from './imgs/ktalk.png'

const StyledDiv = styled.div`
    width: 20vw;
    height: 8vh;
    background: #0AA2B9;
    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
        width: 6vw;
        height: 10vh;
        object-fit: cover;
    }
`

export function Header() {
    return (
        <StyledDiv>
            <img src={KtalkImg} alt={"ktalk"}/>
        </StyledDiv>
    )
}