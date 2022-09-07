import { Container, Header, Main } from "./styles";
import logo from "../../assets/yellow-logo.svg";
import {
  BtnFake,
  BtnPrimary,
  BtnRegister,
} from "../../styles/buttons";
import { SwiperSlide } from "swiper/react";
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
import { FilmContext } from "../../context/FilmContext";
import LottieLoading from "../../components/LottieLoading";


const Home = () => {
  const { loadingPage } = useContext(FilmContext);
  const [isOpen, setIsOpen] = useState(false);
  const {
    setIsOpenModal,
    isOpenModal,
    setIsOpenModalRegister,
    isOpenModalRegister,
  } = useContext(UserContext);
  const {upcomingMoviesHome} = useContext(FilmContext);
  const moviesHome = upcomingMoviesHome
  moviesHome.length = 10
  return (
    <>
      {
        loadingPage ? (
          <LottieLoading/>
        )
        : (
          <>
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
                        <h2>Already have an account?</h2>
                        <span>
                        Log in with your account and discover the best suggestions for you.
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
                        <h2>New to Duckplay?</h2>
                        <BtnRegister onClick={() => {
                          setIsOpen(false)
                          setIsOpenModalRegister(true)
                        }}>
                          Sign up now
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
                      {
                        moviesHome.map((movie) => {
                          return (
                          <SwiperSlide key={movie.id}>
                            <MovieCardSlide>
                              <img src={`https://image.tmdb.org/t/p/original${ movie.poster_path }`} alt={movie.title}/>
                            </MovieCardSlide>
                          </SwiperSlide>
                          )
                        })
                      }
                    </StyledSwiper>
                  </div>
                </Container2>
              </Grid>
            </section>
          </Main>
        </Container>
          </>
        )
      }

    
    </>
    
  );
};
export default Home;
