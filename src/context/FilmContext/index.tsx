/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api, userAPI } from "../../services/api";
import { UserContext } from "../UserContext";
import { FilmProviderProps, IFilmProps, IMovies } from "./interfaces";
import animationData from "../../assets/nv5k325XKe.json";

export const FilmContext = createContext({} as IFilmProps);

export const FilmProvider = ({ children }: FilmProviderProps) => {
  const [topRatedMovies, setTopRatedMovies] = useState<IMovies[] | []>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<IMovies[] | []>([]);
  const [recommendationMovies, setRecommendationsMovies] = useState<
    IMovies[] | []
  >([]);
  const [loadingPage, setLoadingPage] = useState<boolean>(true);

  const { movieList, setMovieList, user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      api
        .get(
          `/movie/${movieList[0]?.id}/recommendations?api_key=ffbfd65ffec7d7be7f2df127feb18d85&language=en-US&page=1`
        )
        .then((res) => {
          let newResults = res.data.results;
          newResults.length = 6;
          setRecommendationsMovies(newResults);
        })
        .catch((err) => console.log(err));
    }
  }, [user, movieList]);

  useEffect(() => {
    getTopRatedMovies();
    getUpcomingMovies();
  }, []);

  useEffect(() => {
    if (topRatedMovies.length > 0) {
      setTimeout(() => {
        setLoadingPage(false);
      }, 3000);
    }
  }, [topRatedMovies]);

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const addUserMovie = async (data: IMovies[]) => {
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
      setMovieList(response.data.movie_list);
    } catch (error) {
      console.log(error);
      toast.error("An error has occurred!");
    } finally {
    }
  };

  const addMovie = (data: IMovies) => {
    console.log(data);
    if (!movieList?.find((movie) => movie.id === data.id)) {
      addUserMovie([...movieList, data]);
      toast.success("Film Added!");
    } else {
      const filterMovie = movieList.filter(
        (movieOld) => movieOld.id !== data.id
      );
      addUserMovie(filterMovie);
      toast.success("Film Removed!");
    }
  };

  const removeMovie = (data: IMovies) => {
    const filterMovie = movieList.filter((movieOld) => movieOld.id !== data.id);
    addUserMovie(filterMovie);
    toast.success("Film Removed!");
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
      type: "RECOMMENDATIONS",
      movielist: recommendationMovies,
    },
  ];

  const MyListFilmes = [
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

  return (
    <FilmContext.Provider
      value={{
        DashboardMovies,
        loadingPage,
        setLoadingPage,
        addMovie,
        defaultOptions,
        MyListFilmes,
        removeMovie,
      }}
    >
      {children}
    </FilmContext.Provider>
  );
};
