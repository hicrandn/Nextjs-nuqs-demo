"use server";

import { unstable_cache } from "next/cache";
import { Movie, OMDBResponse } from "@/types";

type GetMoviesProps = {
  search?: string;
  itemsPerPage?: number;
};

const OMDB_API_KEY = process.env.OMDB_API_KEY;

const getMovieDetails = async (imdbID: string): Promise<Movie> => {
  if (!OMDB_API_KEY) {
    throw new Error("OMDB API key is not configured");
  }

  const response = await fetch(
    `http://www.omdbapi.com/?i=${imdbID}&apikey=${OMDB_API_KEY}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();
  return data;
};

const getMovies = unstable_cache(
  async (params: GetMoviesProps): Promise<Movie[]> => {
    const { search } = params;
    if (!OMDB_API_KEY) {
      throw new Error("OMDB API key is not configured");
    }
    const searchQuery = search || ""; // Varsayılan arama

    const response = await fetch(
      `http://www.omdbapi.com/?s=${encodeURIComponent(
        searchQuery
      )}&apikey=${OMDB_API_KEY}&type=movie&page=1`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data: OMDBResponse = await response.json();

    if (data.Response === "False") {
      return [];
    }

    return data.Search;
  },
  ["movies"]
);

export default getMovies;
