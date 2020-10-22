import React from 'react';
import UserCard from '../UserCard';
import styles from './UserList.module.css';

const UserList = (props) => {
  const { users, handleSelect, selectedUsers = [] } = props;
  const userListStyles = {
    container: styles.userCardMargin,
  };

  return users.map((user) => (
    <UserCard
      stylesClasses={userListStyles}
      user={user}
      key={user.login.uuid}
      handleSelect={handleSelect}
      isSelected={Boolean(
        selectedUsers.find(
          (currentUser) => currentUser.login.uuid === user.login.uuid
        )
      )}
    />
  ));
};

export default UserList;
