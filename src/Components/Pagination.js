import React from 'react';

export const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const numberOfPages = pageNumbers.length;
  console.log("sssss", totalPosts)
  return (
    <nav>
      <ul className="pagination">
        <li className={`page-item ${currentPage <= 1 && 'disabled'}`}>
          <span className="page-link" onClick={(e) => paginate(e, currentPage - 1)}>
            Previous
          </span>
        </li>

        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <span
              onClick={(e) => paginate(e, number)}
              className={`page-link ${currentPage === number ? 'active' : ''}`}
            >
              {number}
            </span>
          </li>
        ))}
        <li
          className={`page-item ${
            currentPage >= numberOfPages ? 'disabled' : ''
          }`}
          onClick={(e) => paginate(e, currentPage + 1)}
        >
          <span className="page-link">Next</span>
        </li>
      </ul>
    </nav>
  );
};
