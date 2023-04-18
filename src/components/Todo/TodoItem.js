import React, { useCallback, useEffect, useState } from 'react';
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
