import { Container } from "./styles";
import logo from "../../assets/logo.png";
import imgProfile from "../../assets/img-profile.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import DropdownMenu from "../Dropdown/DropdownMenu";
import { useOutsiedeClick } from "../../hooks/useOutsideClick";


function NavBar() {

  const {user, dropdownOpen, setDropdownOpen} = useContext(UserContext);


  const navigate = useNavigate();
  const modalRef = useOutsiedeClick(() => {
    setDropdownOpen(false);
  });

  return (
    <Container>
      <figure>
        <img src={logo} alt="" />
      </figure>

      <div className="nav-bar-choice">

      <button onClick={() => navigate("/dashboard")}>HOME</button>

        <button onClick={() => navigate("/dashboard")}>HOME</button>

        <hr />
        <button>MY LIST</button>
      </div>

      <div className="nav-bar-search">
        <input type="text" placeholder="Search" />
        <button onClick={() => navigate("/search", { replace: true })}>
          <AiOutlineSearch size={"25"} />
        </button>
      </div>

      <div className="nav-bar-profile">
        <h3>{user?.name}</h3>
        <div ref={modalRef}>
        <button onClick={() => setDropdownOpen(!dropdownOpen)}>
          <RiArrowDropDownLine color="white" font-size={50} />
        </button>
        <DropdownMenu/>        
        </div>
        <figure>
          <img src={imgProfile} alt="" />
        </figure>    
      </div>
    </Container>
  );
}
export default NavBar;


