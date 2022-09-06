import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: var(--color-grey-6);

  .search_main {
    background-color: var(--color-grey-6);
    width: 100%;
    height: 100%;

    padding-top: 130px;
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

  @media (max-width: 700px) {
    input::-webkit-input-placeholder {
      color: transparent;
    }

    input {
      padding: 20px;
    }
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
      margin-top: 30px;
      flex-wrap: wrap;
      margin-bottom: 30px;

      @media (max-width: 600px) {
        display: flex;
        flex-wrap: nowrap;
        overflow-y: scroll;

        ::-webkit-scrollbar-corner {
          background-color: var(--color-grey-6);
        }
      }

      .no_results {
        display: flex;
        flex-direction: column;
        gap: 15px;
        color: white;

        ul {
          list-style: none;
        }
      }
    }

    .cards_img {
      width: 180px;
      margin-top: 30px;
    }
  }
`;

export default Container;
