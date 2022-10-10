import React from 'react';
import styled from 'styled-components';
//     width: 100px;
//     height: 100px;
//     background: 

const StyledComment = styled.div`

    background-color: #2898ec;
    padding: 10px;
    border-radius: 5px;
    font-size: 0.8rem;
    color: #fff;
    position: relative;
    width: 13vw;
    font-family: 'Noto_SansKR', 'Noto_Sans';

`

const StyledArrow = styled.div`
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-right: 8px solid #2898ec;
    position: absolute;
    top: 1.5vh;
    left: -0.5vw;

`


export function BotChatMessage(props) {
    console.log(props);
    return (
        <StyledComment {...props}>
            {props.message}
            <StyledArrow />
        </StyledComment>
    )

}