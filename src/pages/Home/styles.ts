import styled from "styled-components";
import imagem from "../../assets/background.png";
import { Swiper } from "swiper/react";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${imagem});
  background-repeat: no-repeat;
  background-size: cover;
  
`;

export const Header = styled.header`
  height: 15%;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 30px 0;
  padding-left: 7%;
  padding-right: 7%;

  img {
    width: 85%;
  }

  @media screen and (max-width: 768px) {
    padding: 24px;
  }

  .login-container {
    display: flex;
    gap: 20px;
  }
`;

export const Main = styled.main`
  width: 100%;
  height: 85%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 86px;

  @media screen and (max-width: 768px) {
    padding: 24px;
  }

  .title-box {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 45%;
    padding-top: 40px;
    padding-left: 7%;
    padding-right: 7%;

    h1 {
      line-height: 60px;
      color: var(--color-grey-0);
      font: var(--font-title-2);
      font-weight: 800;
      @media screen and (max-width: 768px) {
        font: var(--font-title-4);
      }
    }
    h2 {
      line-height: 60px;
      color: var(--color-grey-0);
      font: var(--font-title-6);
      font-weight: 500;
    }
  }
`;

export const Grid = styled.div`
  overflow-x: hidden;
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const StyledSwiper = styled(Swiper)`

  .swiper-button-next {
    z-index: 2;
    padding-right: 60px;

  }

`;

export const MovieCardSlide = styled.div`
  width: 100%;
`;

export const Container2 = styled.div`
  width: 86%;
  margin-bottom: 64px;
  overflow: hidden;
`;
