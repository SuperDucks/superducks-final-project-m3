/* eslint-disable react-hooks/exhaustive-deps */
import NavBar from "../../components/NavBar";
import { Container } from "./styles";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { IMovies } from "../../context/FilmContext/interfaces";
import { useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { FilmContext } from "../../context/FilmContext";
import EditProfileModal from "../../Modals/EditProfileModal";
import { GenreContext } from "../../context/GenreContext";
import GenreModal from "../../Modals/GenreModal";
import CardMyList from "../../components/CardMyList";
import { Slide, Slider, SliderProps } from "../../components/Slider";


const FilmScreen = () => {
  const imgbaseUrl = "https://image.tmdb.org/t/p/original/";
  const [movie, setMovie] = useState<IMovies>({} as IMovies);
  const [genres, setGenres] = useState([]);
  const { isOpenModalGenre } = useContext(GenreContext);

  const { movieId } = useParams();
  const { addMovie } = useContext(FilmContext);
  const { isOpenEditProfileModal, movieList } = useContext(UserContext);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {
      const resposta = await api.get(
        `/movie/${movieId}?api_key=ffbfd65ffec7d7be7f2df127feb18d85&language=en-US`
      );
      setMovie(resposta.data);
      setGenres(resposta.data.genres);
    } catch (erro) {
      console.log(erro);
    }
  }

  const createMovieData = () => {
    const movieData = {
      adult: movie.adult,
      backdrop_path: movie.backdrop_path,
      genre_ids: [movie.genres[0].id] ? [movie.genres[0].id] : [],
      id: movie.id,
      media_type: movie.media_type ? movie.media_type : "",
      original_language: movie.original_language,
      original_title: movie.original_title,
      overview: movie.overview,
      popularity: movie.popularity,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      title: movie.title,
      video: movie.video,
      vote_average: movie.vote_average,
      vote_count: movie.vote_count,
    };

    addMovie(movieData);
  };

  const settings: SliderProps = {
    spaceBetween: 2,
    navigation: true,
    breakpoints: {
      200:{                   
        slidesPerView: 1,                     
        slidesPerGroup: 1,  
      },                  
      490:{
        slidesPerView: 2,                   
        slidesPerGroup: 2,  
      },
      1040:{
        slidesPerView: 2,                   
        slidesPerGroup: 2,  
      },                  
      1150:{
        slidesPerView: 3,                   
        slidesPerGroup: 3,  
      },                  
      1450:{
        slidesPerView: 3,                  
        slidesPerGroup: 3,  
      }   
    },
  };

  return (
    <Container>
      {isOpenModalGenre && <GenreModal />}
      {isOpenEditProfileModal && <EditProfileModal />}
      <NavBar />
      <main
        className="main-movie"
        style={{
          backgroundImage: `url(${imgbaseUrl}${movie.backdrop_path})`,
        }}
      >
        <section className="main-movie-section">
          
          <div className="main-movie-section-header">
            <h1>{movie.title}</h1>
            <h2>
              {genres.map((genre: any) => {
                return genre.name + " | ";
              })}
            </h2>
          </div>

          <div className="main-movie-section-content">
            <h3>{movie.overview}</h3>
            <div>
              <AiFillStar color="yellow" />
              <p>{movie.vote_average?.toFixed(1)}</p>
            </div>
          </div>

          <div className="main-movie-section-footer">
            <button
              className="favorite-button"
              onClick={() => {
                createMovieData();
              }}
            >
              <MdOutlineBookmarkBorder size="27px" />
            </button>
          </div>
        </section>

        <div className="main-movie-carousel-background">
          <div className="main-movie-carousel">
            <Slider settings={settings}>
              {movieList.map((movie) => {
                return (
                  <Slide key={movie.id}>
                    <CardMyList key={movie.id} movie={movie}></CardMyList>
                  </Slide>
                );
              })}
            </Slider>
          </div>
        </div>

      </main>
    </Container>
  );
};

export default FilmScreen;
