import { Slide, Slider, SliderProps } from "../Slider";
import { IMoviesInfo } from "../../context/FilmContext/interfaces";
import { Container } from "./styles";
import CardMyList from "../CardMyList";

const settings: SliderProps = {
  spaceBetween: 5,
  slidesPerView: 6,
  navigation: true,
};

function CarouselSwiperMyList({ moviesInfo }: IMoviesInfo) {
  return (
    <Container>
      <h2>{moviesInfo.type}</h2>

      <div>
        <Slider settings={settings}>
          {moviesInfo.movielist.map((movie) => {
            return (
              <Slide key={movie.id}>
                <CardMyList movie={movie}></CardMyList>
              </Slide>
            );
          })}
        </Slider>
      </div>
    </Container>
  );
}

export default CarouselSwiperMyList;
