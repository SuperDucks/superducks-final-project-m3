import { Container } from "./styles";
import logo from "../../assets/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { NavLink, useNavigate } from "react-router-dom";
import DropdownMenu from "../Dropdown/DropdownMenu";
import { useOutsiedeClick } from "../../hooks/useOutsideClick";

function NavBar() {
  const { user, setDropdownOpen } = useContext(UserContext);
  const [invisible, setInvisible] = useState(true);

  window.addEventListener("scroll", () => {
    window.scrollY < 25 ? setInvisible(true) : setInvisible(false);
  });
  const navigate = useNavigate();
  const modalRef = useOutsiedeClick(() => {
    setDropdownOpen(false);
  });

  return (
    <Container invisible={invisible}>
      <div className="logo-align">
        <NavLink to="/dashboard">
          <figure>
            <img src={logo} alt="Logo Duckplay" />
          </figure>
        </NavLink>
        <div className="nav-bar-choice">
          <button>MY LIST</button>
          <hr />
          <div className="nav-bar-search">
            <NavLink to={"/search"}>
              <button onClick={() => navigate("/search", { replace: true })}>
                <p>SEARCH</p>
                <AiOutlineSearch size={35} />
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      <div
        className="nav-bar-profile"
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <h3>{user?.name}</h3>
        <div ref={modalRef}>
          <button onMouseOver={() => setDropdownOpen(true)}>
            <RiArrowDropDownLine color="white" fontSize={50} />
          </button>
          <DropdownMenu />
        </div>
        <figure onMouseOver={() => setDropdownOpen(true)}>
          <img src={user?.avatar_url} alt="" />
        </figure>
      </div>
    </Container>
  );
}
export default NavBar;
