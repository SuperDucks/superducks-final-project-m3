import { useContext } from "react";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Genre from "../../components/Genre";
import NavBar from "../../components/NavBar";
import { IMovies } from "../../context/FilmContext/interfaces";
import { GenreContext } from "../../context/GenreContext";
import { UserContext } from "../../context/UserContext";
import EditProfileModal from "../../Modals/EditProfileModal";
import GenreModal from "../../Modals/GenreModal";
import { Container } from "./styles";


const MyList = () => {
  const { isOpenModalGenre } = useContext(GenreContext);
  const { isOpenEditProfileModal, movieList } = useContext(UserContext);

  return (
    <>
      <Container>
        {isOpenModalGenre && <GenreModal />}
        {isOpenEditProfileModal && <EditProfileModal />}

        <NavBar />

        <div className="content">
          <aside>
            <Genre />
          </aside>
          <main>
            <h1>My List</h1>

            <section>

              {
                movieList.map((movie: IMovies) => {
                  return (
                    <Card class-name="card-container" key={movie.id} movie={movie}></Card>
                  );
                })
              }

            </section>
          </main>
        </div>

        <Footer />
      </Container>
    </>
  );
};
export default MyList;
