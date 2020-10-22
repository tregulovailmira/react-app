import React, { Component } from 'react';
import Error from '../Error';
import Spinner from '../Spinner';
import PropTypes from 'prop-types';

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
    const { getData, page } = this.props;

    this.setState({
      isFetching: true,
    });
    try {
      const data = await getData(3, page);
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

  renderData = () => {
    const { data, isFetching, error } = this.state;

    const { children } = this.props;

    if (error) {
      return <Error />;
    }
    if (isFetching) {
      return <Spinner />;
    }
    return children(data.results);
  };

  render() {
    return <>{this.renderData()}</>;
  }
}

DataLoader.propTypes = {
  getData: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};

export default DataLoader;
