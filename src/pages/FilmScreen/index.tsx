import { FavoriteButton, Main, TrailerButton } from "./styles";

const FilmScreen = () => {
  return (
    <Main>
      <section className="individual-film-info">
        <h1 className="film-title">STRANGER THINGS</h1>
        <h2 className="film-gender">Terror</h2>
        <p className="film-description">
          Situada no início dos anos 1980, Stranger Things se passa na cidade
          rural fictícia de Hawkins, Indiana. Como fachada, o laboratório da
          região realizava experimentos científicos para o Departamento de
          Energia Americano, quando na realidade, os pesquisadores ali
          investiram em experimentos com o paranormal e o sobrenatural,
          incluindo o uso de cobaias humanas.
        </p>
        <p className="film-rating">7.4/10</p>
        <FavoriteButton className="buttons">
          <img alt="" />
        </FavoriteButton>
        <TrailerButton className="buttons">Trailer</TrailerButton>
      </section>
      <section className="recommended-film-section">
        <div className="recommended-film-card">
          <div className="film-info">
            <h3 className="recommended-film-title">STRANGER THINGS</h3>
            <p className="recommended-film-rating">7.4/10</p>
          </div>
          <div className="card-bar">
            <div className="recommended-film-add-div">
              <p className="recommended-film-add">ADD</p>
            </div>
            <div className="recommended-film-gender-div">
              <p className="recommended-film-gender">TERROR</p>
            </div>
          </div>
        </div>

        <div className="recommended-film-card">
          <div className="film-info">
            <h3 className="recommended-film-title">JOHN WICK</h3>
            <p className="recommended-film-rating">7.4/10</p>
          </div>
          <div className="card-bar">
            <div className="recommended-film-add-div">
              <p className="recommended-film-add">ADD</p>
            </div>
            <div className="recommended-film-gender-div">
              <p className="recommended-film-gender">ACTION</p>
            </div>
          </div>
        </div>

        <div className="recommended-film-card">
          <div className="film-info">
            <h3 className="recommended-film-title">CARS</h3>
            <p className="recommended-film-rating">7.4/10</p>
          </div>
          <div className="card-bar">
            <div className="recommended-film-add-div">
              <p className="recommended-film-add">ADD</p>
            </div>
            <div className="recommended-film-gender-div">
              <p className="recommended-film-gender">KIDS</p>
            </div>
          </div>
        </div>

        <div className="recommended-film-card">
          <div className="film-info">
            <h3 className="recommended-film-title">FAST & FURIOUS</h3>
            <p className="recommended-film-rating">7.4/10</p>
          </div>
          <div className="card-bar">
            <div className="recommended-film-add-div">
              <p className="recommended-film-add">ADD</p>
            </div>
            <div className="recommended-film-gender-div">
              <p className="recommended-film-gender">ACTION</p>
            </div>
          </div>
        </div>

        <div className="recommended-film-card">
          <div className="film-info">
            <h3 className="recommended-film-title">GHOSTBUSTERS</h3>
            <p className="recommended-film-rating">7.4/10</p>
          </div>
          <div className="card-bar">
            <div className="recommended-film-add-div">
              <p className="recommended-film-add">ADD</p>
            </div>
            <div className="recommended-film-gender-div">
              <p className="recommended-film-gender">COMEDY</p>
            </div>
          </div>
        </div>

        <div className="recommended-film-card">
          <div className="film-info">
            <h3 className="recommended-film-title">THE WALKING DEAD</h3>
            <p className="recommended-film-rating">7.4/10</p>
          </div>
          <div className="card-bar">
            <div className="recommended-film-add-div">
              <p className="recommended-film-add">ADD</p>
            </div>
            <div className="recommended-film-gender-div">
              <p className="recommended-film-gender">SUSPENSE</p>
            </div>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default FilmScreen;
