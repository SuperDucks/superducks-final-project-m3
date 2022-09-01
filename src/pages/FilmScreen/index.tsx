import NavBar from "../../components/NavBar";
import { Container } from "./styles";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { BtnPrimary } from "../../styles/buttons";

const FilmScreen = () => {
  return (
    <Container>
      <NavBar />
      <main className="main-movie">
        <div className="background-form"></div>

        <section className="main-movie-section">
          <div className="main-movie-section-header">
            <h1>STRANGER THINGS</h1>
            <h2>Terror</h2>
          </div>

          <div className="main-movie-section-content">
            <h3>
              Situada no início dos anos 1980, Stranger Things se passa na
              cidade rural fictícia de Hawkins, Indiana. Como fachada, o
              laboratório da região realizava experimentos científicos para o
              Departamento de Energia Americano, quando na realidade, os
              pesquisadores ali investiram em experimentos com o paranormal e o
              sobrenatural, incluindo o uso de cobaias humanas.
            </h3>
            <div>
              <AiFillStar color="yellow" />
              <p>7.4</p>
            </div>
          </div>

          <div className="main-movie-section-footer">
            <button className="favorite-button">
              <MdOutlineBookmarkBorder size="27px" />
            </button>
            <BtnPrimary padding="big">Rate</BtnPrimary>
          </div>
        </section>

        <div className="main-movie-carousel">
          <div>Carousel</div>
        </div>
      </main>
    </Container>
  );
};

export default FilmScreen;
