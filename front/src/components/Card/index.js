import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #a1beed;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 30px;
  display: flex;
  flex-flow: column wrap;
  text-align: center;
  transition: 0.25s ease-in-out;
  box-sizing: border-box;
  cursor: pointer;
  :hover {
    transition: 0.25s ease-in-out;
    box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Index = function ({ task, children, onClick }) {
  return <Card onClick={() => onClick(task)} id={task.id}>{children}</Card>;
};

export default Index;
