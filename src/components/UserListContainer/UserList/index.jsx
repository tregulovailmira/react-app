import React from 'react';
import PropTypes from 'prop-types';
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

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  handleSelect: PropTypes.func.isRequired,
  selectedUsers: PropTypes.array,
};

export default UserList;
