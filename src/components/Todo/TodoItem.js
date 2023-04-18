import React from 'react';
import styled from 'styled-components';

const TodoItem = ({ todo }) => {
  return (
    <TodoItemLi>
      <TodoItemLabel>
        <input type="checkbox" />
        <span>{todo.todo}</span>
      </TodoItemLabel>
    </TodoItemLi>
  );
};

const TodoItemLi = styled.li`
  display: flex;
  width: 100%;
  word-break: break-all;
`;

const TodoItemLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 0.7rem 0rem;
`;

export default TodoItem;
