import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import TodoTemplate from '../../components/Todo/TodoTemplate';
import TodoHead from '../../components/Todo/TodoHead';
import TodoList from '../../components/Todo/TodoList';

const Todo = () => {
  const token = localStorage.getItem('access_token');

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return navigate('/signin');
  }, [token, navigate]);

  return (
    <TodoTemplate>
      <TodoHead />
      <TodoList token={token} />
    </TodoTemplate>
  );
};

export default Todo;
