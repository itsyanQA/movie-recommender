import { CastResponse } from "../../../models/interfaces/base-movie-response.model";
import { useState, useEffect } from "react";
import styles from "./MovieCast.module.scss";
import CastCard from "./CastCard/CastCard";
import { CastDetail } from "../../../models/interfaces/cast-detail.model";
import { Button } from "@mui/material";

type MovieCastProps = {
  cast: CastResponse;
};

export default function MovieCast({ cast }: MovieCastProps) {
  const [castDetails, setCastDetails] = useState<CastDetail[] | null>(null);
  const [isShowAllCast, setIsShowAllCast] = useState<boolean>(false);

  // TODO: Remove the filteredDetails, and add an image placeholder if the url does not exist
  useEffect(() => {
    if (cast) {
      const filteredDetails = cast?.cast?.edges?.filter((node) => node?.node?.name?.primaryImage?.url);
      setCastDetails(
        filteredDetails?.map((node) => {
          return {
            fullName: node?.node?.name?.nameText?.text,
            pictureUrl: node?.node?.name?.primaryImage?.url,
          };
        })
      );
    }
  }, [cast]);

  const renderPartCast = (): JSX.Element => {
    return (
      <ul className={styles.castList} style={{ flexWrap: "nowrap", justifyContent: "space-between" }}>
        {castDetails?.map((castDetail, index) => {
          if (index <= 4) {
            return <CastCard castDetail={castDetail} />;
          }
        })}
      </ul>
    );
  };

  const renderFullCast = (): JSX.Element => {
    return (
      <ul className={styles.castList}>
        {castDetails?.map((castDetail) => (
          <CastCard castDetail={castDetail} />
        ))}
      </ul>
    );
  };

  return (
    <section className={styles.cast}>
      <h2>Cast</h2>
      {isShowAllCast ? renderFullCast() : renderPartCast()}
      <Button className={styles.castShowAllButton} onClick={() => setIsShowAllCast((prevState) => !prevState)}>
        {isShowAllCast ? "Hide Cast & Crew" : "Show All Cast & Crew"}
      </Button>
    </section>
  );
}
