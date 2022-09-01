import { createContext, useEffect, useState } from "react";
import{ api} from "../../services/api";
import { FilmProviderProps, IFilmProps, IMovies } from "./interfaces";

export const FilmContext = createContext({} as IFilmProps);

export const FilmProvider = ({ children }: FilmProviderProps) => {
  const [topRatedMovies, setTopRatedMovies] = useState<IMovies[] | []>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<IMovies[] | []>([]);

  const DashboardMovies = [
    {
      type: "TOP RATED",
      movielist: topRatedMovies,
    },
    {
      type: "UPCOMING",
      movielist: upcomingMovies,
    },
  ];

  const getTopRatedMovies = () => {
    api
      .get(
        "/movie/top_rated?api_key=ffbfd65ffec7d7be7f2df127feb18d85&language=en-US&page=1"
      )
      .then((res) => {
        setTopRatedMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  const getUpcomingMovies = () => {
    api
      .get(
        "/movie/upcoming?api_key=ffbfd65ffec7d7be7f2df127feb18d85&language=en-US&page=1"
      )
      .then((res) => {
        setUpcomingMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  const getRecommendedMovies = (movieId: number) => {
    api
      .get(
        `/movie/${movieId}/recommendations?api_key=ffbfd65ffec7d7be7f2df127feb18d85&language=en-US&page=1`
      )
      .then((res) => {
        console.log(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getTopRatedMovies();
    getUpcomingMovies();
  }, []);

  return (
    <FilmContext.Provider
      value={{
        DashboardMovies,
      }}
    >
      {children}
    </FilmContext.Provider>
  );
};
