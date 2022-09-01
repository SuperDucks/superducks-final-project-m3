import { useContext } from "react";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import Genre from "../../components/Genre";
import NavBar from "../../components/NavBar";
import { FilmContext } from "../../context/FilmContext";
import { GenreContext } from "../../context/GenreContext";

import GenreModal from "../../Modals/GenreModal";
import { Container } from "./styles";

const Dashboard = () => {
  const { DashboardMovies } = useContext(FilmContext);
  const { isOpenModalGenre } = useContext(GenreContext);

  return (
    <Container>
      {isOpenModalGenre && <GenreModal />}
      <NavBar />

      <div className="content">
        <aside>
          <Genre />
        </aside>
        <main>
          {DashboardMovies.map((moviesInfo) => {
            return <Carousel moviesInfo={moviesInfo} />;
          })}
        </main>
      </div>

      <Footer />
    </Container>
  );
};
export default Dashboard;
