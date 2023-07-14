import LocalMoviesOutlinedIcon from "@mui/icons-material/LocalMoviesOutlined";
import styles from "./PlaceholderCard.module.scss";

interface Dimension {
  width: string;
  height: string;
}

type PlaceholderCardProps = {
  dimension?: Dimension;
};

export function PlaceholderCard({ dimension }: PlaceholderCardProps) {
  return (
    <div style={dimension} className={styles.placeholderCardContainer}>
      <LocalMoviesOutlinedIcon className={styles.placeholderCardContainerIcon} />
    </div>
  );
}
