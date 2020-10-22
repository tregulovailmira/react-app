import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CONSTANTS from '../../../CONSTANTS';

class SaveUsersButton extends Component {
  clickHandler = () => {
    const { selectedUsers } = this.props;
    localStorage.setItem(
      CONSTANTS.SELECTED_USERS_KEY,
      JSON.stringify(selectedUsers)
    );
  };

  render() {
    return <button onClick={this.clickHandler}>Save users</button>;
  }
}

SaveUsersButton.propTypes = {
  selectedUsers: PropTypes.array.isRequired,
};

export default SaveUsersButton;
