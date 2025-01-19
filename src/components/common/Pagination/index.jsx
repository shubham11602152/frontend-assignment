import React from "react";
import { Button, PaginationWrapper } from "./styles";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <PaginationWrapper>
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </Button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </PaginationWrapper>
  );
};

export default Pagination;
