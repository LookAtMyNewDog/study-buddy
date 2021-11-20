import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UsersList.styles';

class UsersList extends React.Component {
  render() {
    return (
      <Wrapper>
        <ul>
          {users.map((userData) => (
            <UsersListItem userData={userData} />
          ))}
        </ul>
      </Wrapper>
    );
  }
}

export default UsersList;
