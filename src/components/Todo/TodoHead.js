import React from 'react';
import styled from 'styled-components';

const TodoHead = () => {
  return (
    <Logo>
      <h1>Wanted TODO</h1>
      <div className="task">할일 {}개 남음</div>
    </Logo>
  );
};

const Logo = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;

  h1 {
    font-size: 25px;
    font-weight: bold;
  }

  .task {
    margin-top: 0.5rem;
    color: #658dc6;
  }
`;

export default TodoHead;
