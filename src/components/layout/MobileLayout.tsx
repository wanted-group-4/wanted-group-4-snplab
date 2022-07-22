import React from 'react';
import { Outlet } from 'react-router';
import styled from 'styled-components';

export default function MobileLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

const Layout = styled.div`
  width: 375px;
  height: 100vh;
  border: 1px solid #ccc;
  margin: 0 auto;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
