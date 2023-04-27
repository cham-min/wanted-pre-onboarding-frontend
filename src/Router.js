import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom';

import Signup from './pages/Auth/Signup';
import Signin from './pages/Auth/Signin';
import Todo from './pages/Todo/Todo';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Navigate to="/signin" />} />
      <Route path="signup" element={<Signup />} />
      <Route path="signin" element={<Signin />} />
      <Route path="todo" element={<Todo />} />
    </Route>
  )
);

export default Router;
