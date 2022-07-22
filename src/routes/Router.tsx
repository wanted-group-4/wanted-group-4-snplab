import React from 'react';
import { Route, Routes } from 'react-router';

import Admin from 'pages/Admin';
import Home from 'pages/Home';
import User from 'pages/User';

function Router() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="user" element={<User />} />
      <Route path="admin" element={<Admin />} />
    </Routes>
  );
}

export default Router;
