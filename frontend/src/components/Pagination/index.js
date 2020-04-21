import React from 'react';

import { Pagination, PaginationItem } from './styles';

const Page = ({ currentPage, count, max }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(count / max); i++) {
    pageNumbers.push(i);
  }

  const active = (num) =>
    Number(currentPage) === num ? 'active' : 'deactivate';

  return pageNumbers.map((number) => {
    // active = Number(currentPage) === number && 'true';
    return (
      <PaginationItem
        to={`?page=${number}`}
        key={number}
        active={active(number)}
      >
        {number}
      </PaginationItem>
    );
  });
};

export default function ReactPagination({ currentPage, count }) {
  return (
    <Pagination>
      {/* <PaginationItem onClick={() => handleClickPage(currentPage + 1)}>
        &raquo;
      </PaginationItem> */}
      <Page currentPage={currentPage} count={count} max={5} />
      {/* <span onClick={() => handleClickPage(currentPage + 1)}>&raquo;</span> */}
    </Pagination>
  );
}
