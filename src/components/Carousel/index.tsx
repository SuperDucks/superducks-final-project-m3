import { Container } from "./styles";
import { AiFillStar } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";

function Carousel() {
  return (
    <Container>
      <h2>RECOMMEND</h2>

      <div className="carousel-container">
        <div className="carousel-card">
          <div className="carousel-card-main">
            <div className="carousel-card-title">
              <h2>STRANGER THINGS</h2>

              <div className="carousel-card-ratio">
                <AiFillStar size={18} color="yellow" />
                <p>7.4</p>
              </div>
            </div>

            <div className="carousel-card-add">
              <button className="caroulse-card-add-mark">
                <BiBookmark size={20} />
                <p>ADD</p>
              </button>

              <button className="genre">
                <p>TERROR</p>
              </button>
            </div>
          </div>
        </div>

        <div className="carousel-card">
          <div className="carousel-card-main">
            <div className="carousel-card-title">
              <h2>STRANGER THINGS</h2>

              <div className="carousel-card-ratio">
                <AiFillStar size={18} color="yellow" />
                <p>7.4</p>
              </div>
            </div>

            <div className="carousel-card-add">
              <button className="caroulse-card-add-mark">
                <BiBookmark size={20} />
                <p>ADD</p>
              </button>

              <button className="genre">
                <p>TERROR</p>
              </button>
            </div>
          </div>
        </div>

        <div className="carousel-card">
          <div className="carousel-card-main">
            <div className="carousel-card-title">
              <h2>STRANGER THINGS</h2>

              <div className="carousel-card-ratio">
                <AiFillStar size={18} color="yellow" />
                <p>7.4</p>
              </div>
            </div>

            <div className="carousel-card-add">
              <button className="caroulse-card-add-mark">
                <BiBookmark size={20} />
                <p>ADD</p>
              </button>

              <button className="genre">
                <p>TERROR</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default Carousel;
