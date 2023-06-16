import CircularProgress from "@mui/material/CircularProgress";
import styles from "./CircularLoading.module.scss"

export function CircularLoading() {
  return (
    <div className={styles.loaderContainer}>
      <CircularProgress color="primary" />
    </div>
  );
}
