import { Awards } from "../../../models/interfaces/base-movie-response.model";
import styles from "./MovieAwards.module.scss";

type MovieAwardsProps = {
  awards: Awards;
};

export default function MovieAwards({ awards }: MovieAwardsProps) {
  const shouldShowAwards: boolean =
    !!awards?.nominations?.total || !!awards?.prestigiousAwardSummary || !!awards?.wins?.total;

  if (!shouldShowAwards) return null;
  console.log(awards?.prestigiousAwardSummary);

  return (
    <section className={styles.awards}>
      <h3>Awards</h3>
      {awards?.nominations?.total ? <p>{`Nominations: ${awards?.nominations?.total}`}</p> : null}
      {awards?.prestigiousAwardSummary && (
        <p>{`Prestigious Awards: ${awards?.prestigiousAwardSummary?.award?.text}`}</p>
      )}
      {awards?.wins?.total && <p>{`Wins: ${awards?.wins?.total}`}</p>}
    </section>
  );
}
