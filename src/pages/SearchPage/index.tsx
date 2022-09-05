import dead from "./../../assets/dead.svg";
import stranger from "./../../assets/stranger.svg";
import carro1 from "./../../assets/img-carro-01.svg";
import carro2 from "./../../assets/carro2.svg";
import carro3 from "./../../assets/carro3.svg";
import Container from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import NavBar from "../../components/NavBar";
import EditProfileModal from "../../Modals/EditProfileModal";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function SearchPage() {

  const {isOpenEditProfileModal} = useContext(UserContext)
  return (
    <>
      <Container>
      {isOpenEditProfileModal && <EditProfileModal />}
        <NavBar />
        <main className="search_main">
          <div className="search_main_input">
            <button>
              <AiOutlineSearch size={62}/>
            </button>
            <input type="text" />
          </div>

          <div className="content_main">
            <h1>Results</h1>

            <div className="content_main_cards">
              <img className="cards_img" src={dead} alt="" />
              <img className="cards_img" src={stranger} alt="" />
              <img className="cards_img" src={carro1} alt="" />
              <img className="cards_img" src={carro2} alt="" />
              <img className="cards_img" src={carro3} alt="" />
            </div>
          </div>
        </main>
      </Container>
    </>
  );
}

export default SearchPage;
