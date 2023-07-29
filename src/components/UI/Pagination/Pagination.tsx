import styles from "./Pagination.module.scss";
import { Movie } from "../../../models/interfaces/movie-base-interfaces";
import { useState, useEffect } from "react";
import { Pagination as StyledPagination } from "../../../styled/Pagination";

type PaginationProps = {
  page: number | undefined;
  setPage: React.Dispatch<React.SetStateAction<number>> | undefined;
  movieData: Movie[];
};

export function Pagination({ movieData, page, setPage }: PaginationProps) {
  const [lastPage, setLastPage] = useState<number | undefined>(undefined);
  const DEFAULT_PAGINATION_COUNT: number = 50;

  const getPaginationCount = () => {
    if (lastPage) {
      return lastPage;
    }
    return DEFAULT_PAGINATION_COUNT;
  };

  useEffect(() => {
    if (movieData?.length === 0) {
      setLastPage(page);
    }
  }, [movieData]);

  return (
    <div className={styles.paginationContainer}>
      <StyledPagination
        count={getPaginationCount()}
        onChange={(event: React.ChangeEvent<unknown>, page: number) => {
          if (setPage) setPage(page);
        }}
        page={page}
        color="primary"
      />
    </div>
  );
}
