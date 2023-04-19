import React, { useCallback, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import API from '../../api/api';
import useInput from '../../hooks/useInput';

const TodoItem = ({ token, item, todoList, setTodoList }) => {
  const { id, todo, isCompleted } = item;

  const [isChecked, setIsChecked] = useState(isCompleted);
  const [isEditing, setIsEditing] = useState(false);
  const [input, onChangeInput, setInput] = useInput(todo);

  const checkToggle = useCallback(() => {
    setIsChecked(prev => !prev);
  }, []);

  const editTodo = useCallback(() => {
    setIsEditing(prev => !prev);
  }, []);

  const cancelEditTodo = useCallback(() => {
    setIsEditing(prev => !prev);
    setInput(todo);
  }, [setInput, todo]);

  // UPDATE INPUT
  const updateTodo = useCallback(async () => {
    try {
      await axios.put(
        `${API.UPDATETODO}/${id}`,
        {
          todo: input,
          isCompleted: isChecked,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      const nextTodo = todoList.map(item => ({
        ...item,
        todo: item.id === id ? input : item.todo,
      }));
      setTodoList(nextTodo);
      setIsEditing(prev => !prev);
    } catch (error) {
      console.error(error);
    }
  }, [token, id, input, isChecked, todoList, setTodoList]);

  // UPDATE CHECKBOX
  const updateCheck = useCallback(async () => {
    try {
      await axios.put(
        `${API.UPDATETODO}/${id}`,
        {
          todo: todo,
          isCompleted: !isChecked,
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
  }, [token, id, todo, isChecked]);

  // DELETE
  const deleteTodo = useCallback(async () => {
    try {
      await axios.delete(`${API.DELETETODO}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTodoList(todoList.filter(todo => todo.id !== id));
    } catch (error) {
      console.error(error);
    }
  }, [token, id, todoList, setTodoList]);

  return (
    <TodoItemLi>
      <TodoItemLabel>
        <input
          type="checkbox"
          onClick={checkToggle}
          onChange={updateCheck}
          checked={isChecked}
        />
        {isEditing ? (
          <input
            type="text"
            value={input}
            onChange={onChangeInput}
            data-testid="modify-input"
          />
        ) : (
          <span>{input}</span>
        )}
      </TodoItemLabel>
      {isEditing ? (
        <>
          <TodoItemButton data-testid="submit-button" onClick={updateTodo}>
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
          <TodoItemButton data-testid="delete-button" onClick={deleteTodo}>
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
