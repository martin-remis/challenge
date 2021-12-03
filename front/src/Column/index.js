import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../utils/breakpoints";
import { desktopColumns, tabletColumns } from "../utils/columnSizes";

const Column = styled.div`    
  grid-column-end: -1;
  ${mediaQueries[0]} {
      ${tabletColumns()};
  }
  ${mediaQueries[1]} {
      ${desktopColumns()};
  }
  margin: 0;
`;

const Index = (props) => {
  return <Column {...props}>{props.children}</Column>;
};

export default Index;