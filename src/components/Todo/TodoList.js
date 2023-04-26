import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import API from '../../api/api';
import TodoItem from '../../components/Todo/TodoItem';
import TodoInput from '../../components/Todo/TodoInput';

const TodoList = ({ token }) => {
  const [todoList, setTodoList] = useState([]);

  // READ
  const getTodoList = useCallback(async () => {
    try {
      const res = await axios.get(`${API.GETTODO}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTodoList(res.data);
    } catch (error) {
      console.error(error);
    }
  }, [token]);

  useEffect(() => {
    getTodoList();
  }, [getTodoList]);

  return (
    <TodoListContainer>
      <ul>
        {todoList.map(item => (
          <TodoItem
            key={item.id}
            token={token}
            item={item}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        ))}
      </ul>
      <TodoInput token={token} setTodoList={setTodoList} />
    </TodoListContainer>
  );
};

const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  padding: 2rem;
  border: 1.5px solid #658dc6;
  border-radius: 1rem;
  background-color: yellow;
`;

export default TodoList;
