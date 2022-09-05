import Container from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import NavBar from "../../components/NavBar";
import EditProfileModal from "../../Modals/EditProfileModal";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { api } from "../../services/api";

import { IMovies } from "../../context/FilmContext/interfaces";
import CardSearch from "../../components/CardSearch";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

function SearchPage() {
  const [movies, setMovies] = useState<IMovies[]>([]);
  const [searchMovies, setSearchMovies] = useState<Boolean>(false);
  const [fistMovies, setFistMovies] = useState<IMovies[]>([]);
  const [search, setSearch] = useState("");

  const urlAPI = `search/movie/?&api_key=ffbfd65ffec7d7be7f2df127feb18d85&language=en-US&query=${search}`;

  useEffect(() => {
    load();
    fistMoviesF();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function load() {
    try {
      const resposta = await api.get(urlAPI);
      setMovies(resposta.data.results);
      setSearchMovies(true);
      console.log(resposta.data.results);
    } catch (erro) {
      console.log(erro);
    }
  }

  async function fistMoviesF() {
    try {
      const resposta = await api.get(
        "/movie/top_rated?api_key=ffbfd65ffec7d7be7f2df127feb18d85&language=en-US&page=1"
      );
      setFistMovies(resposta.data.results);
    } catch (erro) {
      console.log(erro);
    }
  }

  const { isOpenEditProfileModal } = useContext(UserContext);

  return (
    <>
      <Container>
        {isOpenEditProfileModal && <EditProfileModal />}
        <NavBar />
        <main className="search_main">
          <div className="search_main_input">
            <button onClick={load}>
              <AiOutlineSearch size={62} />
            </button>

            <input
              type="text"
              name="query"
              id="search"
              placeholder="
              What would you like to search ?"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="content_main">
            {!searchMovies ? (
              <h1>Recommended:</h1>
            ) : movies.length <= 0 ? (
              <h1>No results</h1>
            ) : (
              <h1>Results</h1>
            )}
            <div className="content_main_cards">
              {!searchMovies ? (
                fistMovies.map((movie: IMovies) => (
                  <Link to={"/movies"} style={{ textDecoration: "none" }}>
                    <CardSearch key={movie.id} movie={movie} />
                  </Link>
                ))
              ) : movies.length <= 0 ? (
                <div className="no_results">
                  <p>Your search for "{search}" did not have any matches.</p>
                  <p>suggestions:</p>
                  <ul>
                    <li> - Try different keywords</li>
                    <li> - Looking for a movie or TV show?</li>
                    <li>
                      - Try using a movie, TV show title, an actor or director
                    </li>
                    <li>
                      - Try a genre, like comedy, romance, sports, or drama
                    </li>
                  </ul>
                </div>
              ) : (
                movies.map((movie: IMovies) => (
                  <Link to={"/movies"} style={{ textDecoration: "none" }}>
                    <CardSearch key={movie.id} movie={movie} />
                  </Link>
                ))
              )}
            </div>
          </div>
        </main>
        <Footer />
      </Container>
    </>
  );
}

export default SearchPage;
