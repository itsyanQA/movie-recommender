import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "./MovieCatalogCarouselArrows.scss";

export default function MovieCatalogCarouselArrows() {
  return (
    <>
      <button className="swiper-button-next">{<NavigateNextIcon />}</button>
      <button className="swiper-button-prev">{<NavigateBeforeIcon />}</button>
    </>
  );
}
