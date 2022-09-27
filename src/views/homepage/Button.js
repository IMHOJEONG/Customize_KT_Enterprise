import React from 'react';
import styled from 'styled-components';

const StyledButtonLayout = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center;
`
const StyledButton = styled.button`
    width: 10vw;
    height: 10vw;
    border-radius: 50%;

    &:hover {
        cursor: pointer;
    }
`;

export function Button({ children }) {
    
    return (
        <StyledButtonLayout>
            <StyledButton>
                { children }
            </StyledButton>
        </StyledButtonLayout>
    )
}