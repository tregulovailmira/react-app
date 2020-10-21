import React from 'react';

const Pagination = ({ setPage, amountOfPages }) => {

  const pagesArray = Array.from(
    { length: amountOfPages },
    (item, index) => index + 1
  );

  return pagesArray.map((btnNum) => (
    <button key={btnNum} onClick={() => setPage(btnNum)}>
      {btnNum}
    </button>
  ));
};

export default Pagination;
