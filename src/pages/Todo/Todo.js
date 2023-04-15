import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Todo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('acces_token');

    if (!token) navigate('/signin');
  }, [navigate]);

  return <div>Todo Page</div>;
};

export default Todo;
