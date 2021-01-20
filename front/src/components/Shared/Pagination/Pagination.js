import React from 'react';

import ReactPaginate from 'react-paginate';

const Pagination = (props) => {
  const {
    pageCount = 1,
    marginPagesDisplayed = 2,
    pageRangeDisplayed = 3,
    handlePagingOnclick = () => {},
  } = props;
  
  return (
    <div className="pagination-block">
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={marginPagesDisplayed}
        pageRangeDisplayed={pageRangeDisplayed}
        onPageChange={handlePagingOnclick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </div>
  );
}

export default Pagination;
