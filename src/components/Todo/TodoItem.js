import React, { useCallback, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import API from '../../api/api';

const TodoItem = ({ token, item }) => {
  const { id, todo, isCompleted } = item;

  const [isChecked, setIsChecked] = useState(isCompleted);

  const updateTodo = useCallback(
    async e => {
      try {
        await axios.put(
          `${API.UPDATETODO}/${id}`,
          {
            todo: todo,
            isCompleted: e.target.checked,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
      } catch (error) {
        console.error(error);
      }
    },
    [token, id, todo]
  );

  const toggle = useCallback(() => {
    setIsChecked(prev => !prev);
  }, []);

  return (
    <TodoItemLi>
      <TodoItemLabel>
        <input
          type="checkbox"
          onClick={toggle}
          onChange={updateTodo}
          checked={isChecked}
        />
        <span>{todo}</span>
      </TodoItemLabel>
      <TodoItemButton data-testid="modify-button">수정</TodoItemButton>
      <TodoItemButton data-testid="delete-button">삭제</TodoItemButton>
    </TodoItemLi>
  );
};

const TodoItemLi = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.7rem 0rem;
  word-break: break-all;
`;

const TodoItemLabel = styled.label`
  display: flex;
  align-items: center;
  width: 70%;
`;

const TodoItemButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 2rem;
  border: none;
  margin-left: 1rem;
`;

export default TodoItem;
