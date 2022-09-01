import { useContext } from "react";
import { MdOutlineClose } from "react-icons/md";
import { genres } from "../../context/FilmContext/genre";
import { GenreContext } from "../../context/GenreContext";
import { useOutsiedeClick } from "../../hooks/useOutsideClick";
import { BtnPrimary } from "../../styles/buttons";
import { Modal, ThemeTitle } from "./style";

const GenreModal = () => {
  const { setIsOpenModalGenre } = useContext(GenreContext);

  const modalRef = useOutsiedeClick(() => {
    setIsOpenModalGenre(false);
  });

  return (
    <>
      <Modal>
        <div className="modal-content" ref={modalRef}>
          <div className="container-title">
            <ThemeTitle>Genres</ThemeTitle>
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
                <BtnPrimary className="genre-buttons">{genre.name}</BtnPrimary>
              );
            })}
          </div>
        </div>
      </Modal>
    </>
  );
};
export default GenreModal;
