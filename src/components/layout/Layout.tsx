import React from 'react';
import styled from 'styled-components';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <LayoutContainer>
      <Header />
      <SideBar />
      <Main>{children}</Main>
    </LayoutContainer>
  );
}

export default Layout;

const LayoutContainer = styled.div`
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
