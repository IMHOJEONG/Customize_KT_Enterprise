import React from 'react';
import styled from 'styled-components';

const StyledComment = styled.div`
    background-color: #f1f1f1;
    padding: 10px;
    margin-right: 0.7vw;
    border-radius: 5px;
    font-size: 0.8rem;
    color: #585858;
    font-weight: medium;
    position: relative;
    font-family: 'Noto_SansKR', 'Noto_Sans';
`

const StyledArrow = styled.div`
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 8px solid #f1f1f1;
    position: absolute;
    right: -0.5vw;
    top: 1.7vh;
`

export function UserChatMessage(props) {
    
    return (
        <StyledComment {...props}>
            {props.message}
            <StyledArrow />
        </StyledComment>
    )

}