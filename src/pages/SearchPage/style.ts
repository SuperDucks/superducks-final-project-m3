import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .search_main {
    background-color: var(--color-grey-6);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;

    .search_main_input {
      background: #323232;
      display: flex;
      height: 160px;
      width: 100%;
      button {
        margin-left: 60px;
        border: none;
        background: transparent;
        color: white;
      }
      input {
        background: #323232;
        border: none;
        width: 100%;
        height: 100%;
        color: white;
        font-size: 35px;
        padding-left: 40px;
      }
    }
  }

  .results {
    display: flex;
    color: white;
  }

  .content_main {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 60px;
    gap: 12px;

    h1 {
      font: var(--font-title-4);
      color: var(--color-grey-0);
      font-weight: 600;

      width: 100%;
    }

    .content_main_cards {
      width: 100%;
      display: flex;
      gap: 7%;
      flex-wrap: wrap;
      margin-bottom: 30px;
    }

    .cards_img {
      width: 180px;
      margin-top: 30px;
    }
  }
`;

export default Container;
