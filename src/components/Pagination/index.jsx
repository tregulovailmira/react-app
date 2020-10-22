import React from 'react';
import PropTypes from 'prop-types';
import { createArrayFromTo } from '../../utils';

const Pagination = ({ setPage, amountOfPages = 20 }) => {
  return createArrayFromTo(1, amountOfPages).map((btnNum) => (
    <button key={btnNum} onClick={() => setPage(btnNum)}>
      {btnNum}
    </button>
  ));
};

Pagination.propTypes = {
  setPage: PropTypes.func.isRequired,
  amountOfPages: PropTypes.number,
}

export default Pagination;
