import React, { Component } from 'react';
import { loadPosts, loadUsers } from './api';
import './App.css';
import UserListContainer from './components/UserListContainer';

class App extends Component {
  render() {
    return (
      <>
        {/* <DataLoader getData={loadPosts} render={} /> */}
        {/* <DataLoader getData={loadUsers}>
          {(users) => {
            return <div>{JSON.stringify(users)}</div>;
          }}
        </DataLoader> */}

        
        <UserListContainer />
        </>
    );
    // const test = React.createElement(TestComponent, {}, 'etestet', 'testse');
    // console.log(test);
    // return test
  }
}

export default App;
