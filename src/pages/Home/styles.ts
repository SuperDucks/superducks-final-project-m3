import styled from "styled-components";
import imagem from '../../assets/background.png'



export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${imagem});
  background-repeat: no-repeat;
  background-size: cover;


`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 130px;
  padding-left: 10%;
  padding-right: 10%;

  div {
    display: flex;
    gap: 28px;
  }
`
export const Main = styled.main`
  width: 100%;

  .title-box {
    display: flex;
    flex-direction: column;
    padding-left: 10%;
    padding-right: 10%;

    h1 {
      width: 600px;
      line-height: 60px;
      color: var( --color-grey-0);
      font: var(--font-title-1);
      font-weight: 800;
    }
    h2 {
      width: 706px;
      line-height: 60px;
      color: var( --color-grey-0);
      font: var(--font-title-5);
      font-weight: 500;
    }
  }
`;
