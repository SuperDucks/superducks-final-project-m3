import { Container } from "./styles";
import logo from '../../assets/logo.png';
import imgProfile from '../../assets/img-profile.svg';
import { AiOutlineSearch } from 'react-icons/ai'
import { RiArrowDropDownLine } from 'react-icons/ri'

function NavBar() {
  return (

    <Container>

      <figure>
        <img src={ logo } alt="" />
      </figure>

      <div className="nav-bar-choice">
        <button>HOME</button>
        <hr />
        <button>MY LIST</button>
      </div>

      <div className="nav-bar-search">
        <input type="text" placeholder="Search" />
        <button><AiOutlineSearch size={'25'} /></button>
      </div>

      <div className="nav-bar-profile">
        <h3>Dara</h3>
        <button>
          <RiArrowDropDownLine color="white" font-size={50} />
        </button>
        <figure>
          <img src={imgProfile} alt="" />
        </figure>
      </div>

    </Container>

  )
}

export default NavBar;