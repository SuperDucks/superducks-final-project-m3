import { Button, Main } from "./styles";

const FilmScreen = () => {
  return (
    <Main>
      <div>
        <h1 className="film-title">NOME DO FILME</h1>
        <h2 className="film-gender">Gênero do filme</h2>
        <p className="film-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat...
        </p>
        <p className="film-rating">7.4/10</p>
        <Button>Trailer</Button>
      </div>
      <div className="cards-section">
        <p>Card 1</p>
        <p>Card 2</p>
        <p>Card 3</p>
        <p>Card 4</p>
      </div>
    </Main>
  );
};

export default FilmScreen;
