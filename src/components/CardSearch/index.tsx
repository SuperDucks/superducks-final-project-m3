import { Imovie } from "../../context/FilmContext/interfaces";
import { Container } from "./style";

function CardSearch({ movie }: Imovie) {
  return (
    <Container moviePoster={movie.poster_path}>
      <div className="carousel-container">
        <div className="carousel-card">
          <div className="carousel-card-main">
            <div className="carousel-card-title">
              <h2>{movie.original_title}</h2>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default CardSearch;
