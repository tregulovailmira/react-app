import React, { Component } from 'react';
import UserCard from './UserCard';
import { loadUsers } from '../../api';
import styles from './UserList.module.css';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isFetching: false,
      error: null
    };
  }

  async componentDidMount() {
    this.setState({
      isFetching: true,
    });
    try {
      const users = await loadUsers();
      this.setState({
        users: users.results.map((user) => ({ ...user, isSelected: false })),
        isFetching: false,
      });
    } catch (e) {
      this.setState({
        error: e,
        isFetching: false,
      });
    }
  }

  handleSelect = (id) => {
    const { users } = this.state;

    this.setState({
      users: users.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            isSelected: !user.isSelected,
          };
        }
        return { ...user };
      }),
    });
  };

  renderUsers = () => {
    const { users } = this.state;
    return users.map((user) => (
      <UserCard
        key={user.login.uuid}
        handleSelect={this.handleSelect}
        {...user}
      />
    ));
  };

  renderSelectedUsers = () => {
    const { users } = this.state;
    return users
      .filter(({ isSelected }) => isSelected)
      .map(
        (user) => (
          (
            <UserCard
              key={user.login.uuid}
              noClick
              {...user}
            />
          )
        )
      );
  };

  render() {
    const { isFetching, error, isSelected } = this.state;

    return (
      <div className={styles.userListWrapper}> 
        <section>
          <h1>User List</h1>
          {error && <Error error={error} />}
          {isFetching ? <Spinner /> : this.renderUsers()}
        </section>
        <section>
          <h1>Selected Users</h1>
          {this.renderSelectedUsers()}
        </section>
      </div>
    );
  }
}

function Error(props) {
  return <div>error</div>;
}

function Spinner(props) {
  return <div>LOADING...</div>;
}

export default UserList;
