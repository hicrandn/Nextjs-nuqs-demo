export interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Type: string;
  Plot?: string;
  Director?: string;
  Actors?: string;
  Genre?: string;
  Runtime?: string;
  imdbRating?: string;
  Language?: string;
  Country?: string;
  Awards?: string;
  Metascore?: string;
  BoxOffice?: string;
  Production?: string;
  Website?: string;
}

export interface OMDBResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
}
