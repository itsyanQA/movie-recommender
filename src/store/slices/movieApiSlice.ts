import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetMovieByIdParams, CommonMovieParams, GetMovieParams } from "../../models/interfaces/params";
import { MovieEndpoints } from "../../models/enums/MovieEndpoints";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://moviesdatabase.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", process.env.REACT_APP_API_KEY!);
      headers.set("X-RapidAPI-Host", process.env.REACT_APP_API_HOST!);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUpcomingMovies: builder.query<any, CommonMovieParams | void>({
      query: (args) => {
        return { url: MovieEndpoints.UPCOMING_TITLES, params: { ...args } };
      },
    }),
    getMovieById: builder.query<any, GetMovieByIdParams>({
      query: (args) => {
        return {
          url: MovieEndpoints.MOVIE_BY_ID.replace("{id}", args.movieId),
          params: { info: args.info },
        };
      },
    }),
    getMovie: builder.query<any, GetMovieParams>({
      query: (args) => {
        return { url: MovieEndpoints.MOVIE, params: { ...args } };
      },
    }),
  }),
});

export const { useGetUpcomingMoviesQuery, useGetMovieByIdQuery, useGetMovieQuery } = moviesApi;
