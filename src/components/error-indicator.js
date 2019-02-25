import React from 'react';
import styled from 'styled-components';

const ErrorText = styled.h2`
    color: #000;
    font-size: 28px;
`

const ErrorIndicator = () => {
    return (
        <ErrorText>Something has gone terribly wrong</ErrorText>
    );
}

export default ErrorIndicator;