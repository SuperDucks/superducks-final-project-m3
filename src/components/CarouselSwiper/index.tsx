import { Slide, Slider, SliderProps } from "../Slider";

import { IMoviesInfo } from "../../context/FilmContext/interfaces";
import Card from "../Card";
import { Container } from "./styles";

const settings: SliderProps = {
  spaceBetween: 5,
  slidesPerView: 6,
  navigation: true,
  // pagination: {
  //   clickable: true,
  // },
};

function CarouselSwiper({ moviesInfo }: IMoviesInfo) {
  return (
    <Container>
      <h2>{moviesInfo.type}</h2>

      <div>
        <Slider settings={settings}>
            {moviesInfo.movielist.map((movie) => {
              return (
                <Slide>
                  <Card movie={movie} key={movie.id}></Card>
                </Slide>
              );
            })}
        </Slider>
      </div>
      
    </Container>
  );
}

export default CarouselSwiper;
