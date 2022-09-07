import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  .main-movie {
    width: 100%;
    height: 100%;
    padding-top: 130px;

    /* background-repeat: no-repeat;
    background-size: cover; */

    background-repeat: no-repeat;
    background-position: center;

    @media (min-width: 600px) {
      background-size: cover; 
      background-position: top;
    }




    display: flex;
    flex-direction: column;
    gap: 50px;

    .background-form {
      position: fixed;
      z-index: 0;
      width: 60%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
      clip-path: polygon(0 0, 100% 0%, 68% 100%, 0% 100%);
    }

    .main-movie-section {
      z-index: 1;
      width: 90%;
      height: 450px;
      padding: 35px;

      @media (min-width: 500px) {
        width: 80%;
        padding: 50px 65px;
      }

      @media (min-width: 800px) {
        width: 70%;
      }

      margin: 0 auto;

      background: radial-gradient(
        circle,
        rgba(0, 0, 0, 0.7122199221485469) 0%,
        rgba(0, 0, 0, 0.3536765047816002) 51%,
        rgba(0, 0, 0, 0) 100%
      );

      backdrop-filter: blur(3px);

      display: flex;
      flex-direction: column;
      gap: 18px;

      .main-movie-section-header {
        display: flex;
        flex-direction: column;

        h1 {
          width: 100%;
          height: 90px;
          overflow: hidden;
          font: var(--font-title-4);
          color: var(--color-grey-0);
        }

        h2 {
          width: 75%;
          height: 52px;
          overflow: hidden;
          font: var(--font-title-9);
          color: white;
          font-weight: 500;
        }
      }

      .main-movie-section-content {
        display: flex;
        flex-direction: column;
        gap: 10px;

        h3 {
          height: 95px;
          overflow-y: scroll;
          font: var(--font-title-9);
          color: var(--color-grey-0);
          font-weight: 500;
        }

        div {
          display: flex;
          align-items: center;
          gap: 8px;

          p {
            font: var(--font-title-10);
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

  .main-movie-carousel-background {
    width: 90%;
    display: flex;
    justify-content: end;
    align-items: end;
    overflow: hidden;

    margin: 0 auto;

    .main-movie-carousel {
      z-index: 2;
      padding-top: 18px;

      width: 100%;
      height: 325px;

      margin-bottom: 18px;
      background: rgba(0, 0, 0, 0.4);

      .main-movie-carousel > div {
        margin-bottom: 0;
        margin-left: 20px;
      }
    }
  }

  @media (min-width: 1040px) {
    .main-movie {
      height: 100vh;

      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .main-movie-section {
        width: 40%;
        margin-top: 2%;
        margin-left: 5%;
      }
    }

    .main-movie-carousel-background {
      width: 53%;
    }
  }
`;
