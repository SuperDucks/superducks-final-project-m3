import { Slide, Slider, SliderProps } from "../Slider";

import { IMoviesInfo } from "../../context/FilmContext/interfaces";
import Card from "../Card";

const settings: SliderProps = {
  spaceBetween: 20,
  slidesPerView: 3,
  navigation: true,
  pagination: {
    clickable: true,
  },
};

function CarouselSwiper({ moviesInfo }: IMoviesInfo) {
  return (
    <Slider settings={settings}>
        
      {
        moviesInfo.movielist.map((movie) => {
          return (
            <Slide>
              <Card movie={movie} key={movie.id}></Card>
            </Slide>
            );
        })
      }
      
    </Slider>
  )
}

export default CarouselSwiper;