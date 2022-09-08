import styled from "styled-components";
import imagem from "../../assets/background.png";
import { Swiper } from "swiper/react";

export const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-image: url(${imagem});
  background-repeat: no-repeat;
  background-position: center;
  @media screen and (min-width: 1024px) {
    background-size: cover; 
    background-position: top;
  }
`;

export const Header = styled.header`
  height: 12vh;
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  @media screen and (min-width: 600px) {
    padding: 30px;
  }

  .header__menu-icon {
    height: 30px;
    width: 30px;
    display: block;
    @media screen and (min-width: 600px){
    display: none; 
    }

    .menu-button {
      background-color: transparent;
    }
  }
  .logo {
      width: 190px;
    }
  .login-container {
    display: flex;
    gap: 20px;
    display: none;
    @media screen and (min-width: 600px) {
      display: block;
    }
  }
  .menu__container {
    position: fixed;
    display: flex;
    justify-content: space-between;
    width: 100vw;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 15;
    will-change: transform;
    transform: translateX(-100vw);
    background-color: transparent;
    transition: background-color 0.2s ease;
    outline: none;
  }
  .menu__container--open {
    transition: background-color 0.3s ease, transform 0ms;
    transform: translateX(0);
    background-color: rgba(0, 0, 0, 0.4);
  }
  .button-close {
    position: absolute;
    width: 20px;
    top: 10px;
    left: 90%;
    background-color: transparent;
    @media screen and (min-width: 600px) {
      left: 305px;
    }
    @media screen and (min-width: 999px){
      left: 32%;
    }
  }
  .menu-content {
    display: flex;
    position: absolute;
    float: left;
    height: 100%;
    will-change: transform;
    -ms-flex-direction: column;
    flex-direction: column;
    font-family: "Inter", sans-serif;
    box-shadow: 0 2px 20px 0 rgb(0 0 0 / 50%);
    background-color: hsl(0 0% 100%, 0.4);
    backdrop-filter: blur(1.5rem);
    overflow-x: hidden;
    scroll-behavior: smooth;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    width: 30%;
    @media screen and (max-width: 1025px) {
      width: 270px;
    }

    .menu-header {
      background-color: hsl(0 0% 100%, 0.1);
    backdrop-filter: blur(1.5rem);
      
      padding: 20px 24px 15px;
      width: 100%;
      button {
        width: 100%;
      }
      .menu-header-title {
        display: flex;
        flex-direction: column;
        margin-top: 4px;
        margin-bottom: 11px;
        gap: 5px;
        h2 {
          color: #fff;
          font-weight: 700;
          font-size: 18px;
          line-height: 24px;
          text-align: left;
        }
        span {
          line-height: 16px;
          color: #fff;
          text-align: left;
          font-size: 12px;
        }

        .menu-header-login {
          width: 100%;
          margin-bottom: 14px;
        }
      }
      .menu-header-register {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 20px;
        h2 {
          color: #fff;
          font-weight: 700;
          font-size: 18px;
          line-height: 24px;
          text-align: left;
        }
      }
    }
    .menu-button {
      position: relative;
      background: transparent;
      border: none;
      outline: none;
      padding: 0;
    }
  }
`;

export const Main = styled.main`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 86px;

  .title-box {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-top: 18px;
    width: 87%;

    @media screen and (min-width: 425px) {
      max-width: 400px;
      margin: 0;
      padding-left: 20px;
    }

    @media screen and (min-width: 600px) {
      padding-left: 50px;
    }
    @media screen and (min-width: 768px) {
      padding-left: 50px;
      padding-top: 40px;
      max-width: 600px;
    }

    @media screen and (min-width: 1024px) {
      max-width: 500px;
      padding-top: 40px;
      padding-left: 50px;
    }

    h1 {
      line-height: 60px;
      color: var(--color-grey-0);
      font: var(--font-title-2);
      font-weight: 800;
      @media screen and (max-width: 768px) {
        font: var(--font-title-5);
      }
    }
    h2 {
      line-height: 60px;
      color: var(--color-grey-0);
      font: var(--font-title-6);
      font-weight: 500;
      @media screen and (max-width: 768px) {
        font: var(--font-title-12);
      }
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
  display: flex;
  .swiper-button-prev,
  .swiper-button-next {
    z-index: 999999;
  }
  @media screen and (min-width: 1024px) {
    .swiper-slide {
      transition: 250ms all;
      &:hover {
        transform: scale(1.05);
      }
    }  
  }
`;

export const MovieCardSlide = styled.div`
  width: 100%;
  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
  }
  img {
    max-width: 100%;
    max-height: 100%;

    @media screen and (max-width: 600px) {
      max-width: 80%;
      max-height: 80%;
  }
  }
`;

export const Container2 = styled.div`
  width: 86%;
  margin-bottom: 64px;
  overflow: hidden;
`;
