import React from 'react';
import styled from 'styled-components';
import LogoWebp from './img/logo.webp';
const StyledTitleLayout = styled.div`
    width: 100vw;
    height: 10vh;
    margin: 5vh 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    z-index: ${props => props.show ? 0 : 2};
    
`;

const StyledPicture = styled.picture`
    width: 20vw;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    image-rendering: -webkit-optimize-contrast;
    transform: translateZ(0);
    backface-visibility: hidden;
`

const StyledImg = styled.img`
    object-fit: fill;
`;

export function Title({ show }) {

    return (
        <StyledTitleLayout show={show}>
          <StyledPicture>
            {show ?
                <>
                </>
                    :
                <>
                    <source srcSet={LogoWebp} type="image/webp" />
                    <StyledImg src={LogoWebp} alt="logo"/>
                </>  
            }
          </StyledPicture>
        </StyledTitleLayout>
    )
}


