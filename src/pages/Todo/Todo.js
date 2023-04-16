import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Todo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('access_token');

    if (!token) return navigate('/signin');
  }, [navigate]);

  return <div>Todo Page</div>;
};

export default Todo;
