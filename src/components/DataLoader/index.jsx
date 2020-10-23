import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Error from '../Error';
import Spinner from '../Spinner';

class DataLoader extends Component {
  state = {
    data: {},
    error: null,
    isFetching: true,
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.props;
    if (page !== prevProps.page) {
      this.fetchData();
    }
  }

  fetchData = async () => {
    const { getData, page, amountOfUsers } = this.props;

    this.setState({
      isFetching: true,
    });
    try {
      const data = await getData(amountOfUsers, page);
      this.setState({
        data,
        isFetching: false,
        error: null,
      });
    } catch (error) {
      this.setState({
        error,
        isFetching: false,
      });
    }
  };

  render() {
    const { data, isFetching, error } = this.state;

    const { children } = this.props;

    if (error) {
      return <Error />;
    }
    if (isFetching) {
      return <Spinner />;
    }
    return children(data.results);
  }
}

DataLoader.propTypes = {
  getData: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  amountOfUsers: PropTypes.number.isRequired,
  children: PropTypes.func.isRequired,
};

export default DataLoader;
