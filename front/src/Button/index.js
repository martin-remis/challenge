import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  :hover {
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  }
  margin: 10px;
  padding: 5px;
  
`;

const Index = function ({ children, onClick, className }) {
  return <Button className={className} onClick={onClick}>{children}</Button>;
};

export default Index;
