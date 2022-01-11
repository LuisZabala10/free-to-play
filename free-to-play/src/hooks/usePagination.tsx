import { useState } from "react";
import { IGame } from "../interface/IGame";

interface Props {
  items: IGame[];
  itemsPerPages: number;
}
const usePagination = ({ items, itemsPerPages }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const movePreviousPage = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };

  const moveNextPage = () => {
    const totalPages = Math.ceil(items!.length / itemsPerPages);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
    return;
  };

  const indexOfLastItem = currentPage * itemsPerPages;
  const indexOfFirstItem = indexOfLastItem - itemsPerPages;
  const currentItems = items?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(items?.length / itemsPerPages);

  return {
    moveNextPage,
    movePreviousPage,
    currentItems,
    currentPage,
    totalPages,
  };
};

export default usePagination;
