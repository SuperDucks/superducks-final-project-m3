import { useContext } from "react";
import { BiLogOut } from "react-icons/bi";
import { FaUserEdit } from "react-icons/fa";
import { UserContext } from "../../../context/UserContext";
import { useOutsiedeClick } from "../../../hooks/useOutsideClick";
import DropdownItem from "../DropdownItem";
import { Container } from "./styles";


const DropdownMenu = () => {
  const { dropdownOpen, logoutUser, setIsOpenEditProfileModal, setDropdownOpen } = useContext(UserContext);

  const modalRef = useOutsiedeClick(() => {
    setDropdownOpen(false);
  });

  return (
    <Container ref={modalRef}>
      <div className={`dropdown-menu ${dropdownOpen ? "active" : "inactive"}`}>
        <ul>
          <div onClick={() => {
            setDropdownOpen(false)
            setIsOpenEditProfileModal(true)
          }
          }>
            <DropdownItem text={"Edit profile"}>
              <FaUserEdit size={25} />
            </DropdownItem>
          </div>
          <div onClick={() => {
            setDropdownOpen(false)
            logoutUser()
          }}>
            <DropdownItem text={"Logout"}>
              <BiLogOut size={25} />
            </DropdownItem>
          </div>
        </ul>
      </div>
    </Container>
  );
};
export default DropdownMenu;
