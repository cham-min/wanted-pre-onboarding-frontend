import { useCallback, useEffect, useState } from 'react';

import todoAPI from '../api/todoAPI';

const useTodoList = () => {
  const [todoList, setTodoList] = useState([]);

  const getTodoList = useCallback(async () => {
    try {
      const data = await todoAPI.getTodo();
      setTodoList(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getTodoList();
  }, [getTodoList]);

  return { todoList, setTodoList };
};

export default useTodoList;
