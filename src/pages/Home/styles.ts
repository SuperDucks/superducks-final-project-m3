import styled from "styled-components";
import imagem from '../../assets/background.png'
import { Swiper } from "swiper/react";



export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${imagem});
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 768px){
    
  }

`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  padding: 30px 130px;
  width: 100%;
  img {
    width: 85%;
  }
  @media screen and (max-width: 768px){
    padding: 24px;   
  }
  .login-container {
    display: flex;
    gap: 20px;
  }
`
export const Main = styled.main`
  width: 100%;
  padding: 0px 50px;
  @media screen and (max-width: 768px){
    padding: 24px;   
  }

  .title-box {
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 800px;
    padding: 0px 100px;
   


    h1 {
      line-height: 60px;
      color: var( --color-grey-0);
      font: var(--font-title-2);
      font-weight: 800;
      @media screen and (max-width: 768px){
        font: var(--font-title-4);   
  }

    }
    h2 {
      line-height: 60px;
      color: var( --color-grey-0);
      font: var(--font-title-6);
      font-weight: 500;
    }
  }
`;

export const Grid = styled.div`
  overflow-x: hidden;
  width: 100%;
`
export const StyledSwiper = styled(Swiper)`
  overflow: visible;

  .swiper-button-prev,
  .swiper-button-next {
    z-index: 2;
    ::after {
      color: white;
      font-size: 30px;
      font-weight: 900;
    }
  } 
`;
export const MovieCardSlide = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 230px;
  }
`;
export const Container2 = styled.div`
  width: 100%;
  max-width: 1300px;
  padding: 100px 0 0 10%;
  

`;

