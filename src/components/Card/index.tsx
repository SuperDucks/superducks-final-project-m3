import Lottie from "react-lottie";
import { useContext, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";
import { FilmContext } from "../../context/FilmContext";
import { genres } from "../../context/FilmContext/genre";
import { Imovie } from "../../context/FilmContext/interfaces";
import { Container } from "./style";
import animationData from "../../assets/nv5k325XKe.json";

function Card({ movie }: Imovie) {
  const { addMovie } = useContext(FilmContext);
  const movieGenre = genres.filter((genre) => genre.id === movie.genre_ids[0]);
  const [isClicked, setIsClicked] = useState(false);
  const [animationState, setAnimationState] = useState({
    isStopped: true,
    isPaused: false,
    direction: -1,
  });

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
                className="button-animation"
                onClick={() => {
                  const reverseAnimation = -1;
                  const normalAnimation = 1;
                  setAnimationState({
                    ...animationState,
                    isStopped: false,
                    direction:
                      animationState.direction === normalAnimation
                        ? reverseAnimation
                        : normalAnimation,
                  });
                  setIsClicked(!isClicked);
                  addMovie(movie);
                }}
              >
                <div className="button-background"></div>
                <Lottie
                  options={defaultOptions}
                  height={50}
                  width={50}
                  direction={animationState.direction}
                  isStopped={animationState.isStopped}
                  isPaused={animationState.isPaused}
                />
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
