import { Slide, Slider, SliderProps } from "../Slider";

import { IMoviesInfo } from "../../context/FilmContext/interfaces";
import Card from "../Card";
import { Container } from "./styles";
import { useState } from "react";

const settings: SliderProps = {
  spaceBetween: 5,
  slidesPerView: 6,
  navigation: true,
  // pagination: {
  //   clickable: true,
  // },
};

function CarouselSwiper({ moviesInfo }: IMoviesInfo) {
  const [counter, setCounter] = useState<number>(0);
  return (
    <Container>
      <h2>{moviesInfo.type}</h2>

      <div>
        <Slider settings={settings}>
          {moviesInfo.movielist.map((movie) => {
            return (
              <>
                <Slide key={counter}>
                  <Card movie={movie}></Card>
                </Slide>
              </>
            );
          })}
        </Slider>
      </div>
    </Container>
  );
}

export default CarouselSwiper;
