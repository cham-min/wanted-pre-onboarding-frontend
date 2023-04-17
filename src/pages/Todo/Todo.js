import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import API from '../../api/api';
import TodoItem from '../../components/Todo/TodoItem';
import TodoInput from '../../components/Todo/TodoInput';

const Todo = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('access_token');

  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    if (!token) return navigate('/signin');
  }, [token, navigate]);

  useEffect(() => {
    const getTodoList = async () => {
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
    };

    getTodoList();
  }, [token]);

  return (
    <TodoContainer>
      <TodoWrapper>
        <Logo>
          <h1 style={{ fontSize: '25px' }}>Wanted TODO</h1>
        </Logo>
        <TodoItem todoList={todoList} />
        <TodoInput token={token} setTodoList={setTodoList} />
      </TodoWrapper>
    </TodoContainer>
  );
};

const TodoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const TodoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 22rem;
  padding: 2rem;
  border: 1px solid gray;
  border-radius: 1rem;
`;

const Logo = styled.header`
  display: flex;
  justify-content: center;
  padding: 1rem 0rem;
`;

export default Todo;
