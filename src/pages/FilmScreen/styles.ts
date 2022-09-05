import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  .main-movie {
    width: 100%;
    height: 80%;
    padding-top: 150px;

    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .background-form {
      position: fixed;
      z-index: 0;
      width: 60%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
      clip-path: polygon(0 0, 100% 0%, 68% 100%, 0% 100%);
    }

    .main-movie-carousel {
      z-index: 2;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 100%;
      height: 328px;
      margin-bottom: 28px;

      div {
        width: 65%;
        height: 100%;
        background: rgba(0, 0, 0, 0.72);
      }
    }

    .main-movie-section {
      z-index: 1;
      width: 32%;
      margin-top: 80px;
      margin-left: 90px;
      /* background-color: black; */

      display: flex;
      flex-direction: column;
      gap: 40px;

      .main-movie-section-header {
        display: flex;
        flex-direction: column;
        /* background-color: red; */

        h1 {
          width: 75%;
          font: var(--font-title-1);
          color: var(--color-grey-0);
          font-size: 45px;
        }

        h2 {
          font: var(--font-title-3);
          color: white;
          font-weight: 600;
        }
      }

      .main-movie-section-content {
        display: flex;
        flex-direction: column;
        gap: 10px;

        /* background-color: blue; */

        h3 {
          font: var(--font-title-7);
          color: var(--color-grey-0);
          font-weight: 500;
        }

        div {
          display: flex;
          align-items: center;
          gap: 8px;

          p {
            font: var(--font-title-7);
            color: var(--color-grey-0);
            font-weight: 600;
          }
        }
      }

      .main-movie-section-footer {
        display: flex;
        gap: 15px;

        /* background-color: green; */

        .favorite-button {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 45px;
          height: 45px;
          border-radius: 50%;
        }
      }
    }
  }
`;
