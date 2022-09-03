import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api, userAPI } from "../../services/api";
import { UserContext } from "../UserContext";
import { FilmProviderProps, IFilmProps, IMovies } from "./interfaces";

export const FilmContext = createContext({} as IFilmProps);

export const FilmProvider = ({ children }: FilmProviderProps) => {
  const [topRatedMovies, setTopRatedMovies] = useState<IMovies[] | []>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<IMovies[] | []>([]);
  const [loadingPage, setLoadingPage] = useState<boolean>(true);
  
  const { movieList, setMovieList, user } = useContext(UserContext);

  async function addUserMovie(data: IMovies[]) {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await userAPI.patch(
        `/users/${user?.id}`,
        { movie_list: data },
        {
          headers: {
            Authorization: `Bearer ${token as string}`,
          },
        }
      );
      console.log(response.data.movie_list);
      setMovieList(response.data.movie_list);
    } catch (error) {
      console.log(error);
      toast.error("An error has occurred!");
    } finally {
    }
  }

  const addMovie = (data: IMovies) => {
    if (!movieList?.includes(data)) {
      addUserMovie([...movieList, data]);
    } else {
      const filterMovie = movieList.filter((movieOld) => movieOld !== data);
      addUserMovie(filterMovie);
    }
  };

  const DashboardMovies = [
    {
      type: "UPCOMING",
      movielist: upcomingMovies,
    },
    {
      type: "TOP RATED",
      movielist: topRatedMovies,
    },
    {
      type: "MY LIST",
      movielist: movieList,
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

  useEffect(() => { 
    if(topRatedMovies.length > 0){  
      setTimeout(() => {
        setLoadingPage(false)
      }, 3000)
    }     
  }, [topRatedMovies]);
  

  return (
    <FilmContext.Provider
      value={{
        DashboardMovies,
        loadingPage,
        setLoadingPage,
        addMovie,
      }}
    >
      {children}
    </FilmContext.Provider>
  );
};
