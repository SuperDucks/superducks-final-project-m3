import { useContext } from "react";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";
import { FiCheckSquare } from "react-icons/fi";
import { UserContext } from "../../../context/UserContext";
import DropdownItem from "../DropdownItem";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import { GenreContext } from "../../../context/GenreContext";

const DropdownMenu = () => {

  const navigate = useNavigate();
  const {
    dropdownOpen,
    logoutUser,
    setIsOpenEditProfileModal,
    setDropdownOpen,
    user,
  } = useContext(UserContext);
  const { setIsOpenModalGenre } = useContext(GenreContext);

  return (
    <Container>
      <div className={`dropdown-menu ${dropdownOpen ? "active" : "inactive"}`}>
        <ul>
          <div className="user-dropdown">
            <DropdownItem text={`Hi, ${user?.name}!`}></DropdownItem>
          </div>
          <div
            className="search-dropdown"
            onClick={() => {
              setDropdownOpen(false);
              navigate("/search", { replace: true })
            }}
          >
            <DropdownItem text={"Search"}>
              <AiOutlineSearch size={25} />
            </DropdownItem>
          </div>
          <div
            className="genres-dropdown"
            onClick={() => {
              setDropdownOpen(false);
              setIsOpenModalGenre(true);
            }}
          >
            <DropdownItem text={"Genres"}>
              <FiCheckSquare size={25} />
            </DropdownItem>
          </div>
          <div
            onClick={() => {
              setDropdownOpen(false);
              setIsOpenEditProfileModal(true);
            }}
          >
            <DropdownItem text={"Edit profile"}>
              <FaUserEdit size={25} />
            </DropdownItem>
          </div>
          <div
            onClick={() => {
              setDropdownOpen(false);
              logoutUser();
            }}
          >
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
