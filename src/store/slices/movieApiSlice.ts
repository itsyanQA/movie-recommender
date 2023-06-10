import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetUpcomingMoviesParams } from "../../models/types/params";
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
    getUpcomingMovies: builder.query<any, GetUpcomingMoviesParams | void>({
      query: (args) => {
        return { url: MovieEndpoints.UPCOMING_TITLES, params: { ...args } };
      },
    }),
  }),
});

export const { useGetUpcomingMoviesQuery } = moviesApi;
