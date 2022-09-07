import styled from "styled-components";

interface IProps {
  invisible: boolean;
}
export const Container = styled.div<IProps>`
  height: 130px;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 40;

  padding: 16px;

  transition: background-color 0.3s ease, opacity 0.2s linear;
  background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0.64), transparent);
  /* background: ${(props) =>
    props.invisible ? "rgba(17, 17, 17, 0.5)" : "var(--color-grey-5)"}; */
  @media screen and (min-width: 1024px) {
    padding: 0px 80px;
  }
  background: linear-gradient(0deg, rgba(11,11,11,0) 0%, rgba(9,10,10,0.27244401178440125) 34%, rgba(7,8,8,0.7458333675266982) 100%);

  
  .logo-align {
   
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    width: 30%;

    img {
      width: 170px;
      @media screen and (min-width: 1024px){
      width: 190px;
    }
    }
  }

  .nav-bar-choice {
    display: flex;
    align-items: center;
    gap: 10px;
    display: none;
    hr {
      height: 20px;
    }
    .btn-my-list {
      background-color: transparent;
      font: var(--font-title-7);
      color: var(--color-grey-0);
      font-weight: 600;
      width: 80px;
    }
    p {
      font: var(--font-title-7);
      font-weight: 600;
    }
    @media screen and (min-width: 700px){
      display: flex;
      
    }
  }

  .nav-bar-search {
    button {
      display: flex;
      align-items: center;
      gap: 10px;    
      background-color: transparent;
      color: var(--color-grey-0);
    }
  }

  .active button {
    color: yellow;
  }

  .nav-bar-profile {
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;

    .user-name {
      font: var(--font-title-7);
      color: var(--color-grey-0);
      font-weight: 500;
      @media screen and (max-width: 700px){
        display: none;
        font: var(--font-title-8);
      }
    }

    button {
      background-color: transparent;
    }

    figure {
      width: 50px;
      height: 50px;
      border-radius: 50px;
      overflow: hidden;
      box-shadow: 3px 3px 40px rgba(133, 133, 133, 0.1);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;
