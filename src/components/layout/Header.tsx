import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <HeaderContainer>
      <NavLinkWrapper to="">HOME</NavLinkWrapper>
      <NavLinkWrapper to="/user">USER</NavLinkWrapper>
      <NavLinkWrapper to="/admin">ADMIN</NavLinkWrapper>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  padding: 0 24px;
  display: flex;
  align-items: center;
  grid-area: header;
  background: ${({ theme }) => theme.color.black};
`;
const NavLinkWrapper = styled(NavLink)`
  padding: 12px 48px;
  color: #a3a3a3;
  text-decoration: none;
  font-size: 24px;
  font-weight: 300;
  &.active {
    color: #ffffff;
    font-weight: 400;
  }
  &:hover {
    color: #ffffff;
  }
`;
