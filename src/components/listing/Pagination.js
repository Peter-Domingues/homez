"use client";
import React, { useState } from "react";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5; // You can set the maximum number of page numbers to show in the pagination

    const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const renderPageNumbers = generatePageNumbers().map((page) => (
    <li
      key={page}
      className={`page-item${page === currentPage ? " active" : ""}`}
    >
      <span
        className="page-link pointer"
        href="#"
        onClick={() => handlePageClick(page)}
      >
        {page}
      </span>
    </li>
  ));

  return (
    <div className="mbp_pagination text-center">
      <ul className="page_navigation">
        <li className="page-item">
          <span
            className="page-link pointer"
            href="#"
            onClick={() => handlePageClick(currentPage - 1)}
          >
            <span className="fas fa-angle-left" />
          </span>
        </li>
        {renderPageNumbers}
        <li className="page-item pointer">
          <span
            className="page-link"
            href="#"
            onClick={() => handlePageClick(currentPage + 1)}
          >
            <span className="fas fa-angle-right" />
          </span>
        </li>
      </ul>
      <p className="mt10 pagination_page_count text-center">
        {currentPage} of {totalPages}
      </p>
    </div>
  );
};

export default Pagination;
