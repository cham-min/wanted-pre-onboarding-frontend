import React from 'react';
import styled from 'styled-components';

const TodoItem = ({ todoList }) => {
  return (
    <TodoItemContainer>
      {todoList.map(todo => (
        <TodoItemLi key={todo.id}>
          <TodoItemLabel>
            <input type="checkbox" />
            <span>{todo.todo}</span>
          </TodoItemLabel>
        </TodoItemLi>
      ))}
    </TodoItemContainer>
  );
};

const TodoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TodoItemLi = styled.li`
  display: flex;
`;

const TodoItemLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 0.5rem 0rem;
`;

export default TodoItem;
