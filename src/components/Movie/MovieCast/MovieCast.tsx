import { CastResponse } from "../../../models/interfaces/base-movie-response.model";
import { useState, useEffect } from "react";
import styles from "./MovieCast.module.scss";
import CastCard from "./CastCard/CastCard";
import { CastDetail } from "../../../models/interfaces/cast-detail.model";

type MovieCastProps = {
  cast: CastResponse;
};

export default function MovieCast({ cast }: MovieCastProps) {
  const [castDetails, setCastDetails] = useState<CastDetail[] | null>(null);

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

  useEffect(() => console.log("details are: ", castDetails), [castDetails]);
  return (
    <>
      <h2>Cast</h2>
      <ul className={styles.castList}>
        {castDetails?.map((castDetail) => (
          <CastCard castDetail={castDetail} />
        ))}
      </ul>
    </>
  );
}
