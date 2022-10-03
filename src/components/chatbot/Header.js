import styled from 'styled-components';
import React from 'react';


const StyledDiv = styled.div`
    width: 20vw;
    height: 10vh;
    background: rgb(55, 107, 126);
    display: flex;
    justify-content: center;
    align-items: center;
`

export function Header() {
    return (
        <StyledDiv>
            마비서
        </StyledDiv>
    )
}