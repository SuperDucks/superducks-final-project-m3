import { Slide, Slider, SliderProps } from "../Slider";

import { IMoviesInfo } from "../../context/FilmContext/interfaces";
import Card from "../Card";
import { Container } from "./styles";

const settings: SliderProps = {
  spaceBetween: 5,
  slidesPerView: 6,
  navigation: true,

};

function CarouselSwiper({ moviesInfo }: IMoviesInfo) {
  return (
    <Container>
      <h2>{moviesInfo.type}</h2>

      <div>
        <Slider settings={settings}>
          {moviesInfo.movielist.map((movie) => {
            return (
              <Slide key={movie.id}>
                <Card movie={movie}></Card>
              </Slide>
            );
          })}
        </Slider>
      </div>
    </Container>
  );
}

export default CarouselSwiper;
