import { Container, Header, Main } from "./styles";
import logo from "../../assets/logo.png";
import {
  BtnFake,
  BtnPrimary,
  BtnRegister,
} from "../../styles/buttons";
import { SwiperSlide } from "swiper/react";
import dead from "./../../assets/dead.svg";
import stranger from "./../../assets/stranger.svg";
import carro1 from "./../../assets/img-carro-01.svg";
import carro2 from "./../../assets/carro2.svg";
import carro3 from "./../../assets/carro3.svg";
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { Container2, Grid, MovieCardSlide, StyledSwiper } from "./styles";
import LoginModal from "../../Modals/LoginModal";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import RegisterModal from "../../Modals/RegisterModal";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    setIsOpenModal,
    isOpenModal,
    setIsOpenModalRegister,
    isOpenModalRegister,
  } = useContext(UserContext);

  return (
    <Container>
      {isOpenModal && <LoginModal />}
      {isOpenModalRegister && <RegisterModal />}

      <Header>
        <div className="header__menu-icon">
          <button className="menu-button">
            <HiMenu size={30} color={"white"} onClick={() => setIsOpen(true)} />
          </button>
          {isOpen && (
            <div className="menu__container menu__container--open">
              <button className="button-close">
                <CgClose
                  size={30}
                  color={"white"}
                  onClick={() => setIsOpen(false)}
                />
              </button>
              <div className="menu-content">
                <div className="menu-header">
                  <div className="menu-header-title">
                    <h2>Já tem uma conta Duckplay?</h2>
                    <span>
                      Entre com sua conta e conheça as melhores sugestões para
                      você.
                    </span>
                  </div>
                  <div className="menu-header-login">
                    <BtnPrimary
                      padding="big"
                      onClick={() => {
                        setIsOpen(false)
                        setIsOpenModal(true)
                      }}
                    >
                      LOG IN
                    </BtnPrimary>
                  </div>
                  <div className="menu-header-register">
                    <h2>Ainda não é cadastrado?</h2>
                    <BtnRegister onClick={() => {
                      setIsOpen(false)
                      setIsOpenModalRegister(true)
                    }}>
                      Cadastre-se agora
                    </BtnRegister>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <figure>
          <img src={logo} alt="logo"  className="logo"/>
        </figure>
        <div className="login-container">
          <BtnPrimary
            padding="big"
            onClick={() => setIsOpenModalRegister(true)}
          >
            SIGN UP
          </BtnPrimary>
          <BtnFake onClick={() => setIsOpenModal(true)}>LOG IN</BtnFake>
        </div>
      </Header>
      <Main>
        <div className="title-box">
          <h1>Now it's much easier to find movies and series</h1>
          <h2>
            You no longer have to spend hours and hours looking for movies on
            extensive and endless catalogs
          </h2>
        </div>

        <section className="section-box">
          <Grid>
            <Container2>
              <div>
                <StyledSwiper
                  spaceBetween={50}
                  grabCursor={true}
                  slideVisibleClass={"swiper-visible"}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    300:{                   
                      slidesPerView: 1,                     
                      slidesPerGroup: 1,  
                    },                  
                    560:{
                      spaceBetween: 10,
                      slidesPerView: 2,                   
                      slidesPerGroup: 2,  
                    },                  
                    800:{
                      spaceBetween: 10,
                      slidesPerView: 3,                   
                      slidesPerGroup: 3,  
                    },                  
                    1200:{
                      spaceBetween: 50,
                      slidesPerView: 5,                  
                      slidesPerGroup: 5,  
                    }                  
                  }}
                         
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <MovieCardSlide>
                      <img src={dead} alt="dead" />
                    </MovieCardSlide>
                  </SwiperSlide>
                  <SwiperSlide>
                    <MovieCardSlide>
                      <img src={stranger} alt="stranger" />
                    </MovieCardSlide>
                  </SwiperSlide>
                  <SwiperSlide>
                    <MovieCardSlide>
                      <img src={carro1} alt="carro1" />
                    </MovieCardSlide>
                  </SwiperSlide>
                  <SwiperSlide>
                    <MovieCardSlide>
                      <img src={carro2} alt="carro2" />
                    </MovieCardSlide>
                  </SwiperSlide>
                  <SwiperSlide>
                    <MovieCardSlide>
                      <img src={carro3} alt="carro3" />
                    </MovieCardSlide>
                  </SwiperSlide>
                  <SwiperSlide>
                    <MovieCardSlide>
                      <img src={carro1} alt="carro1" />
                    </MovieCardSlide>
                  </SwiperSlide>
                  <SwiperSlide>
                    <MovieCardSlide>
                      <img src={dead} alt="dead" />
                    </MovieCardSlide>
                  </SwiperSlide>
                  <SwiperSlide>
                    <MovieCardSlide>
                      <img src={carro3} alt="carro3" />
                    </MovieCardSlide>
                  </SwiperSlide>
                </StyledSwiper>
              </div>
            </Container2>
          </Grid>
        </section>
      </Main>
    </Container>
  );
};
export default Home;
