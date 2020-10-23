import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { createArrayFromTo } from '../../utils';
import styles from './Pagination.module.css';

const Pagination = (props) => {
  const { setPage, amountOfPages = 20, currentPage } = props;
  const paginationBtn = createArrayFromTo(1, amountOfPages).map((btnNum) => (
    <button
      key={btnNum}
      onClick={() => setPage(btnNum)}
      className={classNames(styles.pagination, {
        [styles.currentPage]: currentPage === btnNum,
        [styles.notCurrentPage]: currentPage !== btnNum,
      })}
      disabled={currentPage === btnNum ? true : false}
    >
      {btnNum}
    </button>
  ));
  return paginationBtn;
};

Pagination.propTypes = {
  setPage: PropTypes.func.isRequired,
  amountOfPages: PropTypes.number,
};

export default Pagination;
