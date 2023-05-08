import { useCallback } from 'react';

import useInput from './useInput';
import todoAPI from '../api/todoAPI';

const useTodoInput = setTodoList => {
  const [todoInput, handleTodoInput, setTodoInput] = useInput('');

  const addTodo = useCallback(async () => {
    try {
      const res = await todoAPI.createTodo(todoInput);
      setTodoList(prev => [...prev, res]);
      setTodoInput('');
    } catch (error) {
      console.error(error);
    }
  }, [setTodoList, todoInput, setTodoInput]);

  return {
    todoInput,
    handleTodoInput,
    addTodo,
  };
};

export default useTodoInput;
