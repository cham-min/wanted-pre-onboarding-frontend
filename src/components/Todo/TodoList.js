import React from 'react';
import styled from 'styled-components';

import TodoItem from '../../components/Todo/TodoItem';
import TodoInput from '../../components/Todo/TodoInput';
import useTodo from '../../hooks/\buseTodo';

const TodoList = ({ token }) => {
  const { todoList, setTodoList } = useTodo();

  return (
    <TodoListContainer>
      <ul>
        {todoList.map(todo => (
          <TodoItem
            key={todo.id}
            item={todo}
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
