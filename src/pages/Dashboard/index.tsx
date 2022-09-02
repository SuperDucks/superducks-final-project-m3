import { useContext } from "react";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import Genre from "../../components/Genre";
import NavBar from "../../components/NavBar";
import { FilmContext } from "../../context/FilmContext";
import { GenreContext } from "../../context/GenreContext";

import { UserContext } from "../../context/UserContext";
import EditProfileModal from "../../Modals/EditProfileModal";

import GenreModal from "../../Modals/GenreModal";
import { Container } from "./styles";

const Dashboard = () => {
  const { DashboardMovies } = useContext(FilmContext);
  const { isOpenModalGenre } = useContext(GenreContext);
  const {isOpenEditProfileModal } = useContext(UserContext);

  return (
    <Container>
      {isOpenModalGenre && <GenreModal />}
      {isOpenEditProfileModal && <EditProfileModal />}
      <NavBar />

      <div className="content">
        <aside>
          <Genre />
        </aside>
        <main>
          {DashboardMovies.map((moviesInfo) => {
            return <Carousel key={moviesInfo.type} moviesInfo={moviesInfo} />;
          })}
        </main>
      </div>

      <Footer />
    </Container>
  );
};
export default Dashboard;
