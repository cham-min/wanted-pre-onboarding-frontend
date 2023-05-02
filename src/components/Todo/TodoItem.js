import React from 'react';
import styled from 'styled-components';

import useTodoItem from '../../hooks/\buseTodoItem';

const TodoItem = ({ item, todoList, setTodoList }) => {
  const {
    isEditing,
    isChecked,
    modifyInput,
    handleModifyInput,
    checkToggle,
    editTodo,
    cancelEditTodo,
    handleUpdateCheck,
    handleUpdateTodo,
    handleDeleteTodo,
  } = useTodoItem(item, todoList, setTodoList);

  return (
    <TodoItemLi>
      <TodoItemLabel>
        <input
          type="checkbox"
          onClick={checkToggle}
          onChange={handleUpdateCheck}
          checked={isChecked}
        />
        {isEditing ? (
          <input
            type="text"
            value={modifyInput}
            onChange={handleModifyInput}
            data-testid="modify-input"
          />
        ) : (
          <span>{modifyInput}</span>
        )}
      </TodoItemLabel>
      {isEditing ? (
        <>
          <TodoItemButton
            data-testid="submit-button"
            onClick={handleUpdateTodo}
          >
            제출
          </TodoItemButton>
          <TodoItemButton onClick={cancelEditTodo} data-testid="cancel-button">
            취소
          </TodoItemButton>
        </>
      ) : (
        <>
          <TodoItemButton data-testid="modify-button" onClick={editTodo}>
            수정
          </TodoItemButton>
          <TodoItemButton
            data-testid="delete-button"
            onClick={handleDeleteTodo}
          >
            삭제
          </TodoItemButton>
        </>
      )}
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
