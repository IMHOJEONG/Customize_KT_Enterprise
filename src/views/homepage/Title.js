import React from 'react';
import styled from 'styled-components';
import Logo from './img/logo.png';

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


const StyledImg = styled.img`
    width: 20vw;
    height: 20vh;
    object-fit: contain;
`

export function Title() {

    return (
        <StyledTitleLayout>
          <StyledImg src={Logo}/>
        </StyledTitleLayout>
    )
}


