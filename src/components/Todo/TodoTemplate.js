import React from 'react';
import styled from 'styled-components';

const TodoTemplate = ({ children }) => {
  return <TodoTemplateContainer>{children}</TodoTemplateContainer>;
};

const TodoTemplateContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default TodoTemplate;
