import customAxios from '../lib/customAxios';

const todoAPI = () => {
  const getTodo = async () => {
    const { data } = await customAxios.get('/todos');
    return data;
  };

  const createTodo = async todo => {
    const { data } = await customAxios.post(`/todos`, {
      todo: todo,
    });
    return data;
  };

  const updateCheck = async (id, todo, isChecked) => {
    const { data } = await customAxios.put(`/todos/${id}`, {
      todo: todo,
      isCompleted: !isChecked,
    });
    return data;
  };

  const updateTodo = async (id, modifyInput, isChecked) => {
    const { data } = await customAxios.put(`/todos/${id}`, {
      todo: modifyInput,
      isCompleted: isChecked,
    });
    return data;
  };

  const deleteTodo = async id => {
    const { data } = await customAxios.delete(`/todos/${id}`);
    return data;
  };

  return { getTodo, createTodo, updateCheck, updateTodo, deleteTodo };
};

export default todoAPI();
