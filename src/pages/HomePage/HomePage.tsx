import { Header } from "../../components/Header/Header";
import { useGetUpcomingMoviesQuery } from "../../store/slices/movieApiSlice";
import { useEffect } from "react";
import { Upcoming } from "../../components/Upcoming/Upcoming";

export function HomePage() {
  const { data: upcomingMovies } = useGetUpcomingMoviesQuery();

  return (
    <>
      <Header />
      <Upcoming upcomingMovies={upcomingMovies?.results}/>
    </>
  );
}
