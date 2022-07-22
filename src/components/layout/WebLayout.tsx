import React from 'react';
import { Outlet } from 'react-router';
import styled from 'styled-components';

export default function WebLayout() {
  return (
    <WebLayoutContainer>
      <Header />
      <SideBar />
      <Main>
        <Outlet />
      </Main>
    </WebLayoutContainer>
  );
}

const WebLayoutContainer = styled.div`
  display: grid;
  position: fixed;
  width: 100%;
  height: 100%;
  grid-template-rows: 70px 1fr;
  grid-template-columns: 240px 1fr;
  grid-template-areas:
    'header header '
    'sidebar main ';
  @media (max-width: 1260px) {
    posidtion: absolute;
  }
`;

const Header = styled.div`
  grid-area: header;
  background: ${({ theme }) => theme.color.black};
`;
const SideBar = styled.div`
  grid-area: sidebar;
  background: ${({ theme }) => theme.color.grey_04};
`;
const Main = styled.main`
  grid-area: main;
  padding: 40px;
`;
