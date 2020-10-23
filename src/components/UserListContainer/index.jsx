import React, { Component } from 'react';
import _ from 'lodash';
import { toggleItemInArray } from '../../utils';
import CONSTANTS from '../../CONSTANTS';
import { loadUsers } from '../../api';
import DataLoader from '../DataLoader';
import Pagination from '../Pagination';
import UserList from './UserList';
import SaveUsersButton from './SaveUsersButton';
import styles from './UserListContainer.module.css';

class UserListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUsers: [],
      currentPage: 1,
    };
  }

  async componentDidMount() {
    const parsedUsers = JSON.parse(
      localStorage.getItem(CONSTANTS.SELECTED_USERS_KEY)
    );
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

  render() {
    const { selectedUsers, currentPage } = this.state;

    return (
      <div className={styles.userListWrapper}>
        <div className={styles.controlsContainer}>
          <Pagination
            currentPage={currentPage}
            setPage={this.setPage}
            amountOfPages={CONSTANTS.AMOUNT_OF_PAGES}
          />
          <SaveUsersButton selectedUsers={selectedUsers} />
        </div>

        <div className={styles.listContainer}>
          <section className={styles.userList}>
            <h1>User List</h1>
            <DataLoader
              getData={loadUsers}
              page={currentPage}
              amountOfUsers={CONSTANTS.RESULTS_PER_PAGE}
            >
              {(users) => (
                <UserList
                  handleSelect={this.handleSelect}
                  users={users}
                  selectedUsers={selectedUsers}
                />
              )}
            </DataLoader>
          </section>
          <section className={styles.userList}>
            <h1>Selected Users List</h1>
            <UserList handleSelect={this.handleSelect} users={selectedUsers} />
          </section>
        </div>
      </div>
    );
  }
}

export default UserListContainer;
