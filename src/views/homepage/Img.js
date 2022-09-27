import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
    width: inherit;
    height: 90vh;
`

export function Img({ src, ...props }) {
    return (
        <StyledImg {...props}>
        </StyledImg>
    )
}