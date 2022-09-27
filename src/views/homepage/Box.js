import React from 'react';
import styled from 'styled-components';

const DataBox = styled.div`
    
    width: 100vw;
    height: 100vh;
    display: ${props => props.show ? "flex" : "none"};
    transform: ${props => props.show ? "scaleY(1)" : "scaleY(0)"};
    flex-direction: column-reverse;
    background-repeat: no-repeat;
    background-image: url(${props => props.backgroundImg});
    background-size: cover;
    border-radius: 15px;
    transition: all 0.2s linear;
    box-shadow: 5px 5px 5px 5px #dadce0;

    & img {
        transition: all 0.2s linear;
    }
    &:hover {
        transform: translate3d(10px, 10px);
    }
`;

export function Box({ children, ...props }) {    

    return (
        <DataBox {...props}>
            {children}
        </DataBox>
    ) 
} 