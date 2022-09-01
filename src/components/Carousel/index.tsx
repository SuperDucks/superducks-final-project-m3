import { Container } from "./styles";
import Card from "../Card";
import { IMoviesInfo } from "../../context/FilmContext/interfaces";

function Carousel({ moviesInfo }: IMoviesInfo) {
  return (
    <Container>
      <h2>{moviesInfo.type}</h2>
      {moviesInfo.movielist.map((movie) => {
        return <Card movie={movie} key={movie.id}></Card>;
      })}
    </Container>
  );
}
export default Carousel;
