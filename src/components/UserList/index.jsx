import React, { Component } from 'react';
import _ from 'lodash';
import UserCard from './UserCard';
import styles from './UserList.module.css';
import { loadUsers } from '../../api';
import SelectedUserList from './SelectedUserList';
import { toggleItemInArray } from '../../utils';
import CONSTANTS from '../../CONSTANTS';
import DataLoader from '../DataLoader';
import Pagination from '../Pagination';
import SaveUsersButton from './SaveUsersButton';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // users: [],
      selectedUsers: [],
      currentPage: 1,
    };
  }

  async componentDidMount() {

    const parsedUsers = JSON.parse(
      localStorage.getItem(CONSTANTS.SELECTED_USERS_KEY)
    );
    console.log(parsedUsers);
    this.setState({
      selectedUsers: parsedUsers || [],
    });
  }

  setPage = (currentPage) => {
    this.setState({ currentPage });
  };

  handleSelect = (newUser) => {
    const { selectedUsers } = this.state;

    const foundUser = _.find(selectedUsers, newUser);

    this.setState({
      selectedUsers: toggleItemInArray(selectedUsers, foundUser || newUser),
    });
  };

  renderUsers = (users) => {
    const { selectedUsers } = this.state;
    const userListStyles = {
      container: styles.userCardMargin,
    };

    return users.map((user) => (
      <UserCard
        key={user.login.uuid}
        isSelected={Boolean(
          selectedUsers.find(
            (currentUser) => currentUser.login.uuid === user.login.uuid
          )
        )}
        handleSelect={this.handleSelect}
        user={user}
      />
    ));
  };

  render() {
    const { selectedUsers, currentPage } = this.state;

    return (
      <div>
        {<Pagination setPage={this.setPage} amountOfPages={10} />}
        <SaveUsersButton selectedUsers={selectedUsers} />
        <div className={styles.listContainer}>
          <section className={styles.userList}>
            <h1>User List</h1>
            {
              <DataLoader getData={loadUsers} page={currentPage}>
                {(users) => {
                  return <div>{this.renderUsers(users)}</div>;
                }}
              </DataLoader>
            }
          </section>
          <section className={styles.userList}>
            <h1>Selected Users List</h1>
            <SelectedUserList
              handleSelect={this.handleSelect}
              users={selectedUsers}
            />
          </section>
        </div>
      </div>
    );
  }
}

export default UserList;
