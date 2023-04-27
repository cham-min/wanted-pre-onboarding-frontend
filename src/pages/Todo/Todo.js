import React from 'react';

import TodoTemplate from '../../components/Todo/TodoTemplate';
import TodoHead from '../../components/Todo/TodoHead';
import TodoList from '../../components/Todo/TodoList';

const Todo = () => {
  const token = localStorage.getItem('access_token');

  return (
    <TodoTemplate>
      <TodoHead />
      <TodoList token={token} />
    </TodoTemplate>
  );
};

export default Todo;
