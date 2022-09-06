import styled from "styled-components";

interface IProps {
  invisible: boolean;
}
export const Container = styled.div<IProps>`
  width: 100%;
  height: 130px;

  position: fixed;
  display: flex;

  justify-content: space-between;
  align-items: center;
  z-index: 40;

  padding-left: 6%;
  padding-right: 6%;

  transition: background-color 0.3s ease, opacity 0.2s linear;
  background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0.64), transparent);
  background: ${(props) =>
    props.invisible ? "rgba(17, 17, 17, 0.5)" : "var(--color-grey-5)"};

  .logo-align {
    width: 39%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
  }

  .nav-bar-choice {
    display: flex;
    align-items: center;
    gap: 20px;

    button {
      background-color: transparent;
      font: var(--font-title-7);
      color: var(--color-grey-0);
      font-weight: 600;
    }
  }

  hr {
    height: 40px;
  }

  .nav-bar-search {
    button {
      display: flex;

      align-items: center;
      gap: 10px;
      padding-right: 15px;
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

    h3 {
      font: var(--font-title-6);
      color: var(--color-grey-0);
      font-weight: 500;
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
