import styled from "styled-components";

interface IPoster {
  moviePoster?: any;
}

export const Container = styled.div<IPoster>`
  display: flex;
  flex-direction: column;

  
  gap: 14px;
  margin-bottom: 56px;


  h2 {
    font: var(--font-title-3);
    color: var(--color-grey-0);
    font-weight: 400;
  }

  
  .carousel-container {
    height: 286px;
    display: flex;
    gap: 24px;

    .carousel-card {
      /* background-color: blue; */
      background-image: url("https://image.tmdb.org/t/p/original${({ moviePoster,}) => moviePoster}");
      background-position: center;
      background-size: cover;
      width: 196px;
      height: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;

      .carousel-card-main {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: space-between;

        .carousel-card-title {
          margin-left: 18px;
          /* background-color: green; */

          h2 {
            font: var(--font-title-8);
            color: var(--color-grey-0);
          }

          .carousel-card-ratio {
            display: flex;
            align-items: center;
            gap: 5px;

            p {
              font: var(--font-title-9);
              color: var(--color-grey-0);
              font-weight: 400;
            }
          }
        }

        .carousel-card-add {
          width: 101%;
          height: 32px;

          display: flex;
          align-items: center;

          margin-bottom: 6px;
          margin-left: 6px;
          background-color: red;

          .caroulse-card-add-mark {
            height: 100%;

            display: flex;
            align-items: center;

            gap: 5px;
            padding: 8px;

            p {
              font: var(--font-title-8);
              color: var(--color-grey-4);
              font-weight: 600;
            }
          }

          .genre {
            width: 100%;
            height: 100%;
            background-color: var(--color-primary);

            font: var(--font-title-8);
            color: var(--color-grey-4);
            font-weight: 600;
          }
        }
      }
    }
  }


`;
