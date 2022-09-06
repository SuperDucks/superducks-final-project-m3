import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Modal, Form, Title } from "./styles";
import { MdOutlineClose } from "react-icons/md";
import { BtnPrimary } from "../../styles/buttons";
import { useOutsiedeClick } from "../../hooks/useOutsideClick";
import { motion } from "framer-motion";

const RateModal = () => {
//const { setIsOpenModal } = useContext(UserContext);

//   const modalRef = useOutsiedeClick(() => {
//     setIsOpenModal(false);
//   });

  return (
    <>
      <Modal>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="modal-content"
          // ref={modalRef}
        >
          <div className="container-title">
            <Title>Avaliar</Title>
            <button className="close">
               {/* onClick={() => setIsOpenModal(false)}> */}
              <MdOutlineClose size={50} />
            </button>
          </div>

          <Form>
            <div className="select-container">
              <label htmlFor="ratio">Ratio</label>

              <select name="rate" id="rate">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <div className="rate-button">
              <BtnPrimary padding="big" type="submit">
                RATE
              </BtnPrimary>
            </div>
          </Form>
        </motion.div>
      </Modal>
    </>
  );
};
export default RateModal;
