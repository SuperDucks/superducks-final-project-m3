import NavBar from "../../components/NavBar";
import { Container } from "./styles";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { BtnPrimary } from "../../styles/buttons";
import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { IMovies } from "../../context/FilmContext/interfaces";
import { useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import EditProfileModal from "../../Modals/EditProfileModal";

const FilmScreen = () => {
  const [movie, setMovie] = useState<IMovies>({} as IMovies);
  const [genres, setGenres] = useState([]);

  const imgbaseUrl = "https://image.tmdb.org/t/p/original/";

  const { movieId } = useParams();

  async function load() {
    try {
      const resposta = await api.get(
        `/movie/${movieId}?api_key=ffbfd65ffec7d7be7f2df127feb18d85&language=en-US`
      );
      setMovie(resposta.data);
      setGenres(resposta.data.genres);

      console.log(resposta.data);
    } catch (erro) {
      console.log(erro);
    }
  }

  const { isOpenEditProfileModal } = useContext(UserContext);

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {isOpenEditProfileModal && <EditProfileModal />}
      <NavBar />
      <main
        className="main-movie"
        style={{
          backgroundImage: `url(${imgbaseUrl}${movie.backdrop_path})`,
        }}
      >
        <div className="background-form"></div>

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
              <p>7.4</p>
            </div>
          </div>

          <div className="main-movie-section-footer">
            <button className="favorite-button">
              <MdOutlineBookmarkBorder size="27px" />
            </button>
            <BtnPrimary padding="big">Rate</BtnPrimary>
          </div>
        </section>

        <div className="main-movie-carousel">
          <div>Carousel</div>
        </div>
      </main>
    </Container>
  );
};

export default FilmScreen;
