import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import TodoList from '../../components/Todo/TodoList';

const Todo = () => {
  const token = localStorage.getItem('access_token');

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return navigate('/signin');
  }, [token, navigate]);

  return (
    <TodoContainer>
      <Logo>
        <h1>Wanted TODO</h1>
      </Logo>
      <TodoList token={token} />
    </TodoContainer>
  );
};

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  padding: 1rem 0rem;
  font-size: 25px;
`;

export default Todo;
