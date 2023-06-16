import MUIPagination from "@mui/material/Pagination";
import styles from "./Pagination.module.scss";

export function Pagination() {
  return (
    <div className={styles.paginationContainer}>
      <MUIPagination count={10}/>
    </div>
  );
}
