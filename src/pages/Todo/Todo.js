import React from 'react';

import TodoTemplate from '../../components/Todo/TodoTemplate';
import TodoHead from '../../components/Todo/TodoHead';
import TodoList from '../../components/Todo/TodoList';

const Todo = () => {
  return (
    <TodoTemplate>
      <TodoHead />
      <TodoList />
    </TodoTemplate>
  );
};

export default Todo;
