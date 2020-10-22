import React from 'react';
import { createArrayFromTo } from '../../utils';

const Pagination = ({ setPage, amountOfPages }) => {
  return createArrayFromTo(1, amountOfPages).map((btnNum) => (
    <button key={btnNum} onClick={() => setPage(btnNum)}>
      {btnNum}
    </button>
  ));
};

export default Pagination;
