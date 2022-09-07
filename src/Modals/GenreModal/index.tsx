import { useContext } from "react";
import { MdOutlineClose } from "react-icons/md";
import { genres } from "../../context/FilmContext/genre";
import { GenreContext } from "../../context/GenreContext";
import { useOutsiedeClick } from "../../hooks/useOutsideClick";
import { BtnPrimary } from "../../styles/buttons";
import { Modal, ThemeTitle } from "./style";
import { motion } from "framer-motion";
import { UserContext } from "../../context/UserContext";

const GenreModal = () => {
  const { displayGenre } = useContext(UserContext);
  const { setIsOpenModalGenre, addUserGenre } = useContext(GenreContext);

  const toggleGenre = (genreName: string) => {
    if (!displayGenre?.includes(genreName)) {
      addUserGenre([...displayGenre, genreName]);
    } else {
      const filterGenre = displayGenre.filter((genre) => genre !== genreName);
      addUserGenre(filterGenre);
    }
  };

  const modalRef = useOutsiedeClick(() => {
    setIsOpenModalGenre(false);
  });

  return (
    <>
      <Modal>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="modal-content"
          ref={modalRef}
        >
          <div className="container-title">
            <h2 className="title">Genres</h2>
            <button
              className="close"
              onClick={() => setIsOpenModalGenre(false)}
            >
              <MdOutlineClose size={32} />
            </button>
          </div>
          <div className="genre-container">
            {genres.map((genre) => {
              return (
                <BtnPrimary
                  key={genre.name}
                  buttonStyle="genre"
                  className="genre-buttons"
                  select={displayGenre.find((g) => {
                    return g === genre.name;
                  })}
                  onClick={() => {
                    toggleGenre(genre.name);
                  }}
                >
                  {genre.name}{" "}
                </BtnPrimary>
              );
            })}
          </div>
        </motion.div>
      </Modal>
    </>
  );
};
export default GenreModal;
