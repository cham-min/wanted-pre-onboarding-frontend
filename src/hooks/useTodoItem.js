import { useCallback, useState } from 'react';

import todoAPI from '../api/todoAPI';
import useInput from './useInput';

const useTodoItem = (item, todoList, setTodoList) => {
  const { id, todo, isCompleted } = item;

  const [isEditing, setIsEditing] = useState(false);
  const [isChecked, setIsChecked] = useState(isCompleted);

  const [modifyInput, handleModifyInput, setModifyInput] = useInput(todo);

  const checkToggle = () => {
    setIsChecked(prev => !prev);
  };

  const editTodo = useCallback(() => {
    setIsEditing(prev => !prev);
  }, []);

  const cancelEditTodo = useCallback(() => {
    setIsEditing(prev => !prev);
    setModifyInput(todo);
  }, [todo, setModifyInput]);

  const handleUpdateCheck = useCallback(async () => {
    try {
      await todoAPI.updateCheck(id, todo, isChecked);
    } catch (error) {
      console.error(error);
    }
  }, [id, todo, isChecked]);

  const handleUpdateTodo = useCallback(async () => {
    try {
      await todoAPI.updateTodo(id, modifyInput, isChecked);
      const nextTodo = todoList.map(item => ({
        ...item,
        todo: item.id === id ? modifyInput : item.todo,
      }));
      setTodoList(nextTodo);
      setIsEditing(prev => !prev);
    } catch (error) {
      console.error(error);
    }
  }, [id, isChecked, modifyInput, todoList, setTodoList]);

  const handleDeleteTodo = useCallback(async () => {
    try {
      await todoAPI.deleteTodo(id);
      setTodoList(todoList.filter(todo => todo.id !== id));
    } catch (error) {
      console.error(error);
    }
  }, [id, todoList, setTodoList]);

  return {
    isEditing,
    isChecked,
    modifyInput,
    handleModifyInput,
    checkToggle,
    editTodo,
    cancelEditTodo,
    handleUpdateCheck,
    handleUpdateTodo,
    handleDeleteTodo,
  };
};

export default useTodoItem;
