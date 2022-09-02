import { ReactNode } from "react";

export interface FilmProviderProps {
  children: ReactNode;
}

export interface IFilmProps {
  DashboardMovies: IDashboardMovies[];
  addMovie: (data: IMovies) => void;
}

export interface IDashboardMovies {
  type: string;
  movielist: IMovies[] | [];
}

export interface IMovies {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Imovie {
  movie: {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    media_type: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  };
}

export interface IGenre {
  id: number;
  name: string;
}

export interface IMoviesInfo {
  moviesInfo: {
    type: string;
    movielist: IMovies[] | [];
  };
}
