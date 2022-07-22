import React from 'react';
import { Route, Routes } from 'react-router';

import Admin from '@pages/Admin';
import Home from '@pages/Home';
import User from '@pages/User';
import MobileLayout from '@components/layout/MobileLayout';
import WebLayout from '@components/layout/WebLayout';

export default function Router() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route element={<MobileLayout />}>
        <Route path="user" element={<User />} />
      </Route>
      <Route element={<WebLayout />}>
        <Route path="admin" element={<Admin />} />
      </Route>
    </Routes>
  );
}
