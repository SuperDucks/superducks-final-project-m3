import { Slide, Slider, SliderProps } from "../Slider";
import { IMoviesInfo } from "../../context/FilmContext/interfaces";
import { Container } from "./styles";
import CardMyList from "../CardMyList";

const settings: SliderProps = {
  spaceBetween: 5,
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
    700:{
      slidesPerView: 3,                   
      slidesPerGroup: 3,  
    },                  
    1300:{
      slidesPerView: 4,                   
      slidesPerGroup: 4,  
    },                  
    1450:{
      slidesPerView: 5,                  
      slidesPerGroup: 5,  
    }   
  },
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
