import MUIPagination from "@mui/material/Pagination";
import styles from "./Pagination.module.scss";
import { Movie } from "../../../models/movie.model";
import { useState, useEffect } from "react";

type PaginationProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  movieData: Movie[];
};

export function Pagination({ movieData, page, setPage }: PaginationProps) {
  const [lastPage, setLastPage] = useState<number | null>(null);
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
      <MUIPagination
        count={getPaginationCount()}
        onChange={(event: React.ChangeEvent<unknown>, page: number) => setPage(page)}
        page={page}
        color="primary"
      />
    </div>
  );
}
