import { useContext } from "react";
import Footer from "../../components/Footer";
import Genre from "../../components/Genre";
import NavBar from "../../components/NavBar";
import CarouselSwiper from "../../components/CarouselSwiper";
import { FilmContext } from "../../context/FilmContext";
import { GenreContext } from "../../context/GenreContext";

import { UserContext } from "../../context/UserContext";
import EditProfileModal from "../../Modals/EditProfileModal";

import GenreModal from "../../Modals/GenreModal";
import { Container } from "./styles";
import LottieLoading from "../../components/LottieLoading";
import CarouselSwiperMyList from "../../components/CarouselSwiperMyList";

const Dashboard = () => {
  const { DashboardMovies, MyListFilmes, loadingPage } =
    useContext(FilmContext);
  const { isOpenModalGenre } = useContext(GenreContext);
  const { isOpenEditProfileModal } = useContext(UserContext);

  return (
    <>
      {loadingPage ? (
        <LottieLoading />
      ) : (
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
                return (
                  <CarouselSwiper
                    key={moviesInfo.type}
                    moviesInfo={moviesInfo}
                  />
                );
              })}
              {MyListFilmes.map((moviesInfo) => {
                return (
                  <CarouselSwiperMyList
                    key={moviesInfo.type}
                    moviesInfo={moviesInfo}
                  />
                );
              })}
            </main>
          </div>

          <Footer />
        </Container>
      )}
    </>
  );
};
export default Dashboard;
