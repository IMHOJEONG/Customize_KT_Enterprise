import React from 'react';
import styled from 'styled-components';

const StyledButtonLayout = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center;
    padding: 1em;
`
const StyledButton = styled.button`
    font-size: 1.5em;
    border-radius: 50%;
    
    opacity: .8;
    background-image: background: linear-gradient(99.6deg, rgb(112, 128, 152) 10.6%, rgb(242, 227, 234) 32.9%, rgb(234, 202, 213) 52.7%, rgb(220, 227, 239) 72.8%, rgb(185, 205, 227) 81.1%, rgb(154, 180, 212) 102.4%);;
    border-radius: 8px;
    border-style: none;
    box-sizing: border-box;
    color: black;
    flex-shrink: 0;
    font-family: "Inter UI","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
    font-size: 16px;
    font-weight: 500;
    height: 4rem;
    padding: 0 1.6rem;
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

    @media (min-width: 768px) {
        & {
          padding: 0 2.6rem;
        }
      }
    
`;

export function Button({ children, ...props }) {
    
    return (
        <StyledButtonLayout {...props}>
            <StyledButton>
                { children }
            </StyledButton>
        </StyledButtonLayout>
    )
}