import React from 'react';
import styled from 'styled-components';

function User() {
  return <UserContainer>user</UserContainer>;
}

export default User;

const UserContainer = styled.div`
  width: 375px;
  height: 100vh;
  border: 1px solid #ccc;
  margin: 0 auto;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
