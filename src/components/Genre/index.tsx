import { Container } from "./styles";
import { BsPlusCircleFill } from "react-icons/bs";
import { BtnPrimary } from "../../styles/buttons";
import { useContext } from "react";
import { GenreContext } from "../../context/GenreContext";
import { UserContext } from "../../context/UserContext";

function Genre() {
  const { setIsOpenModalGenre } = useContext(GenreContext);
  const { loading, displayGenre } = useContext(UserContext);

  return (
    <>
      {loading ? (
        <div>Teste</div>
      ) : (
        <Container>
          <h2>Favourit genres</h2>

          <ul>
            {displayGenre?.map((genre) => {
              return (
                <li key={genre}>
                  <BtnPrimary padding="small">{genre}</BtnPrimary>
                </li>
              );
            })}
          </ul>

          <button
            className="genre-add-button"
            onClick={() => setIsOpenModalGenre(true)}
          >
            <BsPlusCircleFill color="white" fontSize={20} />
            <p>Add you favourite genres</p>
          </button>
        </Container>
      )}
    </>
  );
}
export default Genre;
