import React from 'react';
import styled from 'styled-components';

import useTodoInput from '../../hooks/useTodoInput';

const TodoInput = ({ setTodoList }) => {
  const { todoInput, handleTodoInput, addTodo } = useTodoInput(setTodoList);

  return (
    <InputContainer>
      <Input
        type="text"
        value={todoInput}
        onChange={handleTodoInput}
        placeholder="할 일을 입력해주세요."
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
  width: 70%;
`;

const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 2rem;
  border: 1px solid black;
  background-color: #658dc6;
`;

export default TodoInput;
