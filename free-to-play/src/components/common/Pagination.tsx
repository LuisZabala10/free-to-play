import React from "react";
import { IGame } from "../../interface/IGame";
import usePagination from "../../hooks/usePagination";

interface Props {
  moveNextPage: () => void;
  movePreviousPage: () => void;
  currentPage: number;
  totalPages: number;
}

const Pagination = ({ moveNextPage, movePreviousPage, currentPage,totalPages }: Props) => {
  const btnPreviousClass = currentPage === 1 ? "btn disabled" : "btn";
  const btnNextClass = currentPage === totalPages ? "btn disabled" : "btn";
  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a className={btnPreviousClass} onClick={() => movePreviousPage()}>
            Previous
          </a>
        </li>
        <li className="page-item">
          <a className={btnNextClass} onClick={() => moveNextPage()}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
