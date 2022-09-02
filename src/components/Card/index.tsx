import { useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";
import { FilmContext } from "../../context/FilmContext";
import { genres } from "../../context/FilmContext/genre";
import { Imovie } from "../../context/FilmContext/interfaces";
import { Container } from "./style";

function Card({ movie }: Imovie) {
  const { addMovie } = useContext(FilmContext);
  const movieGenre = genres.filter((genre) => genre.id === movie.genre_ids[0]);

  return (
    <Container moviePoster={movie.poster_path}>
      <div className="carousel-container">
        <div className="carousel-card">
          <div className="carousel-card-main">
            <div className="carousel-card-title">
              <h2>{movie.original_title}</h2>

              <div className="carousel-card-ratio">
                <AiFillStar size={18} color="yellow" />
                <p>{movie.vote_average}</p>
              </div>
            </div>

            <div className="carousel-card-add">
              <button
                className="caroulse-card-add-mark"
                onClick={() => addMovie(movie)}
              >
                <BiBookmark size={20} />
                <p>ADD</p>
              </button>

              <button className="genre">
                <p>{movieGenre[0].name}</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default Card;
