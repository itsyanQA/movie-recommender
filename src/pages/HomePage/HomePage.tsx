import { Header } from "../../components/Header/Header";
import { useGetUpcomingMoviesQuery } from "../../store/slices/movieApiSlice";
import { Upcoming } from "../../components/Upcoming/Upcoming";

export function HomePage() {
  const { data: upcomingMovies, isLoading, isError } = useGetUpcomingMoviesQuery({ limit: 50 });

  return (
    <>
      <Header />
      <Upcoming upcomingMovies={upcomingMovies?.results} isLoading={isLoading} isError={isError} />
    </>
  );
}
