import React from 'react';
import styled from 'styled-components';
import BotIcon from './imgs/botIcon.png';

const StyledDiv = styled.div`
    width: 3vw;
    height: 3vh;
    border-radius: 50%;
    font-size: 1.2rem;
    margin-right: 12.5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1vh;
`;

const StyledImg = styled.img`
    border-radius: 50%;
`

export function BotAvatar() {
    
    return (
        <StyledDiv>
            <StyledImg src={BotIcon} />
        </StyledDiv>
    )

}