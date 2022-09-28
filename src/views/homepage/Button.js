import React from 'react';
import styled from 'styled-components';

const StyledButtonLayout = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center;
    padding: 1em;
`
const StyledButton = styled.button`
    font-size: 1vw;
    border-radius: 25px;
    opacity: .8;
    background: #21130d;
     
    border-style: none;
    box-sizing: border-box;
    color: white;
    flex-shrink: 0;
    font-family: ${props => props.isKR ? "Noto_SansKR_Bold": "Noto_Sans_Bold"};
    font-weight: bold;
    width: 11vw;
    padding: 2vh 1vw;
    
    text-align: center;
    text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
    transition: all .5s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

    &:hover {
        opacity: 1;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
        transition-duration: .1s;
    }

    // @media (min-width: 768px) {
    //     & {
    //       padding: 0 2.6rem;
    //     }
    //   }
    
`;

export function Button({ children, onClick, ...props }) {
    
    return (
        <StyledButtonLayout {...props}>
            <StyledButton onClick={onClick}>
                { children }
            </StyledButton>
        </StyledButtonLayout>
    )
}