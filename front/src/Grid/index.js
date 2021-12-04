import React from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../utils/breakpoints';

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    max-width: 1200px;
    width: 100%;
    ${mediaQueries[0]} {
        grid-template-columns: repeat(6, 1fr);
    }
    ${mediaQueries[1]} {
        grid-template-columns: repeat(12, 1fr);
    }
    grid-column-gap: 40px;
`;
const Index = function (props) {
  return <Grid>{props.children}</Grid>;
};

export default Index;
