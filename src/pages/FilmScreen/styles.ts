import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  .main-movie {
    width: 100%;
    height: 100%;
    padding-top: 130px;

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
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 2;
      padding-top: 26px;
      /* display: flex;
      justify-content: flex-start; */
      /* align-items: center; */
      /* flex-direction: row; */
      width: 90%;
      height: 360px;
      margin-bottom: 28px;
      background: rgba(0, 0, 0, 0.4);
    }

    .main-movie-carousel > div {
      margin-bottom: 0;
      margin-left: 20px;
    }

    .main-movie-section {
      z-index: 1;
      width: 36%;
      margin-top: 80px;
      margin-left: 90px;

      display: flex;
      flex-direction: column;
      gap: 40px;

      .main-movie-section-header {
        display: flex;
        flex-direction: column;

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
