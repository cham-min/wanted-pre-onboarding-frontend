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
import AuthHOC from './components/HOC/AuthHOC';

const AuthSignup = AuthHOC(Signup, false);
const AuthSignin = AuthHOC(Signin, false);
const AuthTodo = AuthHOC(Todo, true);

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Navigate to="/signin" />} />
      <Route path="signup" element={<AuthSignup />} />
      <Route path="signin" element={<AuthSignin />} />
      <Route path="todo" element={<AuthTodo />} />
    </Route>
  )
);

export default Router;
