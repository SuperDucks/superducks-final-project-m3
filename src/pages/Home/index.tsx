import { Container, Header, Main } from "./styles";
import logo from '../../assets/logo.png';
import { BtnFake, BtnPrimary } from "../../styles/buttons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { Container2, Grid, MovieCardSlide, StyledSwiper } from "./styles";
import LoginModal from "../../Modals/LoginModal";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import RegisterModal from "../../Modals/RegisterModal";


const Home = () => {
  return (
    <Container>
    <Header>     
        <figure>
          <img src={logo} alt="logo"/>
        </figure>
        <div>
          <BtnPrimary>Register</BtnPrimary>
          <BtnFake>Sign UP</BtnFake>
        </div>
    </Header>
    <Main>
      <div className="title-box">
        <h1>Agora ficou muito mais fácil encontrar filmes e séries</h1>
        <h2>Você não precisa mais gastar horas e horas procurando filmes em catálogos extensos e intermináveis</h2>
      </div>
        <section className="section-box">
          <ul className="carrossel-box">          
           <li>card1</li> {/* componente card */}
          </ul>
        </section>
    </Main>  
    </Container>
  )
}
export default Home;
