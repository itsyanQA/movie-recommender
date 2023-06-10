import { Header } from "../../components/Header/Header";
import { useGetUpcomingMoviesQuery } from "../../store/slices/movieApiSlice";
import { useEffect } from "react";

export function HomePage() {
  const {data: upcomingMovies} = useGetUpcomingMoviesQuery();
  
  useEffect(() => {
    console.log(upcomingMovies);
  }, [upcomingMovies]);

  return <Header />;
}
