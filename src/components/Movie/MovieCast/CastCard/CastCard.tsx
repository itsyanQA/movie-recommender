import { CastDetail } from "../../../../models/interfaces/cast-detail.model";
import styles from "./CastCard.module.scss";

type CastCardProps = {
  castDetail: CastDetail;
};

export default function CastCard({ castDetail }: CastCardProps) {
  return (
    <li className={styles.castItem}>
      <img src={castDetail.pictureUrl} alt={`picture of ${castDetail.fullName}`} />
      <span className={styles.castItemName}>{castDetail.fullName}</span>
    </li>
  );
}
