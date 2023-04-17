import axios from 'axios';
import React, { useCallback } from 'react';
import styled from 'styled-components';

import API from '../../api/api';
import useInput from '../../hooks/useInput';

const TodoInput = ({ token, setTodoList }) => {
  const [todo, onChangeTodo, setTodo] = useInput('');

  const addTodo = useCallback(
    async e => {
      try {
        const res = await axios.post(
          `${API.ADDTODO}`,
          { todo: todo },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );

        setTodoList(prev => [...prev, res.data]);
        setTodo('');
      } catch (error) {
        console.error(error);
      }
    },
    [token, todo, setTodo, setTodoList]
  );

  return (
    <InputContainer>
      <Input
        type="text"
        value={todo}
        onChange={onChangeTodo}
        data-testid="new-todo-input"
      />
      <AddButton
        type="submit"
        onClick={addTodo}
        data-testid="new-todo-add-button"
      >
        추가
      </AddButton>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  width: 13rem;
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 1px solid black;
  background-color: #658dc6;
`;

export default TodoInput;
