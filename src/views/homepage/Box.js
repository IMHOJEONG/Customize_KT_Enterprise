import React from 'react';
import styled from 'styled-components';

const DataBox = styled.div`
    
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    
    border: 5px solid black;
    border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
`

export function Box({ children }) {
    return (
        <DataBox>
            {children}
        </DataBox>
    ) 
} 