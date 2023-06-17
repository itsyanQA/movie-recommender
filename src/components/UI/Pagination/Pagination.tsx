import MUIPagination from "@mui/material/Pagination";
import styles from "./Pagination.module.scss";

type PaginationProps = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export function Pagination({ setPage }: PaginationProps) {
  return (
    <div className={styles.paginationContainer}>
      <MUIPagination
        count={10}
        onChange={(event: React.ChangeEvent<unknown>, page: number) => setPage(page)}
      />
    </div>
  );
}
