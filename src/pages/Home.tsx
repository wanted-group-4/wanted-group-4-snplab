import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Home() {
  return (
    <HomeContainer>
      <StyledLink to="user">User</StyledLink>
      <StyledLink to="admin">Admin</StyledLink>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  width: 30vw;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  margin: 10% auto;
  padding: 20px 20px 0;
`;

const StyledLink = styled(Link)`
  width: 100%;
  height: 70px;
  background: ${({ theme }) => theme.color.grey_03};
  border-radius: 10px;
  margin: 0 auto 20px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};
  font-weight: 700;
  text-align: center;
  padding: 15px;
  font-size: 24px;
`;
