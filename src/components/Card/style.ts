import styled from "styled-components";

interface IPoster {
  moviePoster?: any;
}

export const Container = styled.div<IPoster>`
  display: flex;
  flex-direction: column;
  background-color: red;
  
  /* gap: 14px; */
  margin-bottom: 56px;

  h2 {
    font: var(--font-title-3);
    color: var(--color-grey-0);
    font-weight: 400;
  }

  
  .carousel-container {
    height: 286px;
    display: flex;
    /* gap: 24px; */

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
          /* margin-top: 8px;

          margin-left: 12px; */
          padding: 8px;
          /* background-color: green; */

          background: rgb(0,0,0);
          background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.605217086834734) 53%, rgba(0,0,0,0.8685224089635855) 100%);

          h2 {
            height: 38px;
            
            font: var(--font-title-8);
           
            /* background-color: red; */
          }

          .carousel-card-ratio {
            display: flex;
            align-items: center;
            gap: 5px;

            p {
              -webkit-text-stroke-width: .8px;
              -webkit-text-stroke-color: #000;
              font: var(--font-title-8);
              color: var(--color-grey-0);
              font-weight: 700;
            }
          }
        }

        .carousel-card-add {
          width: 101%;
          display: flex;
          align-items: center;
          margin-bottom: 6px;
          margin-left: 6px;

          .caroulse-card-add-mark {
            

            display: flex;
            align-items: center;

            gap: 5px;

            p {
              font: var(--font-title-8);
              color: var(--color-grey-4);
              font-weight: 600;
            }
          }
          .button-animation {
            height: 100%;
            width: 40px;
            path {
              width: 100%;
              height: 100%;
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
