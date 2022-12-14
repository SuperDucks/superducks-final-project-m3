import { Container, Header, Main } from "./styles";
import logo from "../../assets/logo.png";
import { BtnFake, BtnPrimary } from "../../styles/buttons";
import { SwiperSlide } from "swiper/react";
import dead from "./../../assets/dead.svg";
import stranger from "./../../assets/stranger.svg";
import carro1 from "./../../assets/img-carro-01.svg";
import carro2 from "./../../assets/carro2.svg";
import carro3 from "./../../assets/carro3.svg";

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
        <figure>
          <img src={logo} alt="logo" />
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
                  slidesPerView={7}
                  spaceBetween={2}
                  grabCursor={true}
                  slideVisibleClass={"swiper-visible"}
                  pagination={{
                    clickable: true,
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
